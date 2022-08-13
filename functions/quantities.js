import { IFCRELDEFINESBYPROPERTIES } from "web-ifc";

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
    for (const obj of rel1.RelatedObjects) {
      objMap[obj.value] = pset;
    }

    if (!obj[pset.Name.value]) {
      obj[pset.Name.value] = {};
    }
    const props = {};
    const pobj = {};
    for (const prop of pset.HasProperties) {
      const propObj = await ifc.byId(model.modelID, prop.value);
      console.log(
        exist(propObj, propObj.Name.value),
        propObj.Name.value,
        props
      );
      if (!exist(props, propObj.Name.value)) {
        pobj[propObj.Name.value] = {};
        pobj[propObj.Name.value][propObj.expressID] = propObj;
      } else {
        pobj[propObj.Name.value][propObj.expressID] = propObj;
      }
      props[propObj.Name.value] = pobj;
      obj[pset.Name.value] = props;
    }
  }
  psetsObject = obj;
  return obj;
}

export async function getPropertyNames(model, ifcLoader) {
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

function exist(data, key) {
  return JSON.stringify(data).includes(`"${key}":`);
}
