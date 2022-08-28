import { getAllEmissions } from "./getAllEmissions";
import {
  IFCSLAB,
  IFCWALLSTANDARDCASE,
  IFCWALL,
  IFCWINDOW,
  IFCDOOR,
  IFCFURNISHINGELEMENT,
  IFCCOLUMN,
  IFCPLATE,
  IFCMEMBER,
} from "web-ifc";

const ifcTypesIds = [
  IFCSLAB,
  IFCWALLSTANDARDCASE,
  IFCWALL,
  IFCWINDOW,
  IFCDOOR,
  IFCFURNISHINGELEMENT,
  IFCCOLUMN,
  IFCPLATE,
  IFCMEMBER,
];

export default async function loadIfc(
  ifcFile,
  ifcLoader,
  currentProjectID,
  allEmissionsOfItems,
  itemsAndEmissions
) {
  console.log("Loading IFC file...", ifcFile);
  const model = await ifcLoader.loadAsync(ifcFile);
  await getAllEmissions(
    ifcLoader,
    model,
    allEmissionsOfItems,
    itemsAndEmissions,
    ifcTypesIds
  );
  return model;
}
