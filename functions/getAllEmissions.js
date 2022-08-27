import { getQuantityByElement } from "./quantities";
import getEmission from "./emission";
import { getMaterial } from "./materials";
import { MeshBasicMaterial } from "three";

export async function getAllEmissions(ifcLoader, model, currentProjectID, allEmissionsOfItems, itemsAndEmissions, ifcTypesIds) {

    const emissionsOfItem = {
        id: null,
        emission: null,
    };
    
    ifcTypesIds.forEach(async ifcTypeId => {
        await EmissionsOfIfcType(ifcLoader, model, currentProjectID, ifcTypeId, allEmissionsOfItems, emissionsOfItem, itemsAndEmissions)
    });
}

async function EmissionsOfIfcType(ifcLoader, model, currentProjectID, ifcTypeId, allEmissionsOfItems, emissionsOfItem, itemsAndEmissions) {
    const elementsOfTypeIDs = await ifcLoader.ifcManager.getAllItemsOfType(model.modelID, ifcTypeId);

    for(let i = 0; i < elementsOfTypeIDs.length; i++) {
        const elementID = elementsOfTypeIDs[i];

        const NetVolume = await getNetVolume(ifcLoader, model, elementID)
        const materials = await getMaterial(ifcLoader, model, elementID);
        for (const mat of materials) {
            const emissionOfmaterial = NetVolume * getEmission(mat)
            allEmissionsOfItems.push(emissionOfmaterial)

            const ItemAndEmission = Object.create(emissionsOfItem)
            const existingItem = itemsAndEmissions.find(element => element.id == elementID)
            if(existingItem != undefined) {
                existingItem.id = elementID
                existingItem.emission = existingItem.emission + emissionOfmaterial
            } else {
                ItemAndEmission.id = elementID
                ItemAndEmission.emission = emissionOfmaterial
                itemsAndEmissions.push(ItemAndEmission)
            }
        }
    }

    return allEmissionsOfItems
}

async function getNetVolume(ifcLoader, model, elementID) { 
    const quants = await getQuantityByElement(ifcLoader, model, elementID);
    const NetVolumeObject = Object.values(quants).find((obj) => {
        return obj.type == "volume"
    });
    const NetVolumeValue = NetVolumeObject.value
    return NetVolumeValue
}


export function colorization(ifcLoader, model, itemsAndEmissions, scene) {
    // Emissions per Object (All materials of an object)
    let emissionsAllItems = []
    itemsAndEmissions.forEach(element => {
        emissionsAllItems.push(element.emission)
    });

    // Degree according to amount of emissions
    const highestEmission = Math.max(...emissionsAllItems);
    const lowestEmission = Math.min(...emissionsAllItems);
    const VeryHigh = highestEmission
    const Medium = (highestEmission - lowestEmission)/2
    const VeryLow = lowestEmission
    const High = Medium + ((VeryHigh - Medium)/2)
    const Low = VeryLow + (Medium - VeryLow)/2

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

    itemsAndEmissions.forEach(element => {
        const elementId = element.id
        // Creates subset
        if(element.emission >= VeryHigh) {
            ifcLoader.ifcManager.createSubset({
                modelID: model.modelID,
                ids: [elementId],
                material: materialVeryHigh,
                scene: scene,
                removePrevious: false,
                customID: 'VeryHighEmission'
            });
        } else if (element.emission < VeryHigh & element.emission >= High) {
            ifcLoader.ifcManager.createSubset({
                modelID: model.modelID,
                ids: [elementId],
                material: materialHigh,
                scene: scene,
                removePrevious: false,
                customID: 'HighEmission'
            });  
        }
        else if (element.emission < High & element.emission >= Medium) {
            ifcLoader.ifcManager.createSubset({
                modelID: model.modelID,
                ids: [elementId],
                material: materialMedium,
                scene: scene,
                removePrevious: false,
                customID: 'MediumEmission'
            });  
        }
        else if (element.emission < Medium & element.emission >= Low) {
            ifcLoader.ifcManager.createSubset({
                modelID: model.modelID,
                ids: [elementId],
                material: materialLow,
                scene: scene,
                removePrevious: false,
                customID: 'LowEmission'
            });  
        }
        else if (element.emission < Low & element.emission >= VeryLow) {
            ifcLoader.ifcManager.createSubset({
                modelID: model.modelID,
                ids: [elementId],
                material: materialVeryLow,
                scene: scene,
                removePrevious: false,
                customID: 'VeryLowEmission'
            });  
        }
    });
}