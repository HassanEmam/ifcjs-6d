import { MeshLambertMaterial } from 'three'

const MaterialSelectedObject = new MeshLambertMaterial({
    transparent: true,
    opacity: 0.8,
    color: 0xff0000,
    depthTest: true,
});

export async function selectObject(event, cast, model, ifcLoader, scene, lastModel, selectedElementId) {
    const found = cast(event)[0];
    if (found) {
        const index = found.faceIndex;
        const geometry = found.object.geometry;
        const id = ifcLoader.ifcManager.getExpressId(geometry, index);
        selectedElementId = id;
        // const typeOfSelectedObject = ifcLoader.ifcManager.getIfcType(model.modelID, id)
        // const propsOfSelectedObject = await ifcLoader.ifcManager.getItemProperties(model.modelID, id)
        // const nameOfSelectedObject = Object.values(propsOfSelectedObject.Name)[1]
        // console.log(typeOfSelectedObject, nameOfSelectedObject, propsOfSelectedObject)
        // console.log(DecodeIFCString(nameOfSelectedObject))
        GetObject(found, model, ifcLoader, scene, lastModel);
    } else  {
        ifcLoader.ifcManager.removeSubset(model.modelID, MaterialSelectedObject)
    }
}

function GetObject(found, model, ifcLoader, scene, lastModel) {
    const modelId = model.modelID;
    if (found) {
        lastModel = found.object;
        // Gets model ID
        const modelId = found.object.modelID;
    
        // Gets Express ID
        const index = found.faceIndex;
        const geometry = found.object.geometry;
        const id = ifcLoader.ifcManager.getExpressId(geometry, index);
    
        // Creates subset
        ifcLoader.ifcManager.createSubset({
            modelID: modelId,
            ids: [id],
            material: MaterialSelectedObject,
            scene: scene,
            removePrevious: true,
        });
    } 
}

function DecodeIFCString (ifcString)
{
    const ifcUnicodeRegEx = /\\X2\\(.*?)\\X0\\/uig;
    let resultString = ifcString;
    let match = ifcUnicodeRegEx.exec (ifcString);
    while (match) {
        const unicodeChar = String.fromCharCode (parseInt (match[1], 16));
        resultString = resultString.replace (match[0], unicodeChar);
        match = ifcUnicodeRegEx.exec (ifcString);
    }
    return resultString;
}