const emission = {
  "Ortbeton - bewehrt": 72.5,
  "Ortbeton - bewehrt Verputzt": 420.407,
};

export default function getEmission(material) {
  const emissionFactor = emission[material] ? emission[material] : 0;
  return emissionFactor;
}
