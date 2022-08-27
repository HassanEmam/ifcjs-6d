// import { ifcLoader, model } from "./loadIfc";
// import { createPropertySelection } from "./quantities";

import getEmission from "./emission";
import { getMaterial } from "./materials";
import { getQuantityByElement } from "./quantities";
import { getUoM, fillUoM } from "./uom";

let model;
let ifcLoader;
let projectID;

export default function createTreeTable(
  ifcProject,
  modelObj,
  ifcloader,
  currentProjectID
) {
  projectID = currentProjectID;
  const tableRoot = document.getElementById("boq");
  model = modelObj;
  ifcLoader = ifcloader;
  const uom = fillUoM(ifcLoader, currentProjectID, "length");
  removeAllChildren(tableRoot);
  populateIfcTable(tableRoot, ifcProject, model, ifcLoader);
  implementTreeLogic();

  const qtySelector = document.getElementsByClassName("quantity-type");
  document.body.addEventListener("change", function (event) {
    if (event.target.classList.contains("quantity-type")) {
      const quants =
        event.target.parentElement.nextElementSibling.quants[event.target.value]
          .value;
      event.target.parentElement.nextElementSibling.textContent =
        quants.toFixed(2);

      const type =
        event.target.parentElement.nextElementSibling.quants[event.target.value]
          .type;
      let uom = getUom(type);
      const tdUoM =
        event.target.parentElement.nextElementSibling.nextElementSibling;
      tdUoM.textContent = uom;
      const factor = tdUoM.nextElementSibling.nextElementSibling;
      const emission = factor.textContent * quants;
      factor.nextElementSibling.textContent = emission.toFixed(2);
    }
  });
}

function getUom(type) {
  let uom = "";
  switch (type) {
    case "length":
      uom = getUoM("length");
      break;
    case "area":
      uom = getUoM("area");
      break;
    case "volume":
      uom = getUoM("volume");
      break;
    default:
      uom = "";
      break;
  }
  return uom;
}

function populateIfcTable(table, ifcProject) {
  const initialDepth = 0;
  createHeader(table);
  createNode(table, ifcProject, initialDepth, ifcProject.children);
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

function createNode(table, node, depth, children) {
  if (children.length === 0) {
    createLeafRow(table, node, depth);
  } else {
    // If there are multiple categories, group them together
    const grouped = groupCategories(children);
    createBranchRow(table, node, depth, grouped);
  }
}

function createBranchRow(table, node, depth, children) {
  const row = document.createElement("tr");
  const className = "level" + depth;
  row.classList.add(className);
  row.classList.add("table-collapse");
  row.setAttribute("data-depth", depth);

  const element = document.createElement("td");
  element.colSpan = 7;
  element.classList.add("data-ifc-element");
  const toggle = document.createElement("span");
  toggle.classList.add("toggle");
  toggle.classList.add("table-collapse");

  element.textContent = node.type;
  element.insertBefore(toggle, element.firstChild);

  row.appendChild(element);
  table.appendChild(row);

  depth++;

  children.forEach((child) => {
    if (child.children.length > 0) {
      createNode(table, child, depth, child.children);
    } else {
      createLeafRow(table, child, depth);
    }
  });
}

function createLeafRow(table, node, depth) {
  const quants = getQuantityByElement(ifcLoader, projectID, node.expressID);
  const materials = getMaterial(ifcLoader, projectID, node.expressID);
  console.log(quants);
  let count = 0;
  for (const mat of materials) {
    const row = document.createElement("tr");
    table.appendChild(row);

    const className = "level" + depth;
    // row.classList.add(className);
    row.classList.add("table-collapse");
    row.setAttribute("data-depth", depth);
    let element;
    if (count === 0) {
      element = document.createElement("td");
      element.classList.add("data-ifc-element");
      element.textContent = node.type;
      element.setAttribute("rowspan", materials.length);
      element.style.paddingLeft = 1 + "rem";
      row.appendChild(element);
    }
    count++;
    const quantityType = document.createElement("td");
    const qtyTypeSelector = document.createElement("select");
    let options = "";
    let fkey = null;
    for (const [key, value] of Object.entries(quants)) {
      if (!fkey) {
        fkey = key;
      }
      options += `<option value="${key}">${key}</option>`;
    }
    qtyTypeSelector.classList.add("quantity-type");
    qtyTypeSelector.style.padding = "0px";
    qtyTypeSelector.innerHTML = options;
    quantityType.appendChild(qtyTypeSelector);
    row.appendChild(quantityType);

    const dataQuantity = document.createElement("td");
    dataQuantity.quants = quants;
    const quantity = quants[fkey]?.value.toFixed(2); //Add quantity function here
    dataQuantity.textContent = quantity;
    row.appendChild(dataQuantity);

    const unit = document.createElement("td");
    unit.textContent = getUom(quants[fkey]?.type); //Add unit function
    row.appendChild(unit);
    const material = document.createElement("td");
    material.textContent = mat;
    row.appendChild(material);
    const emmisionsPerUnit = getEmission(mat); //Add emissions function
    const dataEmissionsPerUnit = document.createElement("td");
    dataEmissionsPerUnit.textContent = emmisionsPerUnit.toFixed(2);
    row.appendChild(dataEmissionsPerUnit);

    const emissions = quantity * emmisionsPerUnit;
    const dataEmissions = document.createElement("td");
    dataEmissions.textContent = emissions.toFixed(2);
    row.appendChild(dataEmissions);

    row.style.fontWeight = "normal";
  }
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
        children: children.filter((child) => child.type.includes(type)),
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
