const emission = {
  "Ortbeton - bewehrt": 72.5,
  "Ortbeton - bewehrt Verputzt": 420.407,
  "Vinyl Composition Tile": 0.5,
  "Concrete, Lightweight": 312.6,
  "Metal Deck": 514.32,
  "Structure, Steel Bar Joist Layer": 314.56,
  "Concrete, Cast-in-Place gray": 420.407,
  "Steel, 45-345": 514.32,
  "Holz - Dunkelbraun 90-80-70": 120.17,
  "Metall - Edelstahl gebürstet": 480.78,
  "Metall - Edelstahl satiniert": 563.62,
  "Lack - grau 80-80-80": 120.17,
  "Kunststoff - grau 70-70-70": 120.17,
  "Asphalt Shingle": 3456.54,
  "Plywood, Sheathing": 2345.33,
  "Structure, Wood Joist/Rafter Layer, Batt Insulation": 2850.23,
  Glass: 680.8,
};

export default function getEmission(material) {
  const emissionFactor = emission[material] ? emission[material] : 0;
  return emissionFactor;
}
