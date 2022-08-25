import { IFCRELDEFINESBYPROPERTIES } from "web-ifc";
import { IFCQUANTITYAREA, IFCQUANTITYLENGTH, IFCQUANTITYVOLUME } from "web-ifc";

let psetsObject = {};
let objMap = {};
let generated = false;

export async function fillData(model, ifcLoader) {
  const ifc = ifcLoader.ifcManager;
  const obj = {};
  const relations = await ifc.getAllItemsOfType(
    model.modelID,
    IFCRELDEFINESBYPROPERTIES
  );

  //relating objects are mapped here
  for (const rel of relations) {
    const rel1 = await ifc.byId(model.modelID, rel);
    const pset = await ifc.byId(
      model.modelID,
      rel1.RelatingPropertyDefinition.value
    );
    // console.log(pset.Name.value);
    for (const obj of rel1.RelatedObjects) {
      objMap[obj.value] = pset;
    }

    if (!obj[pset.Name.value]) {
      obj[pset.Name.value] = {};
    }
    const props = {};
    let pobj = {};
    if (pset.HasProperties) {
      for (const prop of pset.HasProperties) {
        const propObj = await ifc.byId(model.modelID, prop.value);
        // console.log(pset.Name.value, propObj);
        if (!obj[pset.Name.value][propObj.Name.value]) {
          pobj[propObj.Name.value] = {};
          pobj[propObj.Name.value] = propObj;
          pobj[propObj.Name.value]["ids"] = [];
          pobj[propObj.Name.value]["ids"].push(propObj.expressID);
        } else {
          pobj[propObj.Name.value] = obj[pset.Name.value][propObj.Name.value];
          obj[pset.Name.value][propObj.Name.value]["ids"].push(
            propObj.expressID
          );
        }
      }
    } else if (pset.Quantities) {
      for (const quantity of pset.Quantities) {
        const quantityObj = await ifc.byId(model.modelID, quantity.value);
        if (!obj[pset.Name.value]) {
          if (!obj[pset.Name.value][quantityObj.Name.value]) {
            pobj[quantityObj.Name.value] = {};
            pobj[quantityObj.Name.value] = quantityObj;
            pobj[quantityObj.Name.value]["ids"] = [];
            pobj[quantityObj.Name.value]["ids"].push(quantityObj.expressID);
          } else {
            pobj[quantityObj.Name.value] =
              obj[pset.Name.value][quantityObj.Name.value];
            obj[pset.Name.value][quantityObj.Name.value]["ids"].push(
              quantityObj.expressID
            );
          }
        } else {
          pobj = obj[pset.Name.value];
          if (pobj[quantityObj.Name.value]) {
            pobj[quantityObj.Name.value]["ids"].push(quantityObj.expressID);
          } else {
            pobj[quantityObj.Name.value] = {};
            pobj[quantityObj.Name.value] = quantityObj;
            pobj[quantityObj.Name.value]["ids"] = [];
            pobj[quantityObj.Name.value]["ids"].push(quantityObj.expressID);
          }
          // obj[pset.Name.value][quantityObj.Name.value]["ids"].push(
          //   quantityObj.expressID
          // );
        }
      }
    }

    obj[pset.Name.value] = pobj;
    console.log("pobj", pobj, obj[pset.Name.value]);
  }
  psetsObject = obj;
  console.log("PSETS OBJECT", psetsObject);
  return obj;
}

export async function getAllPropertyNames(model, ifcLoader) {
  if (!generated) {
    await fillData(model, ifcLoader);
    generated = true;
  }
  return psetsObject;
}

export async function getElementProperties(model, ifcLoader, id) {
  if (!generated) {
    await fillData(model, ifcLoader);
    generated = true;
  }
  return objMap[id];
}

export async function createPropertySelection(model, ifcLoader) {
  if (!generated) {
    await fillData(model, ifcLoader);
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
  // console.log(selection);
  return selection;
}

export async function getQuantityByElement(ifcLoader, model, elementId) {
  if (!generated) {
    await fillData(model, ifcLoader);
    generated = true;
  }
  const tmpObj = objMap[elementId];
  const qtyRet = {};
  if (tmpObj && tmpObj["Quantities"]) {
    for (const quantity of tmpObj["Quantities"]) {
      if (quantity.value) {
        // console.log(quantity.value, model.modelID);
        const qtyObj = await ifcLoader.ifcManager.byId(
          model.modelID,
          quantity.value
        );
        switch (qtyObj.type) {
          case IFCQUANTITYAREA:
            qtyRet[qtyObj.Name.value] = {
              value: qtyObj.AreaValue.value,
              type: "area",
            };
            break;
          case IFCQUANTITYLENGTH:
            qtyRet[qtyObj.Name.value] = {
              value: qtyObj.LengthValue.value,
              type: "length",
            };
            break;
          case IFCQUANTITYVOLUME:
            qtyRet[qtyObj.Name.value] = {
              value: qtyObj.VolumeValue.value,
              type: "volume",
            };
            break;
          default:
            qtyRet[qtyObj.Name.value] = 0;
        }
        // console.log(qtyObj, qtyObj.type, qtyObj.type === IFCQUANTITYAREA);
      }
    }
  }
  // console.log(qtyRet);
  return qtyRet;
}
