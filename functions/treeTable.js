// import { ifcLoader, model } from "./loadIfc";
// import { createPropertySelection } from "./quantities";

import { MeshLambertMaterial } from "three";
import { IfcRelConnectsPortToElement } from "web-ifc";
import getEmission from "./emission";
import { getMaterial } from "./materials";
import { getQuantityByElement } from "./quantities";
import { getUoM, fillUoM } from "./uom";
import { DecodeIFCString } from "./DecodeIfcString"

let model;
let ifcLoader;
let scene;
let selectedElementId;
let emmisionsArray = [];
let emissionsTotal = 0;

const preselectMat = new MeshLambertMaterial({
  transparent: true,
  opacity: 1,
  color: 0x0396a6,
  depthTest: true,
});

function getParent(target) {
  let parent = target;
  let tDepth = target.getAttribute("data-depth");
  let isParent = false;
  while (!tDepth) {
    target = target.previousElementSibling;
    tDepth = target.getAttribute("data-depth");
  }
  while (!isParent) {
    parent = parent.previousElementSibling;
    let pDepth = parent.getAttribute("data-depth");
    if (pDepth) {
      isParent = pDepth < tDepth;
    }
  }
  return parent;
}

function getAllChilds(parent) {
  let childs = [];
  let pDepth = parseInt(parent.getAttribute("data-depth"));
  let child = parent.nextElementSibling;
  let cDepth = child.getAttribute("data-depth");
  let isChild = true;
  while (isChild) {
    if (cDepth) {
      if (cDepth > pDepth) {
        childs.push(child);
        child = child.nextElementSibling;
        cDepth = parseInt(child.getAttribute("data-depth"));
        if (cDepth) {
          isChild = cDepth > pDepth;
        } else {
          isChild = true;
        }
      } else {
        isChild = false;
      }
    } else {
      childs.push(child);
      child = child.nextElementSibling;
      cDepth = parseInt(child.getAttribute("data-depth"));
      isChild = true;
    }
  }

  return childs;
}

function recalculateSubtotal(parent) {
  const childs = getAllChilds(parent);
  let subtotal = 0;

  for (const child of childs) {
    const emission = child.getElementsByClassName("emissions")[0];
    let em = emission?.textContent;
    em = em.replace(",", "");
    subtotal += parseFloat(em);
  }
  return subtotal;
}

function updateSubtotal(target, isParent = false) {
  let parent;
  if (!isParent) {
    parent = getParent(target);
  } else {
    parent = target;
  }
  const subtotal = parent.getElementsByClassName("subtotal")[0];
  let emissionSubTotal = recalculateSubtotal(parent);
  subtotal.textContent = printNumber(emissionSubTotal);
}

