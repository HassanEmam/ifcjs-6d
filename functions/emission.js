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
  "Holz - generisch 140-100-70": 120.17,
  "Vidrio": 680.8,
  "Cristal": 680.8,
  "Madera - Castaño": 120.17,
  "Laminate, Linen, Matte": 120.17,
  "Steel, Chrome Plated": 514.32,
  "Pine": 120.17,
  "Textile - Bamboo Weave": 120.17,
  "Suelos por defecto": 420.407,
  "Holz": 120.17,
  "Leichtbeton 102890359": 420.407,
  "Radial Gradient Fill 1515460218": 514.32,
  "Stahlbeton 65690": 312.6,
  "Solid": 300,
  "Solid 397409098": 420.407,
  Glass: 680.8,
};

export default function getEmission(material) {
  const emissionFactor = emission[material] ? emission[material] : 0;
  return emissionFactor;
}
