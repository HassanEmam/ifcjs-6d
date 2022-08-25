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