export default async function createTreeTable(ifcProject, modelObj, ifcloader) {
  const tableRoot = document.getElementById("boq");
  model = modelObj;
  ifcLoader = ifcloader;
  const uom = await fillUoM(ifcLoader, model, "length");
  removeAllChildren(tableRoot);
  await populateIfcTable(tableRoot, ifcProject, model, ifcLoader);
  implementTreeLogic();

  const qtySelector = document.getElementsByClassName("quantity-type");
  document.body.addEventListener("change", function (event) {
    if (event.target.classList.contains("quantity-type")) {
      const quants =
        event.target.parentElement.nextElementSibling.quants[event.target.value]
          .value;
      event.target.parentElement.nextElementSibling.textContent =
        printNumber(quants);

      const type =
        event.target.parentElement.nextElementSibling.quants[event.target.value]
          .type;
      let uom = getUom(type);
      const tdUoM =
        event.target.parentElement.nextElementSibling.nextElementSibling;
      tdUoM.textContent = uom;

      const factor = tdUoM.nextElementSibling.nextElementSibling;
      const emissionOld = factor.nextElementSibling.textContent;
      emissionsTotal -= emissionOld;

      const emission = factor.textContent * quants;
      factor.nextElementSibling.textContent = printNumber(emission);
      emissionsTotal += emission;
      const emissionsTotalData = document.getElementById("emissionsTotal");
      emissionsTotalData.textContent = printNumber(emissionsTotal);
      updateSubtotal(event.target.parentElement.parentElement);
    }
    if (event.target.classList.contains("group-select")) {
      const setVal = event.target.value;
      const parentTR = event.target.parentElement;

      let child = parentTR.nextElementSibling;
      let isChild =
        parentTR.getAttribute("data-depth") < child.getAttribute("data-depth");
      while (isChild) {
        const qtySelect = child.getElementsByTagName("select")[0];
        qtySelect.value = setVal;
        qtySelect.parentElement.nextElementSibling.textContent =
          qtySelect.parentElement.nextElementSibling.quants[
            setVal
          ].value.toFixed(2);
        const type =
          qtySelect.parentElement.nextElementSibling.quants[setVal].type;
        let uom = getUom(type);
        qtySelect.parentElement.nextElementSibling.nextElementSibling.textContent =
          uom;
        let emission = child.getElementsByClassName("emissions")[0];
        let empu = emission.previousElementSibling;
        emission.textContent = printNumber(
          parseFloat(empu.textContent.replace(",", "")) *
            qtySelect.parentElement.nextElementSibling.quants[setVal].value
        );
        child.element;
        if (child.nextElementSibling.getAttribute("data-depth")) {
          isChild =
            parentTR.getAttribute("data-depth") <
            child.nextElementSibling.getAttribute("data-depth");
        } else {
          isChild = true;
        }
        child = child.nextElementSibling;
      }
      updateSubtotal(event.target.parentElement, true);
    }
  });
}

function getUom(type) {
  let uom = "";
  switch (type) {
    case "length":
      uom = getUoM(ifcLoader, model, "length");
      break;
    case "area":
      uom = getUoM(ifcLoader, model, "area");
      break;
    case "volume":
      uom = getUoM(ifcLoader, model, "volume");
      break;
    default:
      uom = "";
      break;
  }
  return uom;
}

async function populateIfcTable(table, ifcProject) {
  const initialDepth = 0;
  const header = document.createElement("thead");
  createHeader(header);
  table.appendChild(header);

  const body = document.createElement("tbody");
  await createNode(body, ifcProject, initialDepth, ifcProject.children);
  table.appendChild(body);

  const footer = document.createElement("tfoot");
  createTotal(footer);
  table.appendChild(footer);
}

function createHeader(table) {
  const row = document.createElement("tr");
  const element = document.createElement("th");
  element.textContent = "IFC Element";
  row.appendChild(element);
  const quantityType = document.createElement("th");
  quantityType.textContent = "Quantity Type";
  row.appendChild(quantityType);
  const quantity = document.createElement("th");
  quantity.textContent = "Quantity";
  row.appendChild(quantity);
  const unit = document.createElement("th");
  unit.textContent = "Unit";
  row.appendChild(unit);
  const material = document.createElement("th");
  material.textContent = "Material";
  row.appendChild(material);
  const emissionsPerUnit = document.createElement("th");
  emissionsPerUnit.textContent = "Emissions per Unit";
  row.appendChild(emissionsPerUnit);
  const emissions = document.createElement("th");
  emissions.textContent = "Emissions";
  row.appendChild(emissions);

  table.appendChild(row);
}

function createTotal(table) {
  const row = document.createElement("tr");
  const element = document.createElement("th");
  element.textContent = "Total emissions: ";
  element.colSpan = 6;
  row.appendChild(element);

  const emissions = document.createElement("th");
  emissions.id = "emissionsTotal";
  emissions.textContent = printNumber(emissionsTotal);
  emissions.classList.add("dataNumber");
  row.appendChild(emissions);
  table.appendChild(row);
}

