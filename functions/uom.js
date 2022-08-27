import { IFCUNITASSIGNMENT } from "web-ifc";
import { getData } from "../data";

const units = {
  "MILLI METRE": "mm",
  METRE: "m",
  SQUARE_METRE: "m²",
  CUBIC_METRE: "m³",
  "KILO GRAM": "kg",
};

const uomObj = {};
let filled = false;
let data;

function getAllItemsOfType(data, type) {
  let items = [];
  for (const [key, value] of Object.entries(data)) {
    if (value.type === type) {
      items.push(value);
    }
  }
  return items;
}

export function fillUoM(ifcLoader, model) {
  data = getData(model);
  const uom = getAllItemsOfType(data, "IFCUNITASSIGNMENT");
  const uomObject = uom[0];
  console.log("uomObject", uomObject, uom);
  for (const unit of uomObject.Units) {
    const unitObject = data[unit];

    const pstrUoM = unitObject.Prefix ? unitObject.Prefix + " " : "";
    const strUoM = pstrUoM + unitObject.Name;
    console.log("strUoM", strUoM, unitObject.UnitType);
    let mType = "";
    if (unitObject.UnitType) {
      switch (unitObject.UnitType) {
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
  filled = true;
  console.log("uomObj", uomObj);
  return uomObj;
}

export function getUoM(type) {
  console.log("type", type);
  //   if (!filled) {
  //     fillUoM(ifcLoader, model).then((res) => {
  //       return res[type];
  //     });
  //   }
  return uomObj[type];
}
