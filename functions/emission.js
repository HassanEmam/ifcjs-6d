const emission = {
  "Ortbeton - bewehrt": 72.5,
  "Ortbeton - bewehrt Verputzt": 420.407,
  "Vinyl Composition Tile": 0.5,
  "Concrete, Lightweight": 312.6,
  "Metal Deck": 514.32,
  "Structure, Steel Bar Joist Layer": 314.56,
  "Concrete, Cast-in-Place gray": 420.407,
  "Steel, 45-345": 514.32,
};

export default function getEmission(material) {
  const emissionFactor = emission[material] ? emission[material] : 0;
  return emissionFactor;
}