async function createNode(table, node, depth, children) {
  if (children.length === 0) {
    await createLeafRow(table, node, depth);
  } else {
    // If there are multiple categories, group them together
    const grouped = groupCategories(children);
    await createBranchRow(table, node, depth, grouped);
  }
}

async function createBranchRow(table, node, depth, children) {
  const row = document.createElement("tr");
  const className = "level" + depth;
  row.classList.add(className);
  row.classList.add("table-collapse");
  row.setAttribute("data-depth", depth);
  row.style.backgroundColor = "#f5f5f5";
  const element = document.createElement("td");
  // element.colSpan = 7;
  element.classList.add("data-ifc-element");
  const toggle = document.createElement("span");
  toggle.classList.add("toggle");
  toggle.classList.add("table-collapse");

  element.textContent = node.type;
  element.insertBefore(toggle, element.firstChild);
  const selectDB = document.createElement("select");
  const subtotalEl = document.createElement("td");
  subtotalEl.classList.add("subtotal");
  let subtotalEmission = [];
  if (node.children[0]?.children.length == 0) {
    const spanEl = document.createElement("td");
    spanEl.colSpan = 4;
    // subtotalEl.textContent = printNumber(subtotalEmission);
    row.appendChild(element);
    row.appendChild(selectDB);
    row.appendChild(spanEl);
    row.appendChild(subtotalEl);
  } else {
    const spanEl = document.createElement("td");
    spanEl.colSpan = 6;
    row.appendChild(element);

    row.appendChild(spanEl);
  }
  selectDB.classList.add("group-select");
  table.appendChild(row);

  depth++;
  let opts = new Set();
  for (const child of children) {
    if (child.children.length > 0) {
      await createNode(table, child, depth, child.children);
    } else {
      await createLeafRow(row, table, child, depth, opts, subtotalEmission);
    }
  }

  let options;
  for (const option of opts) {
    if (
      option === "NetVolume" ||
      option === "Volume" ||
      option === "Volumen" ||
      option === "Netto-Volumen"
    ) {
      options += `<option value="${option}" selected>${option}</option>`;
    } else if (option === "Area") {
      options += `<option value="${option}" selected>${option}</option>`;
    } else {
      options += `<option value="${option}">${option}</option>`;
    }
  }
  subtotalEl.textContent = printNumber(
    subtotalEmission.reduce((a, b) => a + b, 0)
  );
  subtotalEl.style.textAlign = "right";
  selectDB.innerHTML = options;
}

