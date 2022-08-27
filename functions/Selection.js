import { MeshLambertMaterial } from "three";
import { getMaterial } from "./materials.js";
import { DecodeIFCString } from "./DecodeIfcString.js";

const MaterialSelectedObject = new MeshLambertMaterial({
  transparent: true,
  opacity: 0.8,
  color: 0xff0000,
  depthTest: true,
});

export async function selectObject(
  event,
  cast,
  model,
  ifcLoader,
  scene,
  lastModel,
  selectedElementId
) {
  const found = cast(event)[0];
  if (found) {
    const index = found.faceIndex;
    const geometry = found.object.geometry;
    const id = ifcLoader.ifcManager.getExpressId(geometry, index);
    selectedElementId = id;

    getMaterial(ifcLoader, model, selectedElementId);
    getObject(found, model, ifcLoader, scene, lastModel);
  } else {
    ifcLoader.ifcManager.removeSubset(model.modelID, MaterialSelectedObject);
  }
}

function getObject(found, model, ifcLoader, scene, lastModel) {
  const modelId = model.modelID;
  if (found) {
    lastModel = found.object;
    // Gets model ID
    const modelId = found.object.modelID;

    // Gets Express ID
    const faceIndex = found.faceIndex;
    const geometry = found.object.geometry;
    const id = ifcLoader.ifcManager.getExpressId(geometry, faceIndex);

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

async function hideObject(found, model, ifcLoader, scene, lastModel) {
  const modelId = model.modelID;
  if (found) {
    lastModel = found.object;
    // Gets model ID
    const modelId = found.object.modelID;

    // Gets Express ID
    const faceIndex = found.faceIndex;
    const geometry = found.object.geometry;
    const id = ifcLoader.ifcManager.getExpressId(geometry, faceIndex);

    // const selectedElement = await ifcLoader.ifcManager.byId(modelId, id)

    // Remove Element from Subset
    ifcLoader.ifcManager.removeFromSubset({
      modelID: modelId,
      ids: [id],
    });
  }
}
