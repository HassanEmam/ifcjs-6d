import { DecodeIFCString } from "./DecodeIfcString.js";
import { IFCRELASSOCIATESMATERIAL } from "web-ifc";
import { getData } from "../data";

function getMaterialsProperties(dataFile, elementid) {
  let matRelAss = [];
  const materials = [];
  const mdata = getData(dataFile);
  if (mdata) {
    for (const [key, value] of Object.entries(mdata)) {
      if (value.type === "IFCRELASSOCIATESMATERIAL") {
        if (value.RelatedObjects.includes(elementid)) {
          // materials.push(mdata[value.RelatingMaterial].Name);
          if (mdata[value.RelatingMaterial].type === "IFCMATERIAL") {
            materials.push(DecodeIFCString(mdata[value.RelatingMaterial].Name));
          } else if (
            mdata[value.RelatingMaterial].type === "IFCMATERIALLAYERSETUSAGE"
          ) {
            for (const matLayer of mdata[
              mdata[value.RelatingMaterial].ForLayerSet
            ].MaterialLayers) {
              materials.push(
                DecodeIFCString(mdata[mdata[matLayer].Material].Name)
              );
            }
          } else if (
            mdata[value.RelatingMaterial].type === "IFCMATERIALLAYERSET"
          ) {
            for (const matLayer of mdata[value.RelatingMaterial]
              .MaterialLayers) {
              materials.push(
                DecodeIFCString(mdata[mdata[matLayer].Material].Name)
              );
            }
          } else {
          }
        }
      }
    }
  }
  return materials;
}

export function getMaterial(ifcLoader, model, selectedElementId) {
  const materials = getMaterialsProperties(model, selectedElementId);
  return materials;
}
