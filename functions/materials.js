import { DecodeIFCString } from './DecodeIfcString.js'

export async function getMaterial(ifcLoader, model, selectedElementId) {
  const materialprop = await ifcLoader.ifcManager.getMaterialsProperties(
    model.modelID,
    selectedElementId,
    true
  );
  const materials = [];
  for (const material of materialprop) {
    if (material.ForLayerSet) {
      for (const mat of material.ForLayerSet.MaterialLayers) {
        let matName = DecodeIFCString(mat.Material.Name.value)
        materials.push(matName);
      }
    } else {
      for (const mat of material.Materials) {
        let matName = DecodeIFCString(mat.Name.value)
        console.log(matName)
        materials.push(matName)
      }
    }

    return materials;
  }
}