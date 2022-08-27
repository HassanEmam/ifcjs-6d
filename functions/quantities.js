import { IFCELEMENTQUANTITY, IFCRELDEFINESBYPROPERTIES } from "web-ifc";
import { IFCQUANTITYAREA, IFCQUANTITYLENGTH, IFCQUANTITYVOLUME } from "web-ifc";
import { getData } from "../data";

let psetsObject = {};
let objMap = {};
let generated = false;
let data;

function getAllItemsOfType(data, type) {
  let items = [];
  for (const [key, value] of Object.entries(data)) {
    if (value.type === type) {
      items.push(value);
    }
  }
  return items;
}
export function fillData(model, ifcLoader) {
  const obj = {};
  data = getData(model);
  const relations = getAllItemsOfType(data, "IFCRELDEFINESBYPROPERTIES");

  //relating objects are mapped here
  for (const rel of relations) {
    const rel1 = rel;
    const pset = data[rel1.RelatingPropertyDefinition];
    for (const lobj of rel1.RelatedObjects) {
      if (!objMap[lobj]) {
        objMap[lobj] = [];
      }
      const found = objMap[lobj].some((el) => {
        el === pset;
      });
      if (!found) {
        objMap[lobj].push(pset);
      }
    }
    if (!obj[pset.Name]) {
      obj[pset.Name] = {};
    }
    const props = {};
    let pobj = {};
    if (pset.HasProperties) {
      for (const prop of pset.HasProperties) {
        const propObj = data[prop];
        if (!obj[pset.Name][propObj.Name]) {
          pobj[propObj.Name] = {};
          pobj[propObj.Name] = propObj;
          pobj[propObj.Name]["ids"] = [];
          pobj[propObj.Name]["ids"].push(propObj.expressID);
        } else {
          pobj[propObj.Name] = obj[pset.Name][propObj.Name];
          obj[pset.Name][propObj.Name]["ids"].push(propObj.expressID);
        }
      }
    } else if (pset.Quantities) {
      for (const quantity of pset.Quantities) {
        const quantityObj = data[quantity];
        if (!obj[pset.Name]) {
          if (!obj[pset.Name][quantityObj.Name]) {
            pobj[quantityObj.Name] = {};
            pobj[quantityObj.Name] = quantityObj;
            pobj[quantityObj.Name]["ids"] = [];
            pobj[quantityObj.Name]["ids"].push(quantityObj.expressID);
          } else {
            pobj[quantityObj.Name] = obj[pset.Name][quantityObj.Name];
            obj[pset.Name][quantityObj.Name]["ids"].push(quantityObj.expressID);
          }
        } else {
          pobj = obj[pset.Name];
          if (pobj[quantityObj.Name]) {
            pobj[quantityObj.Name]["ids"].push(quantityObj.expressID);
          } else {
            pobj[quantityObj.Name] = {};
            pobj[quantityObj.Name] = quantityObj;
            pobj[quantityObj.Name]["ids"] = [];
            pobj[quantityObj.Name]["ids"].push(quantityObj.expressID);
          }
          // obj[pset.Name][quantityObj.Name]["ids"].push(
          //   quantityObj.expressID
          // );
        }
      }
    }

    obj[pset.Name] = pobj;
  }
  psetsObject = obj;
  return obj;
}

export function getAllPropertyNames(model, ifcLoader) {
  if (!generated) {
    fillData(model, ifcLoader);
    generated = true;
  }
  return psetsObject;
}

export function getElementProperties(model, ifcLoader, id) {
  if (!generated) {
    fillData(model, ifcLoader);
    generated = true;
  }
  return objMap[id];
}

export function createPropertySelection(model, ifcLoader) {
  if (!generated) {
    fillData(model, ifcLoader);
    generated = true;
  }
  const selection = document.createElement("select");
  for (const pset of Object.keys(psetsObject)) {
    const optionGrp = document.createElement("optgroup");
    optionGrp.label = pset;
    for (const prop of Object.keys(psetsObject[pset])) {
      const option = document.createElement("option");
      option.value = prop;
      option.text = prop;
      optionGrp.appendChild(option);
    }
    selection.appendChild(optionGrp);
  }
  return selection;
}

export function getQuantityByElement(ifcLoader, model, elementId) {
  if (!generated) {
    fillData(model, ifcLoader);
    generated = true;
  }
  const tmpObj1 = objMap[elementId];
  const tmpObj = tmpObj1?.filter((el) => el.type === "IFCELEMENTQUANTITY")[0];
  const qtyRet = {};
  if (tmpObj && tmpObj["Quantities"]) {
    for (const quantity of tmpObj["Quantities"]) {
      if (quantity) {
        const qtyObj = data[quantity];
        switch (qtyObj.type) {
          case "IFCQUANTITYAREA":
            qtyRet[qtyObj.Name] = {
              value: qtyObj.AreaValue,
              type: "area",
            };
            break;
          case "IFCQUANTITYLENGTH":
            qtyRet[qtyObj.Name] = {
              value: qtyObj.LengthValue,
              type: "length",
            };
            break;
          case "IFCQUANTITYVOLUME":
            qtyRet[qtyObj.Name] = {
              value: qtyObj.VolumeValue,
              type: "volume",
            };
            break;
          default:
            qtyRet[qtyObj.Name] = 0;
        }
      }
    }
  }
  return qtyRet;
}