async function createLeafRow(
  parentRow,
  table,
  node,
  depth,
  opts,
  subtotalEmission
) {
  let hasNetVolume = false;
  let hasArea = false;
  const quants = await getQuantityByElement(ifcLoader, model, node.expressID);
  const materials = await getMaterial(ifcLoader, model, node.expressID);
  let count = 0;
  if (materials?.length > 0) {
    for (const mat of materials) {
      const row = document.createElement("tr");
      parentRow.insertAdjacentElement("afterend", row);
      const className = "level" + depth;
      row.classList.add(className);
      row.classList.add("table-collapse");
      let element;
      if (count === 0) {
        row.setAttribute("data-depth", depth);
        row.id = node.expressID;
        element = document.createElement("td");
        element.classList.add("data-ifc-element");
        element.textContent = node.type;
        element.setAttribute("rowspan", materials.length);
        row.appendChild(element);
      }
      count++;
      const quantityType = document.createElement("td");
      quantityType.classList.add("quantity-type-container");
      const qtyTypeSelector = document.createElement("select");
      let options = "";
      let fkey = null;
      for (const [key, value] of Object.entries(quants)) {
        let formattedKey = DecodeIFCString(key)
        if (!fkey) {
          fkey = formattedKey;
        }
        opts.add(formattedKey);
        if (
          formattedKey === "NetVolume" || 
          formattedKey === "Volume" || 
          formattedKey === "Volumen" || 
          formattedKey === "Netto-Volumen"
        ) {
          options += `<option value="${formattedKey}" selected>${formattedKey}</option>`;
          hasNetVolume = true;
          fkey = "NetVolume";
        } else if (formattedKey === "Area") {
          options += `<option value="${formattedKey}" selected>${formattedKey}</option>`;
          hasArea = true;
          fkey = "Area";          
        } else {
          options += `<option value="${formattedKey}">${formattedKey}</option>`;
        }
      }
      qtyTypeSelector.classList.add("quantity-type");
      qtyTypeSelector.style.padding = "0px";
      qtyTypeSelector.innerHTML = options;
      quantityType.appendChild(qtyTypeSelector);
      row.appendChild(quantityType);

      const dataQuantity = document.createElement("td");
      dataQuantity.quants = quants;
      const quantity = quants[fkey] ? quants[fkey].value : 0;
      dataQuantity.textContent = printNumber(quantity);
      dataQuantity.classList.add("dataNumber");
      row.appendChild(dataQuantity);

      const unit = document.createElement("td");
      unit.textContent = getUom(quants[fkey]?.type);
      row.appendChild(unit);
      const material = document.createElement("td");
      material.textContent = mat;
      row.appendChild(material);
      const emmisionsPerUnit = getEmission(mat);
      const dataEmissionsPerUnit = document.createElement("td");
      dataEmissionsPerUnit.classList.add("dataNumber");
      dataEmissionsPerUnit.textContent = printNumber(emmisionsPerUnit);
      row.appendChild(dataEmissionsPerUnit);

      const emissions = quantity * emmisionsPerUnit;
      subtotalEmission.push(emissions);
      // Update total emissions
      emissionsTotal += emissions;
      const emissionsTotalData = document.getElementById("emissionsTotal");

      const dataEmissions = document.createElement("td");
      dataEmissions.classList.add("dataNumber");
      dataEmissions.classList.add("emissions");
      dataEmissions.textContent = printNumber(emissions);
      row.appendChild(dataEmissions);

      row.style.fontWeight = "normal";

      row.onmouseenter = function () {
        removeTmpHighlights();

        row.classList.add("tmphighlight");
        highlightFromSpatial(node.expressID);
      };

      row.onclick = function () {
        removeHighlights();
        row.classList.add("highlight");
        highlightFromSpatial(node.expressID);
        selectedElementId = node.expressID;
      };

      parentRow = row;
    }
  } else {
    const row = document.createElement("tr");
    parentRow.insertAdjacentElement("afterend", row);
    const className = "level" + depth;
    row.classList.add(className);
    row.classList.add("table-collapse");
    let element;

    row.setAttribute("data-depth", depth);
    element = document.createElement("td");
    element.classList.add("data-ifc-element");
    element.textContent = node.type;
    row.appendChild(element);

    const quantityType = document.createElement("td");
    quantityType.classList.add("quantity-type-container");
    const qtyTypeSelector = document.createElement("select");
    let options = "";
    let fkey = null;
    for (const [key, value] of Object.entries(quants)) {
      let formattedKey = DecodeIFCString(key)
      if (!fkey) {
        fkey = formattedKey;
      }
      options += `<option value="${formattedKey}">${formattedKey}</option>`;
    }
    qtyTypeSelector.classList.add("quantity-type");
    qtyTypeSelector.style.padding = "0px";
    qtyTypeSelector.innerHTML = options;
    quantityType.appendChild(qtyTypeSelector);
    row.appendChild(quantityType);

    const dataQuantity = document.createElement("td");
    dataQuantity.quants = quants;
    const quantity = quants[fkey] ? quants[fkey].value : 0;
    dataQuantity.textContent = printNumber(quantity);
    dataQuantity.classList.add("dataNumber");
    row.appendChild(dataQuantity);

    const unit = document.createElement("td");
    unit.textContent = getUom(quants[fkey]?.type);
    row.appendChild(unit);
    const material = document.createElement("td");
    material.textContent = "";
    row.appendChild(material);
    const emmisionsPerUnit = 0.0;
    const dataEmissionsPerUnit = document.createElement("td");
    dataEmissionsPerUnit.textContent = printNumber(emmisionsPerUnit);
    dataEmissionsPerUnit.classList.add("dataNumber");
    row.appendChild(dataEmissionsPerUnit);

    const emissions = quantity * emmisionsPerUnit;

    // Update total emissions
    emissionsTotal += emissions;

    const dataEmissions = document.createElement("td");
    dataEmissions.textContent = printNumber(emissions);

    dataEmissions.classList.add("dataNumber");
    row.appendChild(dataEmissions);

    row.style.fontWeight = "normal";

    row.onmouseenter = function () {
      removeTmpHighlights();

      row.classList.add("tmphighlight");
      highlightFromSpatial(node.expressID);
    };

    row.onclick = function () {
      removeHighlights();
      row.classList.add("highlight");
      highlightFromSpatial(node.expressID);
      selectedElementId = node.expressID;
    };

    parentRow = row;
  }
}

