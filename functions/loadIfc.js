import { getAllEmissions } from "./getAllEmissions";
import { 
  IFCSLAB,
  IFCPLATE,
  IFCWALLSTANDARDCASE,
  IFCCOLUMN
} from "web-ifc";

const ifcTypesIds = [
  IFCSLAB,
  IFCPLATE,
  IFCWALLSTANDARDCASE,
  IFCCOLUMN
]

export default async function loadIfc(ifcFile, ifcLoader, currentProjectID, allEmissionsOfItems, itemsAndEmissions) {
  console.log("Loading IFC file...", ifcFile);
  const model = await ifcLoader.loadAsync(ifcFile);
  await getAllEmissions(ifcLoader, model, currentProjectID, allEmissionsOfItems, itemsAndEmissions, ifcTypesIds)
  return model;
}