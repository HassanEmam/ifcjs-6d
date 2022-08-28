import { getQuantityByElement } from "./quantities";
import getEmission from "./emission";
import { getMaterial } from "./materials";
import { MeshBasicMaterial } from "three";

// Materials
const materialVeryHigh = new MeshBasicMaterial({
  transparent: true,
  opacity: 0.8,
  color: 0xff0000,
  depthTest: true,
});
const materialHigh = new MeshBasicMaterial({
  transparent: true,
  opacity: 0.8,
  color: 0xffa700,
  depthTest: true,
});
const materialMedium = new MeshBasicMaterial({
  transparent: true,
  opacity: 0.8,
  color: 0xfff400,
  depthTest: true,
});
const materialLow = new MeshBasicMaterial({
  transparent: true,
  opacity: 0.8,
  color: 0xa3ff00,
  depthTest: true,
});
const materialVeryLow = new MeshBasicMaterial({
  transparent: true,
  opacity: 0.8,
  color: 0x2cba00,
  depthTest: true,
});

export async function getAllEmissions(
  ifcLoader,
  model,
  allEmissionsOfItems,
  itemsAndEmissions,
  ifcTypesIds
) {
  const emissionsOfItem = {
    id: null,
    emission: null,
  };

  ifcTypesIds.forEach(async (ifcTypeId) => {
    await EmissionsOfIfcType(
      ifcLoader,
      model,
      ifcTypeId,
      allEmissionsOfItems,
      emissionsOfItem,
      itemsAndEmissions
    );
  });
}

async function EmissionsOfIfcType(
  ifcLoader,
  model,
  ifcTypeId,
  allEmissionsOfItems,
  emissionsOfItem,
  itemsAndEmissions
  ) {
  const elementsOfTypeIDs = await ifcLoader.ifcManager.getAllItemsOfType(
    model.modelID,
    ifcTypeId
  );

  for (let i = 0; i < elementsOfTypeIDs.length; i++) {
    const elementID = elementsOfTypeIDs[i];

    const NetVolume = await getNetVolume(ifcLoader, model, elementID, ifcTypeId);
    const materials = await getMaterial(ifcLoader, model, elementID);
    for (const mat of materials) {
      const emissionOfmaterial = NetVolume * getEmission(mat);
      allEmissionsOfItems.push(emissionOfmaterial);

      const ItemAndEmission = Object.create(emissionsOfItem);
      const existingItem = itemsAndEmissions.find(
        (element) => element.id == elementID
      );
      if (existingItem != undefined) {
        existingItem.id = elementID;
        existingItem.emission = existingItem.emission + emissionOfmaterial;
      } else {
        ItemAndEmission.id = elementID;
        ItemAndEmission.emission = emissionOfmaterial;
        itemsAndEmissions.push(ItemAndEmission);
      }
    }
  }

  return allEmissionsOfItems;
}

async function getNetVolume(ifcLoader, model, elementID, ifcTypeId) {
    let NetVolumeValue = null;
    const quants = await getQuantityByElement(ifcLoader, model, elementID);
    const NetVolumeObject = Object.values(quants).find((obj) => {
        if (obj.type == "volume") {
            return obj.type == "volume";
        }
    });

    if(NetVolumeObject != 0 && NetVolumeObject != null) {
        NetVolumeValue = NetVolumeObject.value;
    } else {
        const NetAreaObject = Object.values(quants).find((obj) => {
            if (obj.type == "area") {
                return obj.type == "area";
            }
        });
        if(NetAreaObject == 0 || NetAreaObject == undefined) {
            NetVolumeValue = 0
        } else {
            let matVolume = null;
            if (ifcTypeId == 3304561284 || ifcTypeId == 395920057) { //3304561284 = IFCWINDOW / 395920057 = IFCDOOR
                matVolume = NetAreaObject.value * 0.05;
                return matVolume;
            } else if (ifcTypeId == 1529196076) { //IFCSLAB
                matVolume = NetAreaObject.value * 0.3;
                return matVolume;
            }
            NetVolumeValue = matVolume;
        }
    }
    return NetVolumeValue;
}

export function colorization(ifcLoader, model, itemsAndEmissions, scene) {
  // Emissions per Object (All materials of an object)
  let emissionsAllItems = [];
  itemsAndEmissions.forEach((element) => {
    if (element.emission != 0 && element.emission != undefined) {
        emissionsAllItems.push(element.emission);
    }
  });

  // Degree according to amount of emissions
  const highestEmission = Math.max(...emissionsAllItems);
  const lowestEmission = Math.min(...emissionsAllItems);
  const VeryHigh = highestEmission;
  const Medium = (highestEmission - lowestEmission) / 2;
  const VeryLow = lowestEmission;
  const High = Medium + (VeryHigh - Medium) / 2;
  const Low = VeryLow + (Medium - VeryLow) / 2;

  itemsAndEmissions.forEach((element) => {
    const elementId = element.id;
    // Creates subset
    if (element.emission >= VeryHigh) {
      ifcLoader.ifcManager.createSubset({
        modelID: model.modelID,
        ids: [elementId],
        material: materialVeryHigh,
        scene: scene,
        removePrevious: false,
        customID: "VeryHighEmission",
      });
    } else if ((element.emission < VeryHigh) & (element.emission >= High)) {
      ifcLoader.ifcManager.createSubset({
        modelID: model.modelID,
        ids: [elementId],
        material: materialHigh,
        scene: scene,
        removePrevious: false,
        customID: "HighEmission",
      });
    } else if ((element.emission < High) & (element.emission >= Medium)) {
      ifcLoader.ifcManager.createSubset({
        modelID: model.modelID,
        ids: [elementId],
        material: materialMedium,
        scene: scene,
        removePrevious: false,
        customID: "MediumEmission",
      });
    } else if ((element.emission < Medium) & (element.emission >= Low)) {
      ifcLoader.ifcManager.createSubset({
        modelID: model.modelID,
        ids: [elementId],
        material: materialLow,
        scene: scene,
        removePrevious: false,
        customID: "LowEmission",
      });
    } else if ((element.emission < Low) & (element.emission >= VeryLow)) {
      ifcLoader.ifcManager.createSubset({
        modelID: model.modelID,
        ids: [elementId],
        material: materialVeryLow,
        scene: scene,
        removePrevious: false,
        customID: "VeryLowEmission",
      });
    }
  });
}

export function removeColorization(ifcLoader, model) {
  ifcLoader.ifcManager.removeSubset(
    model.modelID,
    materialVeryHigh,
    "VeryHighEmission"
    );
  ifcLoader.ifcManager.removeSubset(
    model.modelID,
    materialHigh,
    "HighEmission"
    );
  ifcLoader.ifcManager.removeSubset(
    model.modelID,
    materialMedium,
    "MediumEmission"
    );
  ifcLoader.ifcManager.removeSubset(
    model.modelID, 
    materialLow, 
    "LowEmission"
    );
  ifcLoader.ifcManager.removeSubset(
    model.modelID,
    materialVeryLow,
    "VeryLowEmission"
    );
}
