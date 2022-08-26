import { IFCUNITASSIGNMENT } from "web-ifc";

const units = {
  "MILLI METRE": "mm",
  METRE: "m",
  SQUARE_METRE: "m²",
  CUBIC_METRE: "m³",
  "KILO GRAM": "kg",
};

const uomObj = {};
let filled = false;

export async function fillUoM(ifcLoader, model) {
  const uom = await ifcLoader.ifcManager.getAllItemsOfType(
    model.modelID,
    IFCUNITASSIGNMENT
  );
  const uomObject = await ifcLoader.ifcManager.byId(model.modelID, uom[0]);
  console.log("UOM1", uom[0], uomObject);
  for (const unit of uomObject.Units) {
    const unitObject = await ifcLoader.ifcManager.byId(
      model.modelID,
      unit.value
    );

    const pstrUoM = unitObject.Prefix ? unitObject.Prefix.value + " " : "";
    const strUoM = pstrUoM + unitObject.Name?.value;
    let mType = "";
    console.log("UOM2", strUoM, units[strUoM], unitObject);
    if (unitObject.UnitType) {
      switch (unitObject.UnitType.value) {
        case "MASSUNIT":
          mType = "mass";
          break;
        case "LENGTHUNIT":
          mType = "length";
          break;
        case "AREAUNIT":
          mType = "area";
          break;
        case "VOLUMEUNIT":
          mType = "volume";
          break;
        default:
          mType = "";
          break;
      }
    }
    uomObj[mType] = units[strUoM];
  }
  console.log("UOM", uomObj);
  filled = true;
  return uomObj;
}

export function getUoM(ifcLoader, model, type) {
  //   if (!filled) {
  //     fillUoM(ifcLoader, model).then((res) => {
  //       return res[type];
  //     });
  //   }
  return uomObj[type];
}
