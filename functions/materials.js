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
        materials.push(mat.Material.Name.value);
      }
    }

    return materials;
  }
}