function printNumber(number) {
  return new Intl.NumberFormat().format(number.toFixed(2));
}

function removeHighlights() {
  const highlighted = document.getElementsByClassName("highlight");
  for (let h of highlighted) {
    if (h) {
      h.classList.remove("highlight");
    }
  }
}

function removeTmpHighlights() {
  const highlighted = document.getElementsByClassName("tmphighlight");
  for (let h of highlighted) {
    if (h) {
      h.classList.remove("tmphighlight");
    }
  }
}

function highlightFromSpatial(id) {
  ifcLoader.ifcManager.createSubset({
    modelID: model.modelID,
    ids: [id],
    material: preselectMat,
    scene: scene,
    removePrevious: true,
  });
}

function groupCategories(children) {
  const types = children.map((child) => child.type);
  const uniqueTypes = new Set(types);
  if (uniqueTypes.size > 1) {
    const uniquesArray = Array.from(uniqueTypes);
    children = uniquesArray.map((type) => {
      return {
        expressID: -1,
        type: type + "S",
        children: children.filter((child) => child.type === type),
      };
    });
  }
  return children;
}

//Collapsable table logic
function implementTreeLogic() {
  [].forEach.call(document.querySelectorAll("#boq .toggle"), function (el) {
    el.addEventListener("click", function () {
      var el = this;
      var tr = el.closest("tr");
      var children = findChildren(tr);
      var subnodes = children.filter(function (element) {
        return element.matches(".table-expand");
      });
      subnodes.forEach(function (subnode) {
        var subnodeChildren = findChildren(subnode);
        children = children.filter(function (element) {
          return !subnodeChildren.includes(element);
        });
      });
      if (tr.classList.contains("table-collapse")) {
        tr.classList.remove("table-collapse");
        tr.classList.add("table-expand");
        children.forEach(function (child) {
          child.style.display = "none";
        });
      } else {
        tr.classList.remove("table-expand");
        tr.classList.add("table-collapse");
        children.forEach(function (child) {
          child.style.display = "";
        });
      }
    });
  });
}

var findChildren = function (tr) {
  var depth = tr.dataset.depth;
  var elements = [...document.querySelectorAll("#boq tr")].filter(function (
    element
  ) {
    return element.dataset.depth <= depth;
  });
  var next = nextUntil(tr, elements);
  return next;
};

var nextUntil = function (elem, elements, filter) {
  var siblings = [];
  elem = elem.nextElementSibling;
  while (elem) {
    if (elements.includes(elem)) break;
    if (filter && !elem.matches(filter)) {
      elem = elem.nextElementSibling;
      continue;
    }
    siblings.push(elem);
    elem = elem.nextElementSibling;
  }
  return siblings;
};

function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
