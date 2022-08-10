export default async function loadIfc(ifcFile, ifcLoader) {
  console.log("Loading IFC file...", ifcFile);
  const model = await ifcLoader.loadAsync(ifcFile);
  return model;
}
