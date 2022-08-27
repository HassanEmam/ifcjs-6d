export const data11 = {
  "1": {
    "expressID": 1,
    "type": "IFCORGANIZATION",
    "Identification": null,
    "Name": "Autodesk Revit 2020 (DEU)",
    "Description": null,
    "Roles": null,
    "Addresses": null
  },
  "5": {
    "expressID": 5,
    "type": "IFCAPPLICATION",
    "ApplicationDeveloper": 1,
    "Version": "2020",
    "ApplicationFullName": "Autodesk Revit 2020 (DEU)",
    "ApplicationIdentifier": "Revit"
  },
  "36": {
    "expressID": 36,
    "type": "IFCPERSON",
    "Identification": null,
    "FamilyName": "",
    "GivenName": "Lill",
    "MiddleNames": null,
    "PrefixTitles": null,
    "SuffixTitles": null,
    "Roles": null,
    "Addresses": null
  },
  "38": {
    "expressID": 38,
    "type": "IFCORGANIZATION",
    "Identification": null,
    "Name": "",
    "Description": "",
    "Roles": null,
    "Addresses": null
  },
  "39": {
    "expressID": 39,
    "type": "IFCPERSONANDORGANIZATION",
    "ThePerson": 36,
    "TheOrganization": 38,
    "Roles": null
  },
  "42": {
    "expressID": 42,
    "type": "IFCOWNERHISTORY",
    "OwningUser": 39,
    "OwningApplication": 5,
    "State": null,
    "ChangeAction": "NOCHANGE",
    "LastModifiedDate": null,
    "LastModifyingUser": null,
    "LastModifyingApplication": null,
    "CreationDate": 1661521572
  },
  "43": {
    "expressID": 43,
    "type": "IFCSIUNIT",
    "Dimensions": { "type": 0 },
    "UnitType": "LENGTHUNIT",
    "Prefix": "MILLI",
    "Name": "METRE"
  },
  "44": {
    "expressID": 44,
    "type": "IFCSIUNIT",
    "Dimensions": { "type": 0 },
    "UnitType": "LENGTHUNIT",
    "Prefix": null,
    "Name": "METRE"
  },
  "45": {
    "expressID": 45,
    "type": "IFCSIUNIT",
    "Dimensions": { "type": 0 },
    "UnitType": "AREAUNIT",
    "Prefix": null,
    "Name": "SQUARE_METRE"
  },
  "46": {
    "expressID": 46,
    "type": "IFCSIUNIT",
    "Dimensions": { "type": 0 },
    "UnitType": "VOLUMEUNIT",
    "Prefix": null,
    "Name": "CUBIC_METRE"
  },
  "47": {
    "expressID": 47,
    "type": "IFCSIUNIT",
    "Dimensions": { "type": 0 },
    "UnitType": "PLANEANGLEUNIT",
    "Prefix": null,
    "Name": "RADIAN"
  },
  "48": {
    "expressID": 48,
    "type": "IFCDIMENSIONALEXPONENTS",
    "LengthExponent": 0,
    "MassExponent": 0,
    "TimeExponent": 0,
    "ElectricCurrentExponent": 0,
    "ThermodynamicTemperatureExponent": 0,
    "AmountOfSubstanceExponent": 0,
    "LuminousIntensityExponent": 0
  },
  "49": {
    "expressID": 49,
    "type": "IFCMEASUREWITHUNIT",
    "ValueComponent": 0.017453292519943302,
    "UnitComponent": 47
  },
  "50": {
    "expressID": 50,
    "type": "IFCCONVERSIONBASEDUNIT",
    "Dimensions": 48,
    "UnitType": "PLANEANGLEUNIT",
    "Name": "DEGREE",
    "ConversionFactor": 49
  },
  "51": {
    "expressID": 51,
    "type": "IFCSIUNIT",
    "Dimensions": { "type": 0 },
    "UnitType": "MASSUNIT",
    "Prefix": "KILO",
    "Name": "GRAM"
  },
  "52": {
    "expressID": 52,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 51,
    "Exponent": 1
  },
  "53": {
    "expressID": 53,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 44,
    "Exponent": -3
  },
  "54": {
    "expressID": 54,
    "type": "IFCDERIVEDUNIT",
    "Elements": [52, 53],
    "UnitType": "MASSDENSITYUNIT",
    "UserDefinedType": null
  },
  "56": {
    "expressID": 56,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 44,
    "Exponent": 4
  },
  "57": {
    "expressID": 57,
    "type": "IFCDERIVEDUNIT",
    "Elements": [56],
    "UnitType": "MOMENTOFINERTIAUNIT",
    "UserDefinedType": null
  },
  "59": {
    "expressID": 59,
    "type": "IFCSIUNIT",
    "Dimensions": { "type": 0 },
    "UnitType": "TIMEUNIT",
    "Prefix": null,
    "Name": "SECOND"
  },
  "60": {
    "expressID": 60,
    "type": "IFCSIUNIT",
    "Dimensions": { "type": 0 },
    "UnitType": "FREQUENCYUNIT",
    "Prefix": null,
    "Name": "HERTZ"
  },
  "61": {
    "expressID": 61,
    "type": "IFCSIUNIT",
    "Dimensions": { "type": 0 },
    "UnitType": "THERMODYNAMICTEMPERATUREUNIT",
    "Prefix": null,
    "Name": "KELVIN"
  },
  "62": {
    "expressID": 62,
    "type": "IFCSIUNIT",
    "Dimensions": { "type": 0 },
    "UnitType": "THERMODYNAMICTEMPERATUREUNIT",
    "Prefix": null,
    "Name": "DEGREE_CELSIUS"
  },
  "63": {
    "expressID": 63,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 51,
    "Exponent": 1
  },
  "64": {
    "expressID": 64,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 61,
    "Exponent": -1
  },
  "65": {
    "expressID": 65,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 59,
    "Exponent": -3
  },
  "66": {
    "expressID": 66,
    "type": "IFCDERIVEDUNIT",
    "Elements": [63, 64, 65],
    "UnitType": "THERMALTRANSMITTANCEUNIT",
    "UserDefinedType": null
  },
  "68": {
    "expressID": 68,
    "type": "IFCSIUNIT",
    "Dimensions": { "type": 0 },
    "UnitType": "LENGTHUNIT",
    "Prefix": "DECI",
    "Name": "METRE"
  },
  "69": {
    "expressID": 69,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 44,
    "Exponent": 3
  },
  "70": {
    "expressID": 70,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 59,
    "Exponent": -1
  },
  "71": {
    "expressID": 71,
    "type": "IFCDERIVEDUNIT",
    "Elements": [69, 70],
    "UnitType": "VOLUMETRICFLOWRATEUNIT",
    "UserDefinedType": null
  },
  "73": {
    "expressID": 73,
    "type": "IFCSIUNIT",
    "Dimensions": { "type": 0 },
    "UnitType": "ELECTRICCURRENTUNIT",
    "Prefix": null,
    "Name": "AMPERE"
  },
  "74": {
    "expressID": 74,
    "type": "IFCSIUNIT",
    "Dimensions": { "type": 0 },
    "UnitType": "ELECTRICVOLTAGEUNIT",
    "Prefix": null,
    "Name": "VOLT"
  },
  "75": {
    "expressID": 75,
    "type": "IFCSIUNIT",
    "Dimensions": { "type": 0 },
    "UnitType": "POWERUNIT",
    "Prefix": null,
    "Name": "WATT"
  },
  "76": {
    "expressID": 76,
    "type": "IFCSIUNIT",
    "Dimensions": { "type": 0 },
    "UnitType": "FORCEUNIT",
    "Prefix": "KILO",
    "Name": "NEWTON"
  },
  "77": {
    "expressID": 77,
    "type": "IFCSIUNIT",
    "Dimensions": { "type": 0 },
    "UnitType": "ILLUMINANCEUNIT",
    "Prefix": null,
    "Name": "LUX"
  },
  "78": {
    "expressID": 78,
    "type": "IFCSIUNIT",
    "Dimensions": { "type": 0 },
    "UnitType": "LUMINOUSFLUXUNIT",
    "Prefix": null,
    "Name": "LUMEN"
  },
  "79": {
    "expressID": 79,
    "type": "IFCSIUNIT",
    "Dimensions": { "type": 0 },
    "UnitType": "LUMINOUSINTENSITYUNIT",
    "Prefix": null,
    "Name": "CANDELA"
  },
  "80": {
    "expressID": 80,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 51,
    "Exponent": -1
  },
  "81": {
    "expressID": 81,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 44,
    "Exponent": -2
  },
  "82": {
    "expressID": 82,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 59,
    "Exponent": 3
  },
  "83": {
    "expressID": 83,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 78,
    "Exponent": 1
  },
  "84": {
    "expressID": 84,
    "type": "IFCDERIVEDUNIT",
    "Elements": [80, 81, 82, 83],
    "UnitType": "USERDEFINED",
    "UserDefinedType": "Luminous Efficacy"
  },
  "86": {
    "expressID": 86,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 44,
    "Exponent": 1
  },
  "87": {
    "expressID": 87,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 59,
    "Exponent": -1
  },
  "88": {
    "expressID": 88,
    "type": "IFCDERIVEDUNIT",
    "Elements": [86, 87],
    "UnitType": "LINEARVELOCITYUNIT",
    "UserDefinedType": null
  },
  "90": {
    "expressID": 90,
    "type": "IFCSIUNIT",
    "Dimensions": { "type": 0 },
    "UnitType": "PRESSUREUNIT",
    "Prefix": null,
    "Name": "PASCAL"
  },
  "91": {
    "expressID": 91,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 44,
    "Exponent": -2
  },
  "92": {
    "expressID": 92,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 51,
    "Exponent": 1
  },
  "93": {
    "expressID": 93,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 59,
    "Exponent": -2
  },
  "94": {
    "expressID": 94,
    "type": "IFCDERIVEDUNIT",
    "Elements": [91, 92, 93],
    "UnitType": "USERDEFINED",
    "UserDefinedType": "Friction Loss"
  },
  "96": {
    "expressID": 96,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 51,
    "Exponent": 1
  },
  "97": {
    "expressID": 97,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 44,
    "Exponent": 1
  },
  "98": {
    "expressID": 98,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 59,
    "Exponent": -2
  },
  "99": {
    "expressID": 99,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 44,
    "Exponent": -1
  },
  "100": {
    "expressID": 100,
    "type": "IFCDERIVEDUNIT",
    "Elements": [96, 97, 98, 99],
    "UnitType": "LINEARFORCEUNIT",
    "UserDefinedType": null
  },
  "102": {
    "expressID": 102,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 51,
    "Exponent": 1
  },
  "103": {
    "expressID": 103,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 44,
    "Exponent": 1
  },
  "104": {
    "expressID": 104,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 59,
    "Exponent": -2
  },
  "105": {
    "expressID": 105,
    "type": "IFCDERIVEDUNITELEMENT",
    "Unit": 44,
    "Exponent": -2
  },
  "106": {
    "expressID": 106,
    "type": "IFCDERIVEDUNIT",
    "Elements": [102, 103, 104, 105],
    "UnitType": "PLANARFORCEUNIT",
    "UserDefinedType": null
  },
  "108": {
    "expressID": 108,
    "type": "IFCUNITASSIGNMENT",
    "Units": [
      43, 45, 46, 50, 51, 54, 57, 59, 60, 62, 66, 71, 73, 74, 75, 76, 77, 78,
      79, 84, 88, 90, 94, 100, 106
    ]
  },
  "121": {
    "expressID": 121,
    "type": "IFCPROJECT",
    "GlobalId": "3HIGkz_k1DruesNNzlKaLt",
    "OwnerHistory": 42,
    "Name": "Project  Number",
    "Description": null,
    "ObjectType": null,
    "LongName": "Project Name",
    "Phase": "Project  Status",
    "RepresentationContexts": [113],
    "UnitsInContext": 108
  },
  "128": {
    "expressID": 128,
    "type": "IFCPOSTALADDRESS",
    "Purpose": null,
    "Description": null,
    "UserDefinedPurpose": null,
    "InternalLocation": null,
    "AddressLines": ["## Street\\X\\0D\\X\\0ACity, State  Zip"],
    "PostalBox": null,
    "Town": "",
    "Region": "Boston",
    "PostalCode": "",
    "Country": "MA"
  },
  "132": {
    "expressID": 132,
    "type": "IFCBUILDING",
    "GlobalId": "3HIGkz_k1DruesNNzlKaLs",
    "OwnerHistory": 42,
    "Name": "",
    "Description": null,
    "ObjectType": null,
    "ObjectPlacement": 33,
    "Representation": null,
    "LongName": "",
    "CompositionType": "ELEMENT",
    "ElevationOfRefHeight": null,
    "ElevationOfTerrain": null,
    "BuildingAddress": 128
  },
  "141": {
    "expressID": 141,
    "type": "IFCBUILDINGSTOREY",
    "GlobalId": "3HIGkz_k1DruesNN_GhOc8",
    "OwnerHistory": 42,
    "Name": "Level 1",
    "Description": null,
    "ObjectType": "Ebene:8mm Head",
    "ObjectPlacement": 139,
    "Representation": null,
    "LongName": "Level 1",
    "CompositionType": "ELEMENT",
    "Elevation": 0
  },
  "147": {
    "expressID": 147,
    "type": "IFCBUILDINGSTOREY",
    "GlobalId": "3HIGkz_k1DruesNN_GhOIk",
    "OwnerHistory": 42,
    "Name": "Level 2",
    "Description": null,
    "ObjectType": "Ebene:8mm Head",
    "ObjectPlacement": 146,
    "Representation": null,
    "LongName": "Level 2",
    "CompositionType": "ELEMENT",
    "Elevation": 4000
  },
  "151": {
    "expressID": 151,
    "type": "IFCSITE",
    "GlobalId": "3HIGkz_k1DruesNNzlKaLr",
    "OwnerHistory": 42,
    "Name": "Default",
    "Description": null,
    "ObjectType": null,
    "ObjectPlacement": 150,
    "Representation": null,
    "LongName": null,
    "CompositionType": "ELEMENT",
    "RefLatitude": [42, 21, 31, 181945],
    "RefLongitude": [-71, -3, -24, -263305],
    "RefElevation": 0,
    "LandTitleNumber": null,
    "SiteAddress": null
  },
  "187": {
    "expressID": 187,
    "type": "IFCSLAB",
    "GlobalId": "24bKYviez4sfXQ1fRhnyUf",
    "OwnerHistory": 42,
    "Name": "Geschossdecke:Steel Bar Joist - VCT on LW Concrete:203642",
    "Description": null,
    "ObjectType": "Geschossdecke:Steel Bar Joist - VCT on LW Concrete",
    "ObjectPlacement": 156,
    "Representation": 182,
    "Tag": "203642",
    "PredefinedType": "FLOOR"
  },
  "202": {
    "expressID": 202,
    "type": "IFCSLABTYPE",
    "GlobalId": "1_QzDWv_CHr9BT0026FqIR",
    "OwnerHistory": 42,
    "Name": "Geschossdecke:Steel Bar Joist - VCT on LW Concrete",
    "Description": null,
    "ApplicableOccurrence": null,
    "HasPropertySets": [318],
    "RepresentationMaps": null,
    "Tag": "25398",
    "ElementType": null,
    "PredefinedType": "FLOOR"
  },
  "204": {
    "expressID": 204,
    "type": "IFCMATERIAL",
    "Name": "Vinyl Composition Tile"
  },
  "218": {
    "expressID": 218,
    "type": "IFCMATERIALDEFINITIONREPRESENTATION",
    "Name": null,
    "Description": null,
    "Representations": [215],
    "RepresentedMaterial": 204
  },
  "222": {
    "expressID": 222,
    "type": "IFCMATERIAL",
    "Name": "Concrete, Lightweight"
  },
  "233": {
    "expressID": 233,
    "type": "IFCMATERIALDEFINITIONREPRESENTATION",
    "Name": null,
    "Description": null,
    "Representations": [231],
    "RepresentedMaterial": 222
  },
  "237": { "expressID": 237, "type": "IFCMATERIAL", "Name": "Metal Deck" },
  "248": {
    "expressID": 248,
    "type": "IFCMATERIALDEFINITIONREPRESENTATION",
    "Name": null,
    "Description": null,
    "Representations": [246],
    "RepresentedMaterial": 237
  },
  "252": {
    "expressID": 252,
    "type": "IFCMATERIAL",
    "Name": "Structure, Steel Bar Joist Layer"
  },
  "259": {
    "expressID": 259,
    "type": "IFCMATERIALDEFINITIONREPRESENTATION",
    "Name": null,
    "Description": null,
    "Representations": [257],
    "RepresentedMaterial": 252
  },
  "263": {
    "expressID": 263,
    "type": "IFCMATERIALLAYER",
    "Material": 204,
    "LayerThickness": 5,
    "IsVentilated": null
  },
  "265": {
    "expressID": 265,
    "type": "IFCMATERIALLAYER",
    "Material": 222,
    "LayerThickness": 100,
    "IsVentilated": null
  },
  "266": {
    "expressID": 266,
    "type": "IFCMATERIALLAYER",
    "Material": 237,
    "LayerThickness": 5,
    "IsVentilated": null
  },
  "267": {
    "expressID": 267,
    "type": "IFCMATERIALLAYER",
    "Material": 252,
    "LayerThickness": 400,
    "IsVentilated": null
  },
  "268": {
    "expressID": 268,
    "type": "IFCMATERIALLAYERSET",
    "MaterialLayers": [263, 265, 266, 267],
    "LayerSetName": "Geschossdecke:Steel Bar Joist - VCT on LW Concrete "
  },
  "274": {
    "expressID": 274,
    "type": "IFCMATERIALLAYERSETUSAGE",
    "ForLayerSet": 268,
    "LayerSetDirection": "AXIS3",
    "DirectionSense": "POSITIVE",
    "OffsetFromReferenceLine": 0
  },
  "275": {
    "expressID": 275,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Reference",
    "Description": null,
    "NominalValue": "Steel Bar Joist - VCT on LW Concrete",
    "Unit": null
  },
  "279": {
    "expressID": 279,
    "type": "IFCPROPERTYSET",
    "GlobalId": "2Tzf1FqtzFeu5E6jnIeYXh",
    "OwnerHistory": 42,
    "Name": "Pset_QuantityTakeOff",
    "Description": null,
    "HasProperties": [275]
  },
  "284": {
    "expressID": 284,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Reference",
    "Description": null,
    "NominalValue": "Steel Bar Joist - VCT on LW Concrete",
    "Unit": null
  },
  "285": {
    "expressID": 285,
    "type": "IFCPROPERTYSET",
    "GlobalId": "1bTAFa6k90xhGOTb0JTHTQ",
    "OwnerHistory": 42,
    "Name": "Pset_ReinforcementBarPitchOfSlab",
    "Description": null,
    "HasProperties": [284]
  },
  "287": {
    "expressID": 287,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "ThermalTransmittance",
    "Description": null,
    "NominalValue": 0.06065895389245601,
    "Unit": null
  },
  "288": {
    "expressID": 288,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "IsExternal",
    "Description": null,
    "NominalValue": "F",
    "Unit": null
  },
  "289": {
    "expressID": 289,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "LoadBearing",
    "Description": null,
    "NominalValue": "F",
    "Unit": null
  },
  "290": {
    "expressID": 290,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "PitchAngle",
    "Description": null,
    "NominalValue": 0,
    "Unit": null
  },
  "291": {
    "expressID": 291,
    "type": "IFCPROPERTYSET",
    "GlobalId": "24bKYviez4sfXQ3MthnyUf",
    "OwnerHistory": 42,
    "Name": "Pset_SlabCommon",
    "Description": null,
    "HasProperties": [275, 287, 288, 289, 290]
  },
  "293": {
    "expressID": 293,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "37r6LWsYr7J9g1yRkrfweF",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [187],
    "RelatingPropertyDefinition": 279
  },
  "297": {
    "expressID": 297,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "0AQrSBFyn0bQFL6_h0PNz5",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [187],
    "RelatingPropertyDefinition": 285
  },
  "300": {
    "expressID": 300,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "0xybXPwrnBWuZJ9TFUS$fJ",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [187],
    "RelatingPropertyDefinition": 291
  },
  "303": {
    "expressID": 303,
    "type": "IFCQUANTITYAREA",
    "Name": "GrossArea",
    "Description": "",
    "Unit": null,
    "AreaValue": 783.178256370891
  },
  "305": {
    "expressID": 305,
    "type": "IFCQUANTITYAREA",
    "Name": "NetArea",
    "Description": "",
    "Unit": null,
    "AreaValue": 783.178256370891
  },
  "306": {
    "expressID": 306,
    "type": "IFCQUANTITYVOLUME",
    "Name": "GrossVolume",
    "Description": "",
    "Unit": null,
    "VolumeValue": 399.420910749155
  },
  "307": {
    "expressID": 307,
    "type": "IFCQUANTITYVOLUME",
    "Name": "NetVolume",
    "Description": "",
    "Unit": null,
    "VolumeValue": 399.420910749155
  },
  "308": {
    "expressID": 308,
    "type": "IFCQUANTITYLENGTH",
    "Name": "Perimeter",
    "Description": "",
    "Unit": null,
    "LengthValue": 111973.641211074
  },
  "309": {
    "expressID": 309,
    "type": "IFCQUANTITYLENGTH",
    "Name": "Width",
    "Description": "",
    "Unit": null,
    "LengthValue": 510
  },
  "310": {
    "expressID": 310,
    "type": "IFCELEMENTQUANTITY",
    "GlobalId": "051VUyzmvDjumn37Ywo8TQ",
    "OwnerHistory": 42,
    "Name": "BaseQuantities",
    "Description": null,
    "MethodOfMeasurement": null,
    "Quantities": [303, 305, 306, 307, 308, 309]
  },
  "312": {
    "expressID": 312,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "2XHEq2zPnF6gN0vpz_v3qz",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [187],
    "RelatingPropertyDefinition": 310
  },
  "315": {
    "expressID": 315,
    "type": "IFCCLASSIFICATION",
    "Source": "https://www.csiresources.org/standards/uniformat",
    "Edition": "1998",
    "EditionDate": null,
    "Name": "Uniformat"
  },
  "317": {
    "expressID": 317,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "ThermalTransmittance",
    "Description": null,
    "NominalValue": 0.06065895389245601,
    "Unit": null
  },
  "318": {
    "expressID": 318,
    "type": "IFCPROPERTYSET",
    "GlobalId": "1_QzDWv_CHr9BT2$k6FqIR",
    "OwnerHistory": 42,
    "Name": "Pset_SlabCommon",
    "Description": null,
    "HasProperties": [288, 317]
  },
  "373": {
    "expressID": 373,
    "type": "IFCWALLSTANDARDCASE",
    "GlobalId": "24bKYviez4sfXQ1fRhnyTy",
    "OwnerHistory": 42,
    "Name": "Basiswand:Retaining - 300mm Concrete:203695",
    "Description": null,
    "ObjectType": "Basiswand:Retaining - 300mm Concrete",
    "ObjectPlacement": 325,
    "Representation": 369,
    "Tag": "203695"
  },
  "376": {
    "expressID": 376,
    "type": "IFCQUANTITYLENGTH",
    "Name": "Height",
    "Description": null,
    "Unit": null,
    "LengthValue": 3490
  },
  "377": {
    "expressID": 377,
    "type": "IFCQUANTITYLENGTH",
    "Name": "Length",
    "Description": null,
    "Unit": null,
    "LengthValue": 5066.28985623419
  },
  "378": {
    "expressID": 378,
    "type": "IFCQUANTITYLENGTH",
    "Name": "Width",
    "Description": null,
    "Unit": null,
    "LengthValue": 300
  },
  "379": {
    "expressID": 379,
    "type": "IFCQUANTITYAREA",
    "Name": "GrossFootprintArea",
    "Description": null,
    "Unit": null,
    "AreaValue": 1.51988695687026
  },
  "380": {
    "expressID": 380,
    "type": "IFCQUANTITYVOLUME",
    "Name": "GrossVolume",
    "Description": null,
    "Unit": null,
    "VolumeValue": 5.3044054794772
  },
  "381": {
    "expressID": 381,
    "type": "IFCQUANTITYAREA",
    "Name": "GrossSideArea",
    "Description": null,
    "Unit": null,
    "AreaValue": 17.6813515982573
  },
  "382": {
    "expressID": 382,
    "type": "IFCQUANTITYAREA",
    "Name": "NetSideArea",
    "Description": null,
    "Unit": null,
    "AreaValue": 17.6813515982573
  },
  "383": {
    "expressID": 383,
    "type": "IFCQUANTITYVOLUME",
    "Name": "NetVolume",
    "Description": null,
    "Unit": null,
    "VolumeValue": 5.30440547947718
  },
  "384": {
    "expressID": 384,
    "type": "IFCELEMENTQUANTITY",
    "GlobalId": "3WgaQfVkP5LuClomJzp0VO",
    "OwnerHistory": 42,
    "Name": "BaseQuantities",
    "Description": null,
    "MethodOfMeasurement": null,
    "Quantities": [376, 377, 378, 379, 380, 381, 382, 383]
  },
  "386": {
    "expressID": 386,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "3$5DTKrxP9_hwh2xzyTuyA",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [373],
    "RelatingPropertyDefinition": 384
  },
  "390": {
    "expressID": 390,
    "type": "IFCMATERIAL",
    "Name": "Concrete, Cast-in-Place gray"
  },
  "397": {
    "expressID": 397,
    "type": "IFCMATERIALDEFINITIONREPRESENTATION",
    "Name": null,
    "Description": null,
    "Representations": [395],
    "RepresentedMaterial": 390
  },
  "401": {
    "expressID": 401,
    "type": "IFCMATERIALLAYER",
    "Material": 390,
    "LayerThickness": 300,
    "IsVentilated": null
  },
  "402": {
    "expressID": 402,
    "type": "IFCMATERIALLAYERSET",
    "MaterialLayers": [401],
    "LayerSetName": "Basiswand:Retaining - 300mm Concrete"
  },
  "405": {
    "expressID": 405,
    "type": "IFCMATERIALLAYERSETUSAGE",
    "ForLayerSet": 402,
    "LayerSetDirection": "AXIS2",
    "DirectionSense": "NEGATIVE",
    "OffsetFromReferenceLine": 150
  },
  "406": {
    "expressID": 406,
    "type": "IFCWALLTYPE",
    "GlobalId": "1HBVb1NdfA6PUA6LzWtJ1Q",
    "OwnerHistory": 42,
    "Name": "Basiswand:Retaining - 300mm Concrete",
    "Description": null,
    "ApplicableOccurrence": null,
    "HasPropertySets": [409],
    "RepresentationMaps": null,
    "Tag": "31001",
    "ElementType": null,
    "PredefinedType": "STANDARD"
  },
  "407": {
    "expressID": 407,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "ThermalTransmittance",
    "Description": null,
    "NominalValue": 3.48666666666667,
    "Unit": null
  },
  "408": {
    "expressID": 408,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "IsExternal",
    "Description": null,
    "NominalValue": "T",
    "Unit": null
  },
  "409": {
    "expressID": 409,
    "type": "IFCPROPERTYSET",
    "GlobalId": "1HBVb1NdfA6PUA4g9WtJ1Q",
    "OwnerHistory": 42,
    "Name": "Pset_WallCommon",
    "Description": null,
    "HasProperties": [407, 408]
  },
  "413": {
    "expressID": 413,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Reference",
    "Description": null,
    "NominalValue": "Retaining - 300mm Concrete",
    "Unit": null
  },
  "414": {
    "expressID": 414,
    "type": "IFCPROPERTYSET",
    "GlobalId": "023JVN2dH4A86SLeQwTLr2",
    "OwnerHistory": 42,
    "Name": "Pset_QuantityTakeOff",
    "Description": null,
    "HasProperties": [413]
  },
  "416": {
    "expressID": 416,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Reference",
    "Description": null,
    "NominalValue": "Retaining - 300mm Concrete",
    "Unit": null
  },
  "417": {
    "expressID": 417,
    "type": "IFCPROPERTYSET",
    "GlobalId": "2MNCBCXBzCfhPDFdIkoUjy",
    "OwnerHistory": 42,
    "Name": "Pset_ReinforcementBarPitchOfWall",
    "Description": null,
    "HasProperties": [416]
  },
  "419": {
    "expressID": 419,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "ThermalTransmittance",
    "Description": null,
    "NominalValue": 3.48666666666667,
    "Unit": null
  },
  "420": {
    "expressID": 420,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "ExtendToStructure",
    "Description": null,
    "NominalValue": "T",
    "Unit": null
  },
  "421": {
    "expressID": 421,
    "type": "IFCPROPERTYSET",
    "GlobalId": "24bKYviez4sfXQ3MlhnyTy",
    "OwnerHistory": 42,
    "Name": "Pset_WallCommon",
    "Description": null,
    "HasProperties": [289, 408, 413, 419, 420]
  },
  "423": {
    "expressID": 423,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "27IMvdP7r0S9fyDc8vVZgI",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [373],
    "RelatingPropertyDefinition": 414
  },
  "426": {
    "expressID": 426,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "2n$87LGQvBhOGmIFIjQQfX",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [373],
    "RelatingPropertyDefinition": 417
  },
  "429": {
    "expressID": 429,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "1$ORdVuoPF$vvB_Yx_CArH",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [373],
    "RelatingPropertyDefinition": 421
  },
  "476": {
    "expressID": 476,
    "type": "IFCWALLSTANDARDCASE",
    "GlobalId": "24bKYviez4sfXQ1fRhnyTd",
    "OwnerHistory": 42,
    "Name": "Basiswand:Retaining - 300mm Concrete:203700",
    "Description": null,
    "ObjectType": "Basiswand:Retaining - 300mm Concrete",
    "ObjectPlacement": 435,
    "Representation": 472,
    "Tag": "203700"
  },
  "479": {
    "expressID": 479,
    "type": "IFCQUANTITYLENGTH",
    "Name": "Height",
    "Description": null,
    "Unit": null,
    "LengthValue": 3490
  },
  "480": {
    "expressID": 480,
    "type": "IFCQUANTITYLENGTH",
    "Name": "Length",
    "Description": null,
    "Unit": null,
    "LengthValue": 28366.2877123009
  },
  "481": {
    "expressID": 481,
    "type": "IFCQUANTITYLENGTH",
    "Name": "Width",
    "Description": null,
    "Unit": null,
    "LengthValue": 300
  },
  "482": {
    "expressID": 482,
    "type": "IFCQUANTITYAREA",
    "Name": "GrossFootprintArea",
    "Description": null,
    "Unit": null,
    "AreaValue": 8.50988631369031
  },
  "483": {
    "expressID": 483,
    "type": "IFCQUANTITYVOLUME",
    "Name": "GrossVolume",
    "Description": null,
    "Unit": null,
    "VolumeValue": 29.6995032347791
  },
  "484": {
    "expressID": 484,
    "type": "IFCQUANTITYAREA",
    "Name": "GrossSideArea",
    "Description": null,
    "Unit": null,
    "AreaValue": 98.9983441159303
  },
  "485": {
    "expressID": 485,
    "type": "IFCQUANTITYAREA",
    "Name": "NetSideArea",
    "Description": null,
    "Unit": null,
    "AreaValue": 98.9983441159303
  },
  "486": {
    "expressID": 486,
    "type": "IFCQUANTITYVOLUME",
    "Name": "NetVolume",
    "Description": null,
    "Unit": null,
    "VolumeValue": 29.699503234779
  },
  "487": {
    "expressID": 487,
    "type": "IFCELEMENTQUANTITY",
    "GlobalId": "2yTUbyP3HEwwfR068fweyv",
    "OwnerHistory": 42,
    "Name": "BaseQuantities",
    "Description": null,
    "MethodOfMeasurement": null,
    "Quantities": [479, 480, 481, 482, 483, 484, 485, 486]
  },
  "489": {
    "expressID": 489,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "0jAlyQHAX538KHbPcOH4PP",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [476],
    "RelatingPropertyDefinition": 487
  },
  "493": {
    "expressID": 493,
    "type": "IFCMATERIALLAYERSETUSAGE",
    "ForLayerSet": 402,
    "LayerSetDirection": "AXIS2",
    "DirectionSense": "NEGATIVE",
    "OffsetFromReferenceLine": 150
  },
  "494": {
    "expressID": 494,
    "type": "IFCPROPERTYSET",
    "GlobalId": "0cmM9Zk_9ADewZx4jGgpya",
    "OwnerHistory": 42,
    "Name": "Pset_QuantityTakeOff",
    "Description": null,
    "HasProperties": [413]
  },
  "496": {
    "expressID": 496,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Reference",
    "Description": null,
    "NominalValue": "Retaining - 300mm Concrete",
    "Unit": null
  },
  "497": {
    "expressID": 497,
    "type": "IFCPROPERTYSET",
    "GlobalId": "1OcpUtVHH48xk1I8BORK3g",
    "OwnerHistory": 42,
    "Name": "Pset_ReinforcementBarPitchOfWall",
    "Description": null,
    "HasProperties": [496]
  },
  "499": {
    "expressID": 499,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "ThermalTransmittance",
    "Description": null,
    "NominalValue": 3.48666666666667,
    "Unit": null
  },
  "500": {
    "expressID": 500,
    "type": "IFCPROPERTYSET",
    "GlobalId": "24bKYviez4sfXQ3MlhnyTd",
    "OwnerHistory": 42,
    "Name": "Pset_WallCommon",
    "Description": null,
    "HasProperties": [289, 408, 413, 420, 499]
  },
  "502": {
    "expressID": 502,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "3nYnWiqrnC4BhCeP1v7uhh",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [476],
    "RelatingPropertyDefinition": 494
  },
  "505": {
    "expressID": 505,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "21DfMyJzDB7RFpllb0Z6tL",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [476],
    "RelatingPropertyDefinition": 497
  },
  "508": {
    "expressID": 508,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "3eByIx8_fExPyVSvG6lH0S",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [476],
    "RelatingPropertyDefinition": 500
  },
  "553": {
    "expressID": 553,
    "type": "IFCWALLSTANDARDCASE",
    "GlobalId": "24bKYviez4sfXQ1fRhnyTg",
    "OwnerHistory": 42,
    "Name": "Basiswand:Retaining - 300mm Concrete:203705",
    "Description": null,
    "ObjectType": "Basiswand:Retaining - 300mm Concrete",
    "ObjectPlacement": 514,
    "Representation": 549,
    "Tag": "203705"
  },
  "556": {
    "expressID": 556,
    "type": "IFCQUANTITYLENGTH",
    "Name": "Height",
    "Description": null,
    "Unit": null,
    "LengthValue": 3490
  },
  "557": {
    "expressID": 557,
    "type": "IFCQUANTITYLENGTH",
    "Name": "Length",
    "Description": null,
    "Unit": null,
    "LengthValue": 4766.28985623419
  },
  "558": {
    "expressID": 558,
    "type": "IFCQUANTITYLENGTH",
    "Name": "Width",
    "Description": null,
    "Unit": null,
    "LengthValue": 300
  },
  "559": {
    "expressID": 559,
    "type": "IFCQUANTITYAREA",
    "Name": "GrossFootprintArea",
    "Description": null,
    "Unit": null,
    "AreaValue": 1.4298869568702601
  },
  "560": {
    "expressID": 560,
    "type": "IFCQUANTITYVOLUME",
    "Name": "GrossVolume",
    "Description": null,
    "Unit": null,
    "VolumeValue": 4.9903054794772
  },
  "561": {
    "expressID": 561,
    "type": "IFCQUANTITYAREA",
    "Name": "GrossSideArea",
    "Description": null,
    "Unit": null,
    "AreaValue": 16.6343515982573
  },
  "562": {
    "expressID": 562,
    "type": "IFCQUANTITYAREA",
    "Name": "NetSideArea",
    "Description": null,
    "Unit": null,
    "AreaValue": 16.6343515982573
  },
  "563": {
    "expressID": 563,
    "type": "IFCQUANTITYVOLUME",
    "Name": "NetVolume",
    "Description": null,
    "Unit": null,
    "VolumeValue": 4.99030547947718
  },
  "564": {
    "expressID": 564,
    "type": "IFCELEMENTQUANTITY",
    "GlobalId": "2Phh8IRG93IQsiVqX8x1L6",
    "OwnerHistory": 42,
    "Name": "BaseQuantities",
    "Description": null,
    "MethodOfMeasurement": null,
    "Quantities": [556, 557, 558, 559, 560, 561, 562, 563]
  },
  "566": {
    "expressID": 566,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "3O9vNhhaDFuwtUDbdJtDoD",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [553],
    "RelatingPropertyDefinition": 564
  },
  "570": {
    "expressID": 570,
    "type": "IFCMATERIALLAYERSETUSAGE",
    "ForLayerSet": 402,
    "LayerSetDirection": "AXIS2",
    "DirectionSense": "NEGATIVE",
    "OffsetFromReferenceLine": 150
  },
  "571": {
    "expressID": 571,
    "type": "IFCPROPERTYSET",
    "GlobalId": "2UO0Y5alz5VPIvj6DOzsFJ",
    "OwnerHistory": 42,
    "Name": "Pset_QuantityTakeOff",
    "Description": null,
    "HasProperties": [413]
  },
  "573": {
    "expressID": 573,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Reference",
    "Description": null,
    "NominalValue": "Retaining - 300mm Concrete",
    "Unit": null
  },
  "574": {
    "expressID": 574,
    "type": "IFCPROPERTYSET",
    "GlobalId": "1AVV3OZb5CSQgJQoB5825z",
    "OwnerHistory": 42,
    "Name": "Pset_ReinforcementBarPitchOfWall",
    "Description": null,
    "HasProperties": [573]
  },
  "576": {
    "expressID": 576,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "ThermalTransmittance",
    "Description": null,
    "NominalValue": 3.48666666666667,
    "Unit": null
  },
  "577": {
    "expressID": 577,
    "type": "IFCPROPERTYSET",
    "GlobalId": "24bKYviez4sfXQ3MlhnyTg",
    "OwnerHistory": 42,
    "Name": "Pset_WallCommon",
    "Description": null,
    "HasProperties": [289, 408, 413, 420, 576]
  },
  "579": {
    "expressID": 579,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "2LXvNOaO17jRCP1sMRpIEx",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [553],
    "RelatingPropertyDefinition": 571
  },
  "582": {
    "expressID": 582,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "2hseA8Ur9AEh7_qnEZqXns",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [553],
    "RelatingPropertyDefinition": 574
  },
  "585": {
    "expressID": 585,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "0qnmICcOXECeR6u71OEv91",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [553],
    "RelatingPropertyDefinition": 577
  },
  "621": {
    "expressID": 621,
    "type": "IFCSLAB",
    "GlobalId": "24bKYviez4sfXQ1fRhny42",
    "OwnerHistory": 42,
    "Name": "Geschossdecke:Steel Bar Joist - VCT on LW Concrete:204241",
    "Description": null,
    "ObjectType": "Geschossdecke:Steel Bar Joist - VCT on LW Concrete",
    "ObjectPlacement": 589,
    "Representation": 618,
    "Tag": "204241",
    "PredefinedType": "FLOOR"
  },
  "624": {
    "expressID": 624,
    "type": "IFCSLABTYPE",
    "GlobalId": "3USOgzgJfCsQmgMStAXyKs",
    "OwnerHistory": 42,
    "Name": "Geschossdecke:Steel Bar Joist - VCT on LW Concrete",
    "Description": null,
    "ApplicableOccurrence": null,
    "HasPropertySets": [700],
    "RepresentationMaps": null,
    "Tag": "25398",
    "ElementType": null,
    "PredefinedType": "FLOOR"
  },
  "644": {
    "expressID": 644,
    "type": "IFCOPENINGELEMENT",
    "GlobalId": "24bKYviez4sfXQ1fRhn$m4",
    "OwnerHistory": 42,
    "Name": "Geschossdecke:Steel Bar Joist - VCT on LW Concrete :204241:2",
    "Description": null,
    "ObjectType": "Opening",
    "ObjectPlacement": 642,
    "Representation": 636,
    "Tag": "204241"
  },
  "649": {
    "expressID": 649,
    "type": "IFCQUANTITYLENGTH",
    "Name": "Depth",
    "Description": "",
    "Unit": null,
    "LengthValue": 510
  },
  "650": {
    "expressID": 650,
    "type": "IFCQUANTITYLENGTH",
    "Name": "Height",
    "Description": "",
    "Unit": null,
    "LengthValue": 13742.5922206409
  },
  "651": {
    "expressID": 651,
    "type": "IFCQUANTITYLENGTH",
    "Name": "Width",
    "Description": "",
    "Unit": null,
    "LengthValue": 11481.7454559607
  },
  "652": {
    "expressID": 652,
    "type": "IFCELEMENTQUANTITY",
    "GlobalId": "26YuJJhkLDAhuuqmo0ILKt",
    "OwnerHistory": 42,
    "Name": "BaseQuantities",
    "Description": null,
    "MethodOfMeasurement": null,
    "Quantities": [649, 650, 651]
  },
  "654": {
    "expressID": 654,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "0xs7THLEvEG8dqz3aOSr$h",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [644],
    "RelatingPropertyDefinition": 652
  },
  "658": {
    "expressID": 658,
    "type": "IFCRELVOIDSELEMENT",
    "GlobalId": "1_rvInl8P6bQUPF1LHznu_",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatingBuildingElement": 621,
    "RelatedOpeningElement": 644
  },
  "661": {
    "expressID": 661,
    "type": "IFCMATERIALLAYERSETUSAGE",
    "ForLayerSet": 268,
    "LayerSetDirection": "AXIS3",
    "DirectionSense": "POSITIVE",
    "OffsetFromReferenceLine": 0
  },
  "662": {
    "expressID": 662,
    "type": "IFCPROPERTYSET",
    "GlobalId": "2TSduY69LEOApbXERwvpAi",
    "OwnerHistory": 42,
    "Name": "Pset_QuantityTakeOff",
    "Description": null,
    "HasProperties": [275]
  },
  "664": {
    "expressID": 664,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Reference",
    "Description": null,
    "NominalValue": "Steel Bar Joist - VCT on LW Concrete",
    "Unit": null
  },
  "665": {
    "expressID": 665,
    "type": "IFCPROPERTYSET",
    "GlobalId": "2OOaVCp9v69vcxcx7n_wSI",
    "OwnerHistory": 42,
    "Name": "Pset_ReinforcementBarPitchOfSlab",
    "Description": null,
    "HasProperties": [664]
  },
  "667": {
    "expressID": 667,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "ThermalTransmittance",
    "Description": null,
    "NominalValue": 0.06065895389245601,
    "Unit": null
  },
  "668": {
    "expressID": 668,
    "type": "IFCPROPERTYSET",
    "GlobalId": "24bKYviez4sfXQ3Mthny42",
    "OwnerHistory": 42,
    "Name": "Pset_SlabCommon",
    "Description": null,
    "HasProperties": [275, 288, 289, 290, 667]
  },
  "670": {
    "expressID": 670,
    "type": "IFCPROPERTYSET",
    "GlobalId": "3tpdGPv_zC1xqi0uqRE1sX",
    "OwnerHistory": 42,
    "Name": "Pset_OpeningElementCommon",
    "Description": null,
    "HasProperties": [275]
  },
  "672": {
    "expressID": 672,
    "type": "IFCPROPERTYSET",
    "GlobalId": "1KWSNjbhn6lP7WBFsFqJKo",
    "OwnerHistory": 42,
    "Name": "Pset_QuantityTakeOff",
    "Description": null,
    "HasProperties": [275]
  },
  "674": {
    "expressID": 674,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "0b$bnujnHApeBj3ouOEb7B",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [621],
    "RelatingPropertyDefinition": 662
  },
  "678": {
    "expressID": 678,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "1LFf$hlsXC3RqBaHKUFvVq",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [621],
    "RelatingPropertyDefinition": 665
  },
  "681": {
    "expressID": 681,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "16Z220YQn75BbQ2euevSXZ",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [621],
    "RelatingPropertyDefinition": 668
  },
  "684": {
    "expressID": 684,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "2FFa61AVr2YAr_ZjhwUaCi",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [644],
    "RelatingPropertyDefinition": 670
  },
  "687": {
    "expressID": 687,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "0SmPi00OHBCuthStdyRmIW",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [644],
    "RelatingPropertyDefinition": 672
  },
  "690": {
    "expressID": 690,
    "type": "IFCQUANTITYAREA",
    "Name": "GrossArea",
    "Description": "",
    "Unit": null,
    "AreaValue": 783.178256370892
  },
  "691": {
    "expressID": 691,
    "type": "IFCQUANTITYAREA",
    "Name": "NetArea",
    "Description": "",
    "Unit": null,
    "AreaValue": 625.389310588427
  },
  "692": {
    "expressID": 692,
    "type": "IFCQUANTITYVOLUME",
    "Name": "NetVolume",
    "Description": "",
    "Unit": null,
    "VolumeValue": 318.948548400097
  },
  "693": {
    "expressID": 693,
    "type": "IFCQUANTITYLENGTH",
    "Name": "Perimeter",
    "Description": "",
    "Unit": null,
    "LengthValue": 111973.641211074
  },
  "694": {
    "expressID": 694,
    "type": "IFCELEMENTQUANTITY",
    "GlobalId": "3ssonGZYT3DhMbCZSR5RFA",
    "OwnerHistory": 42,
    "Name": "BaseQuantities",
    "Description": null,
    "MethodOfMeasurement": null,
    "Quantities": [690, 691, 692, 693]
  },
  "696": {
    "expressID": 696,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "1b1uzTIe15RBOStiquRTMa",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [621],
    "RelatingPropertyDefinition": 694
  },
  "699": {
    "expressID": 699,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "ThermalTransmittance",
    "Description": null,
    "NominalValue": 0.06065895389245601,
    "Unit": null
  },
  "700": {
    "expressID": 700,
    "type": "IFCPROPERTYSET",
    "GlobalId": "03KV4Fxdn2nBs9sDl1kcJq",
    "OwnerHistory": 42,
    "Name": "Pset_SlabCommon",
    "Description": null,
    "HasProperties": [288, 699]
  },
  "865": {
    "expressID": 865,
    "type": "IFCVECTOR",
    "Orientation": 863,
    "Magnitude": 304.8
  },
  "883": {
    "expressID": 883,
    "type": "IFCCOLUMNTYPE",
    "GlobalId": "24bKYviez4sfXQ3fRhnyDv",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73",
    "Description": null,
    "ApplicableOccurrence": null,
    "HasPropertySets": [941],
    "RepresentationMaps": [877, 881],
    "Tag": "195136",
    "ElementType": null,
    "PredefinedType": "COLUMN"
  },
  "885": { "expressID": 885, "type": "IFCMATERIAL", "Name": "Steel, 45-345" },
  "892": {
    "expressID": 892,
    "type": "IFCMATERIALDEFINITIONREPRESENTATION",
    "Name": null,
    "Description": null,
    "Representations": [890],
    "RepresentedMaterial": 885
  },
  "911": {
    "expressID": 911,
    "type": "IFCCOLUMN",
    "GlobalId": "24bKYviez4sfXQ1fRhnyDv",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73:204714",
    "Description": null,
    "ObjectType": "M_W Shapes-Column:W250X73",
    "ObjectPlacement": 910,
    "Representation": 905,
    "Tag": "204714"
  },
  "914": {
    "expressID": 914,
    "type": "IFCQUANTITYAREA",
    "Name": "GrossSurfaceArea",
    "Description": null,
    "Unit": null,
    "AreaValue": 0
  },
  "915": {
    "expressID": 915,
    "type": "IFCQUANTITYVOLUME",
    "Name": "NetVolume",
    "Description": null,
    "Unit": null,
    "VolumeValue": 0.037789477849891596
  },
  "916": {
    "expressID": 916,
    "type": "IFCELEMENTQUANTITY",
    "GlobalId": "11YeNKS590XAMHwq7tWMbc",
    "OwnerHistory": 42,
    "Name": "BaseQuantities",
    "Description": null,
    "MethodOfMeasurement": null,
    "Quantities": [914, 915]
  },
  "918": {
    "expressID": 918,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "1JwrVU2dXAqBouF4X$TVmq",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [911],
    "RelatingPropertyDefinition": 916
  },
  "922": {
    "expressID": 922,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Reference",
    "Description": null,
    "NominalValue": "W250X73",
    "Unit": null
  },
  "923": {
    "expressID": 923,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Slope",
    "Description": null,
    "NominalValue": 75.9011138412773,
    "Unit": null
  },
  "924": {
    "expressID": 924,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "LoadBearing",
    "Description": null,
    "NominalValue": "T",
    "Unit": null
  },
  "925": {
    "expressID": 925,
    "type": "IFCPROPERTYSET",
    "GlobalId": "1bKvERupH0ihr8gxf7z4K4",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 922, 923, 924]
  },
  "927": {
    "expressID": 927,
    "type": "IFCPROPERTYSET",
    "GlobalId": "1Tu5KcP_T7AAbgm2ccXu2$",
    "OwnerHistory": 42,
    "Name": "Pset_QuantityTakeOff",
    "Description": null,
    "HasProperties": [922]
  },
  "929": {
    "expressID": 929,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Reference",
    "Description": null,
    "NominalValue": "W250X73",
    "Unit": null
  },
  "930": {
    "expressID": 930,
    "type": "IFCPROPERTYSET",
    "GlobalId": "3YPcR7vw58Lg4EvKXJ4f2Y",
    "OwnerHistory": 42,
    "Name": "Pset_ReinforcementBarPitchOfColumn",
    "Description": null,
    "HasProperties": [929]
  },
  "932": {
    "expressID": 932,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "0MDd$QjW9Ao8O3E4NrcN2G",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [911],
    "RelatingPropertyDefinition": 925
  },
  "935": {
    "expressID": 935,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "1UQwIjkG1Dy9BkNAkWTORz",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [911],
    "RelatingPropertyDefinition": 927
  },
  "938": {
    "expressID": 938,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "1U5tsEzlP3ZOFquupLBEcR",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [911],
    "RelatingPropertyDefinition": 930
  },
  "941": {
    "expressID": 941,
    "type": "IFCPROPERTYSET",
    "GlobalId": "0hi$oqvWH8EA8SA6oih0wO",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 924]
  },
  "945": {
    "expressID": 945,
    "type": "IFCGROUP",
    "GlobalId": "24bKYviez4sfXQ1fRhnyCo",
    "OwnerHistory": 42,
    "Name": "Modellgruppe:Reihengruppe 1:204769",
    "Description": null,
    "ObjectType": "Modellgruppe:Reihengruppe 1"
  },
  "1101": {
    "expressID": 1101,
    "type": "IFCVECTOR",
    "Orientation": 1099,
    "Magnitude": 304.8
  },
  "1118": {
    "expressID": 1118,
    "type": "IFCCOLUMNTYPE",
    "GlobalId": "24bKYviez4sfXQ3fRhnyCs",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73",
    "Description": null,
    "ApplicableOccurrence": null,
    "HasPropertySets": [1162],
    "RepresentationMaps": [1113, 1116],
    "Tag": "195136",
    "ElementType": null,
    "PredefinedType": "COLUMN"
  },
  "1134": {
    "expressID": 1134,
    "type": "IFCCOLUMN",
    "GlobalId": "24bKYviez4sfXQ1fRhnyCs",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73:204773",
    "Description": null,
    "ObjectType": "M_W Shapes-Column:W250X73",
    "ObjectPlacement": 1133,
    "Representation": 1128,
    "Tag": "204773"
  },
  "1137": {
    "expressID": 1137,
    "type": "IFCQUANTITYAREA",
    "Name": "GrossSurfaceArea",
    "Description": null,
    "Unit": null,
    "AreaValue": 0
  },
  "1138": {
    "expressID": 1138,
    "type": "IFCQUANTITYVOLUME",
    "Name": "NetVolume",
    "Description": null,
    "Unit": null,
    "VolumeValue": 0.0377894778498914
  },
  "1139": {
    "expressID": 1139,
    "type": "IFCELEMENTQUANTITY",
    "GlobalId": "34kI7zIJn7PQ1Vot2OJ1IY",
    "OwnerHistory": 42,
    "Name": "BaseQuantities",
    "Description": null,
    "MethodOfMeasurement": null,
    "Quantities": [1137, 1138]
  },
  "1141": {
    "expressID": 1141,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "1tnoHZGX1CHRS1BcGn_ue2",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1134],
    "RelatingPropertyDefinition": 1139
  },
  "1145": {
    "expressID": 1145,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Slope",
    "Description": null,
    "NominalValue": 75.9011138412773,
    "Unit": null
  },
  "1146": {
    "expressID": 1146,
    "type": "IFCPROPERTYSET",
    "GlobalId": "3RqRReKc9DxeHq3unaRjVq",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 922, 924, 1145]
  },
  "1148": {
    "expressID": 1148,
    "type": "IFCPROPERTYSET",
    "GlobalId": "1ooFMKaGX8Gw_PQRYOLJna",
    "OwnerHistory": 42,
    "Name": "Pset_QuantityTakeOff",
    "Description": null,
    "HasProperties": [922]
  },
  "1150": {
    "expressID": 1150,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Reference",
    "Description": null,
    "NominalValue": "W250X73",
    "Unit": null
  },
  "1151": {
    "expressID": 1151,
    "type": "IFCPROPERTYSET",
    "GlobalId": "1xNMxIrrL8Kf6AVaKQuZGq",
    "OwnerHistory": 42,
    "Name": "Pset_ReinforcementBarPitchOfColumn",
    "Description": null,
    "HasProperties": [1150]
  },
  "1153": {
    "expressID": 1153,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "1byG2LNKf4vuvVCikNqDqV",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1134],
    "RelatingPropertyDefinition": 1146
  },
  "1156": {
    "expressID": 1156,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "1p89VcmJ5AXQdcY1w92mea",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1134],
    "RelatingPropertyDefinition": 1148
  },
  "1159": {
    "expressID": 1159,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "0fzBV_hij1gP2eBAhvnnCE",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1134],
    "RelatingPropertyDefinition": 1151
  },
  "1162": {
    "expressID": 1162,
    "type": "IFCPROPERTYSET",
    "GlobalId": "02SsO99FT9HvWl9grKZq4c",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 924]
  },
  "1166": {
    "expressID": 1166,
    "type": "IFCGROUP",
    "GlobalId": "24bKYviez4sfXQ1fRhnyCq",
    "OwnerHistory": 42,
    "Name": "Modellgruppe:Reihengruppe 1:204775",
    "Description": null,
    "ObjectType": "Modellgruppe:Reihengruppe 1"
  },
  "1321": {
    "expressID": 1321,
    "type": "IFCVECTOR",
    "Orientation": 1319,
    "Magnitude": 304.8
  },
  "1338": {
    "expressID": 1338,
    "type": "IFCCOLUMNTYPE",
    "GlobalId": "24bKYviez4sfXQ3fRhnyCb",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73",
    "Description": null,
    "ApplicableOccurrence": null,
    "HasPropertySets": [1382],
    "RepresentationMaps": [1333, 1336],
    "Tag": "195136",
    "ElementType": null,
    "PredefinedType": "COLUMN"
  },
  "1354": {
    "expressID": 1354,
    "type": "IFCCOLUMN",
    "GlobalId": "24bKYviez4sfXQ1fRhnyCb",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73:204790",
    "Description": null,
    "ObjectType": "M_W Shapes-Column:W250X73",
    "ObjectPlacement": 1353,
    "Representation": 1348,
    "Tag": "204790"
  },
  "1357": {
    "expressID": 1357,
    "type": "IFCQUANTITYAREA",
    "Name": "GrossSurfaceArea",
    "Description": null,
    "Unit": null,
    "AreaValue": 0
  },
  "1358": {
    "expressID": 1358,
    "type": "IFCQUANTITYVOLUME",
    "Name": "NetVolume",
    "Description": null,
    "Unit": null,
    "VolumeValue": 0.0377894778498912
  },
  "1359": {
    "expressID": 1359,
    "type": "IFCELEMENTQUANTITY",
    "GlobalId": "3ye9_cRWD0gQMDbYNVozG1",
    "OwnerHistory": 42,
    "Name": "BaseQuantities",
    "Description": null,
    "MethodOfMeasurement": null,
    "Quantities": [1357, 1358]
  },
  "1361": {
    "expressID": 1361,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "3k4Gk9FfrDaAQ19Va8SgBm",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1354],
    "RelatingPropertyDefinition": 1359
  },
  "1365": {
    "expressID": 1365,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Slope",
    "Description": null,
    "NominalValue": 75.9011138412773,
    "Unit": null
  },
  "1366": {
    "expressID": 1366,
    "type": "IFCPROPERTYSET",
    "GlobalId": "32hq845FbASupgsO$D1IvH",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 922, 924, 1365]
  },
  "1368": {
    "expressID": 1368,
    "type": "IFCPROPERTYSET",
    "GlobalId": "39ljsK2l55bAz7Ccu4aSBb",
    "OwnerHistory": 42,
    "Name": "Pset_QuantityTakeOff",
    "Description": null,
    "HasProperties": [922]
  },
  "1370": {
    "expressID": 1370,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Reference",
    "Description": null,
    "NominalValue": "W250X73",
    "Unit": null
  },
  "1371": {
    "expressID": 1371,
    "type": "IFCPROPERTYSET",
    "GlobalId": "0G1cXMiAn1aesoeSi_8rb9",
    "OwnerHistory": 42,
    "Name": "Pset_ReinforcementBarPitchOfColumn",
    "Description": null,
    "HasProperties": [1370]
  },
  "1373": {
    "expressID": 1373,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "1woX2uLk905vSZtYYfhoUL",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1354],
    "RelatingPropertyDefinition": 1366
  },
  "1376": {
    "expressID": 1376,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "25ryNukI1DtgYyRD9ic0dq",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1354],
    "RelatingPropertyDefinition": 1368
  },
  "1379": {
    "expressID": 1379,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "2G_xvbkb19wxfBWlLEhlwQ",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1354],
    "RelatingPropertyDefinition": 1371
  },
  "1382": {
    "expressID": 1382,
    "type": "IFCPROPERTYSET",
    "GlobalId": "1XVE4lJlX3kxb5DH7ZHR6_",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 924]
  },
  "1386": {
    "expressID": 1386,
    "type": "IFCGROUP",
    "GlobalId": "24bKYviez4sfXQ1fRhnyCh",
    "OwnerHistory": 42,
    "Name": "Modellgruppe:Reihengruppe 1:204792",
    "Description": null,
    "ObjectType": "Modellgruppe:Reihengruppe 1"
  },
  "1541": {
    "expressID": 1541,
    "type": "IFCVECTOR",
    "Orientation": 1539,
    "Magnitude": 304.8
  },
  "1558": {
    "expressID": 1558,
    "type": "IFCCOLUMNTYPE",
    "GlobalId": "24bKYviez4sfXQ3fRhnyCe",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73",
    "Description": null,
    "ApplicableOccurrence": null,
    "HasPropertySets": [1602],
    "RepresentationMaps": [1553, 1556],
    "Tag": "195136",
    "ElementType": null,
    "PredefinedType": "COLUMN"
  },
  "1574": {
    "expressID": 1574,
    "type": "IFCCOLUMN",
    "GlobalId": "24bKYviez4sfXQ1fRhnyCe",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73:204795",
    "Description": null,
    "ObjectType": "M_W Shapes-Column:W250X73",
    "ObjectPlacement": 1573,
    "Representation": 1568,
    "Tag": "204795"
  },
  "1577": {
    "expressID": 1577,
    "type": "IFCQUANTITYAREA",
    "Name": "GrossSurfaceArea",
    "Description": null,
    "Unit": null,
    "AreaValue": 0
  },
  "1578": {
    "expressID": 1578,
    "type": "IFCQUANTITYVOLUME",
    "Name": "NetVolume",
    "Description": null,
    "Unit": null,
    "VolumeValue": 0.0377894778498915
  },
  "1579": {
    "expressID": 1579,
    "type": "IFCELEMENTQUANTITY",
    "GlobalId": "26mczajm1FA8mHm0Azvdmd",
    "OwnerHistory": 42,
    "Name": "BaseQuantities",
    "Description": null,
    "MethodOfMeasurement": null,
    "Quantities": [1577, 1578]
  },
  "1581": {
    "expressID": 1581,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "0mXTlur9LC5w7FFZepVDTK",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1574],
    "RelatingPropertyDefinition": 1579
  },
  "1585": {
    "expressID": 1585,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Slope",
    "Description": null,
    "NominalValue": 75.9011138412773,
    "Unit": null
  },
  "1586": {
    "expressID": 1586,
    "type": "IFCPROPERTYSET",
    "GlobalId": "2bSsgOLrHEjQgjk7pIa6Kp",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 922, 924, 1585]
  },
  "1588": {
    "expressID": 1588,
    "type": "IFCPROPERTYSET",
    "GlobalId": "372u2$5OH4ZOaWhbZ08_N5",
    "OwnerHistory": 42,
    "Name": "Pset_QuantityTakeOff",
    "Description": null,
    "HasProperties": [922]
  },
  "1590": {
    "expressID": 1590,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Reference",
    "Description": null,
    "NominalValue": "W250X73",
    "Unit": null
  },
  "1591": {
    "expressID": 1591,
    "type": "IFCPROPERTYSET",
    "GlobalId": "3GNXyfvS5F1hGUxnjWJvMQ",
    "OwnerHistory": 42,
    "Name": "Pset_ReinforcementBarPitchOfColumn",
    "Description": null,
    "HasProperties": [1590]
  },
  "1593": {
    "expressID": 1593,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "0I6Dwno3H0M9X6316O8oSv",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1574],
    "RelatingPropertyDefinition": 1586
  },
  "1596": {
    "expressID": 1596,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "3yOu1q_Eb6JQEA8Qfj1vLb",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1574],
    "RelatingPropertyDefinition": 1588
  },
  "1599": {
    "expressID": 1599,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "3dW$wXe2vDhuWfiOEQNaZd",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1574],
    "RelatingPropertyDefinition": 1591
  },
  "1602": {
    "expressID": 1602,
    "type": "IFCPROPERTYSET",
    "GlobalId": "2JB9ydsNr87eYwjU7_aXSC",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 924]
  },
  "1606": {
    "expressID": 1606,
    "type": "IFCGROUP",
    "GlobalId": "24bKYviez4sfXQ1fRhnyCk",
    "OwnerHistory": 42,
    "Name": "Modellgruppe:Reihengruppe 1:204797",
    "Description": null,
    "ObjectType": "Modellgruppe:Reihengruppe 1"
  },
  "1761": {
    "expressID": 1761,
    "type": "IFCVECTOR",
    "Orientation": 1759,
    "Magnitude": 304.8
  },
  "1778": {
    "expressID": 1778,
    "type": "IFCCOLUMNTYPE",
    "GlobalId": "24bKYviez4sfXQ3fRhn$p1",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73",
    "Description": null,
    "ApplicableOccurrence": null,
    "HasPropertySets": [1822],
    "RepresentationMaps": [1773, 1776],
    "Tag": "195136",
    "ElementType": null,
    "PredefinedType": "COLUMN"
  },
  "1794": {
    "expressID": 1794,
    "type": "IFCCOLUMN",
    "GlobalId": "24bKYviez4sfXQ1fRhn$p1",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73:204818",
    "Description": null,
    "ObjectType": "M_W Shapes-Column:W250X73",
    "ObjectPlacement": 1793,
    "Representation": 1788,
    "Tag": "204818"
  },
  "1797": {
    "expressID": 1797,
    "type": "IFCQUANTITYAREA",
    "Name": "GrossSurfaceArea",
    "Description": null,
    "Unit": null,
    "AreaValue": 0
  },
  "1798": {
    "expressID": 1798,
    "type": "IFCQUANTITYVOLUME",
    "Name": "NetVolume",
    "Description": null,
    "Unit": null,
    "VolumeValue": 0.0377894778498897
  },
  "1799": {
    "expressID": 1799,
    "type": "IFCELEMENTQUANTITY",
    "GlobalId": "3w9rFsERv7R8b9AmS_XiQo",
    "OwnerHistory": 42,
    "Name": "BaseQuantities",
    "Description": null,
    "MethodOfMeasurement": null,
    "Quantities": [1797, 1798]
  },
  "1801": {
    "expressID": 1801,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "0mlxUiwB54su6FosflAcFb",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1794],
    "RelatingPropertyDefinition": 1799
  },
  "1805": {
    "expressID": 1805,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Slope",
    "Description": null,
    "NominalValue": 75.9011138412772,
    "Unit": null
  },
  "1806": {
    "expressID": 1806,
    "type": "IFCPROPERTYSET",
    "GlobalId": "3CJ8jw9fX1GPVmnrp2877Z",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 922, 924, 1805]
  },
  "1808": {
    "expressID": 1808,
    "type": "IFCPROPERTYSET",
    "GlobalId": "2$BCjbu_bAEh$fMFz$pqJ3",
    "OwnerHistory": 42,
    "Name": "Pset_QuantityTakeOff",
    "Description": null,
    "HasProperties": [922]
  },
  "1810": {
    "expressID": 1810,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Reference",
    "Description": null,
    "NominalValue": "W250X73",
    "Unit": null
  },
  "1811": {
    "expressID": 1811,
    "type": "IFCPROPERTYSET",
    "GlobalId": "2JbjF4iMP8ihKDDWgYiBON",
    "OwnerHistory": 42,
    "Name": "Pset_ReinforcementBarPitchOfColumn",
    "Description": null,
    "HasProperties": [1810]
  },
  "1813": {
    "expressID": 1813,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "0wlFuu7Uz8LwIoMmHfGTTF",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1794],
    "RelatingPropertyDefinition": 1806
  },
  "1816": {
    "expressID": 1816,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "1ijCcXZK98AwCS0rwSoDM2",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1794],
    "RelatingPropertyDefinition": 1808
  },
  "1819": {
    "expressID": 1819,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "2vu2wdwqf9aw2SJtW45Shh",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1794],
    "RelatingPropertyDefinition": 1811
  },
  "1822": {
    "expressID": 1822,
    "type": "IFCPROPERTYSET",
    "GlobalId": "2XaFv6O9zCNBlEhqAptEY1",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 924]
  },
  "1826": {
    "expressID": 1826,
    "type": "IFCGROUP",
    "GlobalId": "24bKYviez4sfXQ1fRhn$p7",
    "OwnerHistory": 42,
    "Name": "Modellgruppe:Reihengruppe 1:204820",
    "Description": null,
    "ObjectType": "Modellgruppe:Reihengruppe 1"
  },
  "1981": {
    "expressID": 1981,
    "type": "IFCVECTOR",
    "Orientation": 1979,
    "Magnitude": 304.8
  },
  "1998": {
    "expressID": 1998,
    "type": "IFCCOLUMNTYPE",
    "GlobalId": "24bKYviez4sfXQ3fRhn$oR",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73",
    "Description": null,
    "ApplicableOccurrence": null,
    "HasPropertySets": [2042],
    "RepresentationMaps": [1993, 1996],
    "Tag": "195136",
    "ElementType": null,
    "PredefinedType": "COLUMN"
  },
  "2014": {
    "expressID": 2014,
    "type": "IFCCOLUMN",
    "GlobalId": "24bKYviez4sfXQ1fRhn$oR",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73:204872",
    "Description": null,
    "ObjectType": "M_W Shapes-Column:W250X73",
    "ObjectPlacement": 2013,
    "Representation": 2008,
    "Tag": "204872"
  },
  "2017": {
    "expressID": 2017,
    "type": "IFCQUANTITYAREA",
    "Name": "GrossSurfaceArea",
    "Description": null,
    "Unit": null,
    "AreaValue": 0
  },
  "2018": {
    "expressID": 2018,
    "type": "IFCQUANTITYVOLUME",
    "Name": "NetVolume",
    "Description": null,
    "Unit": null,
    "VolumeValue": 0.0377894778498907
  },
  "2019": {
    "expressID": 2019,
    "type": "IFCELEMENTQUANTITY",
    "GlobalId": "0Nvp6NJFv0dwEmOcSa_s5I",
    "OwnerHistory": 42,
    "Name": "BaseQuantities",
    "Description": null,
    "MethodOfMeasurement": null,
    "Quantities": [2017, 2018]
  },
  "2021": {
    "expressID": 2021,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "1XGxF385DA_P47dSxzwEDT",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2014],
    "RelatingPropertyDefinition": 2019
  },
  "2025": {
    "expressID": 2025,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Slope",
    "Description": null,
    "NominalValue": 75.9011138412773,
    "Unit": null
  },
  "2026": {
    "expressID": 2026,
    "type": "IFCPROPERTYSET",
    "GlobalId": "3gwOq7C5PBiuxG0xyQ1OGx",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 922, 924, 2025]
  },
  "2028": {
    "expressID": 2028,
    "type": "IFCPROPERTYSET",
    "GlobalId": "2hbvGfKCf9SPssuGK8CSjb",
    "OwnerHistory": 42,
    "Name": "Pset_QuantityTakeOff",
    "Description": null,
    "HasProperties": [922]
  },
  "2030": {
    "expressID": 2030,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Reference",
    "Description": null,
    "NominalValue": "W250X73",
    "Unit": null
  },
  "2031": {
    "expressID": 2031,
    "type": "IFCPROPERTYSET",
    "GlobalId": "2$UyoMoL59gB_lz_I4_vJu",
    "OwnerHistory": 42,
    "Name": "Pset_ReinforcementBarPitchOfColumn",
    "Description": null,
    "HasProperties": [2030]
  },
  "2033": {
    "expressID": 2033,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "00kufE8un2QOpluQVSYxU9",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2014],
    "RelatingPropertyDefinition": 2026
  },
  "2036": {
    "expressID": 2036,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "2HsRTecVn4_BRaExh5uFvy",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2014],
    "RelatingPropertyDefinition": 2028
  },
  "2039": {
    "expressID": 2039,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "2WTYxvcdD2wBb5YW8lMovy",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2014],
    "RelatingPropertyDefinition": 2031
  },
  "2042": {
    "expressID": 2042,
    "type": "IFCPROPERTYSET",
    "GlobalId": "3e6AVE26bEfeEvn0zeMncC",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 924]
  },
  "2046": {
    "expressID": 2046,
    "type": "IFCGROUP",
    "GlobalId": "24bKYviez4sfXQ1fRhn$oP",
    "OwnerHistory": 42,
    "Name": "Modellgruppe:Reihengruppe 1:204874",
    "Description": null,
    "ObjectType": "Modellgruppe:Reihengruppe 1"
  },
  "2201": {
    "expressID": 2201,
    "type": "IFCVECTOR",
    "Orientation": 2199,
    "Magnitude": 304.8
  },
  "2218": {
    "expressID": 2218,
    "type": "IFCCOLUMNTYPE",
    "GlobalId": "24bKYviez4sfXQ3fRhn$oO",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73",
    "Description": null,
    "ApplicableOccurrence": null,
    "HasPropertySets": [2262],
    "RepresentationMaps": [2213, 2216],
    "Tag": "195136",
    "ElementType": null,
    "PredefinedType": "COLUMN"
  },
  "2234": {
    "expressID": 2234,
    "type": "IFCCOLUMN",
    "GlobalId": "24bKYviez4sfXQ1fRhn$oO",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73:204875",
    "Description": null,
    "ObjectType": "M_W Shapes-Column:W250X73",
    "ObjectPlacement": 2233,
    "Representation": 2228,
    "Tag": "204875"
  },
  "2237": {
    "expressID": 2237,
    "type": "IFCQUANTITYAREA",
    "Name": "GrossSurfaceArea",
    "Description": null,
    "Unit": null,
    "AreaValue": 0
  },
  "2238": {
    "expressID": 2238,
    "type": "IFCQUANTITYVOLUME",
    "Name": "NetVolume",
    "Description": null,
    "Unit": null,
    "VolumeValue": 0.0377894778498902
  },
  "2239": {
    "expressID": 2239,
    "type": "IFCELEMENTQUANTITY",
    "GlobalId": "1l40WN1DL0NAD1G3Pjl569",
    "OwnerHistory": 42,
    "Name": "BaseQuantities",
    "Description": null,
    "MethodOfMeasurement": null,
    "Quantities": [2237, 2238]
  },
  "2241": {
    "expressID": 2241,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "2IH7lk_S1FbPp8Lrory__1",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2234],
    "RelatingPropertyDefinition": 2239
  },
  "2245": {
    "expressID": 2245,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Slope",
    "Description": null,
    "NominalValue": 75.9011138412773,
    "Unit": null
  },
  "2246": {
    "expressID": 2246,
    "type": "IFCPROPERTYSET",
    "GlobalId": "2Pcm7DwfnFWBPTaCrZgFAs",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 922, 924, 2245]
  },
  "2248": {
    "expressID": 2248,
    "type": "IFCPROPERTYSET",
    "GlobalId": "2iOjIeNCv5_BCZvWEtYQUt",
    "OwnerHistory": 42,
    "Name": "Pset_QuantityTakeOff",
    "Description": null,
    "HasProperties": [922]
  },
  "2250": {
    "expressID": 2250,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Reference",
    "Description": null,
    "NominalValue": "W250X73",
    "Unit": null
  },
  "2251": {
    "expressID": 2251,
    "type": "IFCPROPERTYSET",
    "GlobalId": "2SJU0BMA95rxuBJa8LfPHS",
    "OwnerHistory": 42,
    "Name": "Pset_ReinforcementBarPitchOfColumn",
    "Description": null,
    "HasProperties": [2250]
  },
  "2253": {
    "expressID": 2253,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "179S5McPTBU8b6H1ybo65w",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2234],
    "RelatingPropertyDefinition": 2246
  },
  "2256": {
    "expressID": 2256,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "1gtVWRk5LD3ueO6TU_zc90",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2234],
    "RelatingPropertyDefinition": 2248
  },
  "2259": {
    "expressID": 2259,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "1hHhDkKZnEfPCDPYk8hWwz",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2234],
    "RelatingPropertyDefinition": 2251
  },
  "2262": {
    "expressID": 2262,
    "type": "IFCPROPERTYSET",
    "GlobalId": "2q4kHGi1v8aflCWoiHlcma",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 924]
  },
  "2266": {
    "expressID": 2266,
    "type": "IFCGROUP",
    "GlobalId": "24bKYviez4sfXQ1fRhn$oU",
    "OwnerHistory": 42,
    "Name": "Modellgruppe:Reihengruppe 1:204877",
    "Description": null,
    "ObjectType": "Modellgruppe:Reihengruppe 1"
  },
  "2421": {
    "expressID": 2421,
    "type": "IFCVECTOR",
    "Orientation": 2419,
    "Magnitude": 304.8
  },
  "2438": {
    "expressID": 2438,
    "type": "IFCCOLUMNTYPE",
    "GlobalId": "24bKYviez4sfXQ3fRhn$oT",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73",
    "Description": null,
    "ApplicableOccurrence": null,
    "HasPropertySets": [2482],
    "RepresentationMaps": [2433, 2436],
    "Tag": "195136",
    "ElementType": null,
    "PredefinedType": "COLUMN"
  },
  "2454": {
    "expressID": 2454,
    "type": "IFCCOLUMN",
    "GlobalId": "24bKYviez4sfXQ1fRhn$oT",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73:204878",
    "Description": null,
    "ObjectType": "M_W Shapes-Column:W250X73",
    "ObjectPlacement": 2453,
    "Representation": 2448,
    "Tag": "204878"
  },
  "2457": {
    "expressID": 2457,
    "type": "IFCQUANTITYAREA",
    "Name": "GrossSurfaceArea",
    "Description": null,
    "Unit": null,
    "AreaValue": 0
  },
  "2458": {
    "expressID": 2458,
    "type": "IFCQUANTITYVOLUME",
    "Name": "NetVolume",
    "Description": null,
    "Unit": null,
    "VolumeValue": 0.0377894778498904
  },
  "2459": {
    "expressID": 2459,
    "type": "IFCELEMENTQUANTITY",
    "GlobalId": "3mvw9g6a1EP9NoTI0aZq_K",
    "OwnerHistory": 42,
    "Name": "BaseQuantities",
    "Description": null,
    "MethodOfMeasurement": null,
    "Quantities": [2457, 2458]
  },
  "2461": {
    "expressID": 2461,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "1P0rH5qmLDgfD2YPlITw6d",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2454],
    "RelatingPropertyDefinition": 2459
  },
  "2465": {
    "expressID": 2465,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Slope",
    "Description": null,
    "NominalValue": 75.9011138412773,
    "Unit": null
  },
  "2466": {
    "expressID": 2466,
    "type": "IFCPROPERTYSET",
    "GlobalId": "1llqUSbHD8pRl0FCt2zZj0",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 922, 924, 2465]
  },
  "2468": {
    "expressID": 2468,
    "type": "IFCPROPERTYSET",
    "GlobalId": "3slr3Sydn5CempZ_jq35Ec",
    "OwnerHistory": 42,
    "Name": "Pset_QuantityTakeOff",
    "Description": null,
    "HasProperties": [922]
  },
  "2470": {
    "expressID": 2470,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Reference",
    "Description": null,
    "NominalValue": "W250X73",
    "Unit": null
  },
  "2471": {
    "expressID": 2471,
    "type": "IFCPROPERTYSET",
    "GlobalId": "3C$IT8HOz2yfvQY64jhhSb",
    "OwnerHistory": 42,
    "Name": "Pset_ReinforcementBarPitchOfColumn",
    "Description": null,
    "HasProperties": [2470]
  },
  "2473": {
    "expressID": 2473,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "3UGmuQuL9FYANSz99CwTWb",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2454],
    "RelatingPropertyDefinition": 2466
  },
  "2476": {
    "expressID": 2476,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "1luwFlqsvCKfd$qFwXplCW",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2454],
    "RelatingPropertyDefinition": 2468
  },
  "2479": {
    "expressID": 2479,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "1mwazfA0PFaPzzw4kXH6T8",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2454],
    "RelatingPropertyDefinition": 2471
  },
  "2482": {
    "expressID": 2482,
    "type": "IFCPROPERTYSET",
    "GlobalId": "2jtrB6M_H4TPUscbn5PCpc",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 924]
  },
  "2486": {
    "expressID": 2486,
    "type": "IFCGROUP",
    "GlobalId": "24bKYviez4sfXQ1fRhn$o3",
    "OwnerHistory": 42,
    "Name": "Modellgruppe:Reihengruppe 1:204880",
    "Description": null,
    "ObjectType": "Modellgruppe:Reihengruppe 1"
  },
  "2508": {
    "expressID": 2508,
    "type": "IFCVECTOR",
    "Orientation": 2506,
    "Magnitude": 304.8
  },
  "2525": {
    "expressID": 2525,
    "type": "IFCCOLUMNTYPE",
    "GlobalId": "24bKYviez4sfXQ3fRhn$og",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73",
    "Description": null,
    "ApplicableOccurrence": null,
    "HasPropertySets": [2569],
    "RepresentationMaps": [2520, 2523],
    "Tag": "195136",
    "ElementType": null,
    "PredefinedType": "COLUMN"
  },
  "2541": {
    "expressID": 2541,
    "type": "IFCCOLUMN",
    "GlobalId": "24bKYviez4sfXQ1fRhn$og",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73:204921",
    "Description": null,
    "ObjectType": "M_W Shapes-Column:W250X73",
    "ObjectPlacement": 2540,
    "Representation": 2535,
    "Tag": "204921"
  },
  "2544": {
    "expressID": 2544,
    "type": "IFCQUANTITYAREA",
    "Name": "GrossSurfaceArea",
    "Description": null,
    "Unit": null,
    "AreaValue": 0
  },
  "2545": {
    "expressID": 2545,
    "type": "IFCQUANTITYVOLUME",
    "Name": "NetVolume",
    "Description": null,
    "Unit": null,
    "VolumeValue": 0.0377894778498908
  },
  "2546": {
    "expressID": 2546,
    "type": "IFCELEMENTQUANTITY",
    "GlobalId": "2lQRHyONTD8es5ykeME1wM",
    "OwnerHistory": 42,
    "Name": "BaseQuantities",
    "Description": null,
    "MethodOfMeasurement": null,
    "Quantities": [2544, 2545]
  },
  "2548": {
    "expressID": 2548,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "1EkxlUevT6$e6jJLuMMjLq",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2541],
    "RelatingPropertyDefinition": 2546
  },
  "2552": {
    "expressID": 2552,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Slope",
    "Description": null,
    "NominalValue": 75.9011138412773,
    "Unit": null
  },
  "2553": {
    "expressID": 2553,
    "type": "IFCPROPERTYSET",
    "GlobalId": "398tr6buL67xnlD5VLR8N1",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 922, 924, 2552]
  },
  "2555": {
    "expressID": 2555,
    "type": "IFCPROPERTYSET",
    "GlobalId": "3To3N1hsf0K8Tkxe2Rg36Y",
    "OwnerHistory": 42,
    "Name": "Pset_QuantityTakeOff",
    "Description": null,
    "HasProperties": [922]
  },
  "2557": {
    "expressID": 2557,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Reference",
    "Description": null,
    "NominalValue": "W250X73",
    "Unit": null
  },
  "2558": {
    "expressID": 2558,
    "type": "IFCPROPERTYSET",
    "GlobalId": "38SaXTPKv4UuP5dyWmOXX8",
    "OwnerHistory": 42,
    "Name": "Pset_ReinforcementBarPitchOfColumn",
    "Description": null,
    "HasProperties": [2557]
  },
  "2560": {
    "expressID": 2560,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "3FKZ967o93su0hgsLYJMWy",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2541],
    "RelatingPropertyDefinition": 2553
  },
  "2563": {
    "expressID": 2563,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "2GjcUygGr2_ubJMBUGE2XZ",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2541],
    "RelatingPropertyDefinition": 2555
  },
  "2566": {
    "expressID": 2566,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "0OH5IdwlTEExlL7gku83$V",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2541],
    "RelatingPropertyDefinition": 2558
  },
  "2569": {
    "expressID": 2569,
    "type": "IFCPROPERTYSET",
    "GlobalId": "01yR4g47r0qf_3c6h$CbK_",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 924]
  },
  "2573": {
    "expressID": 2573,
    "type": "IFCGROUP",
    "GlobalId": "24bKYviez4sfXQ1fRhn$oe",
    "OwnerHistory": 42,
    "Name": "Modellgruppe:Reihengruppe 1:204923",
    "Description": null,
    "ObjectType": "Modellgruppe:Reihengruppe 1"
  },
  "2595": {
    "expressID": 2595,
    "type": "IFCVECTOR",
    "Orientation": 2593,
    "Magnitude": 304.8
  },
  "2612": {
    "expressID": 2612,
    "type": "IFCCOLUMNTYPE",
    "GlobalId": "24bKYviez4sfXQ3fRhn$ol",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73",
    "Description": null,
    "ApplicableOccurrence": null,
    "HasPropertySets": [2656],
    "RepresentationMaps": [2607, 2610],
    "Tag": "195136",
    "ElementType": null,
    "PredefinedType": "COLUMN"
  },
  "2628": {
    "expressID": 2628,
    "type": "IFCCOLUMN",
    "GlobalId": "24bKYviez4sfXQ1fRhn$ol",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73:204924",
    "Description": null,
    "ObjectType": "M_W Shapes-Column:W250X73",
    "ObjectPlacement": 2627,
    "Representation": 2622,
    "Tag": "204924"
  },
  "2631": {
    "expressID": 2631,
    "type": "IFCQUANTITYAREA",
    "Name": "GrossSurfaceArea",
    "Description": null,
    "Unit": null,
    "AreaValue": 0
  },
  "2632": {
    "expressID": 2632,
    "type": "IFCQUANTITYVOLUME",
    "Name": "NetVolume",
    "Description": null,
    "Unit": null,
    "VolumeValue": 0.0377894778498903
  },
  "2633": {
    "expressID": 2633,
    "type": "IFCELEMENTQUANTITY",
    "GlobalId": "3xzEco3KfESRfdmQv$5Mr0",
    "OwnerHistory": 42,
    "Name": "BaseQuantities",
    "Description": null,
    "MethodOfMeasurement": null,
    "Quantities": [2631, 2632]
  },
  "2635": {
    "expressID": 2635,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "14CE0u18597w3ytSmlGWRQ",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2628],
    "RelatingPropertyDefinition": 2633
  },
  "2639": {
    "expressID": 2639,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Slope",
    "Description": null,
    "NominalValue": 75.9011138412773,
    "Unit": null
  },
  "2640": {
    "expressID": 2640,
    "type": "IFCPROPERTYSET",
    "GlobalId": "0UjsBGV9L09eepTBsey0Wq",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 922, 924, 2639]
  },
  "2642": {
    "expressID": 2642,
    "type": "IFCPROPERTYSET",
    "GlobalId": "2r5mocAZT1zxsqvCK_D8g2",
    "OwnerHistory": 42,
    "Name": "Pset_QuantityTakeOff",
    "Description": null,
    "HasProperties": [922]
  },
  "2644": {
    "expressID": 2644,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Reference",
    "Description": null,
    "NominalValue": "W250X73",
    "Unit": null
  },
  "2645": {
    "expressID": 2645,
    "type": "IFCPROPERTYSET",
    "GlobalId": "2C0ntHGfz7VOx4QfHU5Kyc",
    "OwnerHistory": 42,
    "Name": "Pset_ReinforcementBarPitchOfColumn",
    "Description": null,
    "HasProperties": [2644]
  },
  "2647": {
    "expressID": 2647,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "2mfnvGjLLF0fVcHNRq2jI_",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2628],
    "RelatingPropertyDefinition": 2640
  },
  "2650": {
    "expressID": 2650,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "0h$ptO1Hn6SBY08tCbmTba",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2628],
    "RelatingPropertyDefinition": 2642
  },
  "2653": {
    "expressID": 2653,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "09bLEwDojFNgJU2M_3EuQH",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2628],
    "RelatingPropertyDefinition": 2645
  },
  "2656": {
    "expressID": 2656,
    "type": "IFCPROPERTYSET",
    "GlobalId": "3QPxmK4Wv44xqH$mGC5H2r",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 924]
  },
  "2660": {
    "expressID": 2660,
    "type": "IFCGROUP",
    "GlobalId": "24bKYviez4sfXQ1fRhn$oj",
    "OwnerHistory": 42,
    "Name": "Modellgruppe:Reihengruppe 1:204926",
    "Description": null,
    "ObjectType": "Modellgruppe:Reihengruppe 1"
  },
  "2682": {
    "expressID": 2682,
    "type": "IFCVECTOR",
    "Orientation": 2680,
    "Magnitude": 304.8
  },
  "2699": {
    "expressID": 2699,
    "type": "IFCCOLUMNTYPE",
    "GlobalId": "24bKYviez4sfXQ3fRhn$oi",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73",
    "Description": null,
    "ApplicableOccurrence": null,
    "HasPropertySets": [2743],
    "RepresentationMaps": [2694, 2697],
    "Tag": "195136",
    "ElementType": null,
    "PredefinedType": "COLUMN"
  },
  "2715": {
    "expressID": 2715,
    "type": "IFCCOLUMN",
    "GlobalId": "24bKYviez4sfXQ1fRhn$oi",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73:204927",
    "Description": null,
    "ObjectType": "M_W Shapes-Column:W250X73",
    "ObjectPlacement": 2714,
    "Representation": 2709,
    "Tag": "204927"
  },
  "2718": {
    "expressID": 2718,
    "type": "IFCQUANTITYAREA",
    "Name": "GrossSurfaceArea",
    "Description": null,
    "Unit": null,
    "AreaValue": 0
  },
  "2719": {
    "expressID": 2719,
    "type": "IFCQUANTITYVOLUME",
    "Name": "NetVolume",
    "Description": null,
    "Unit": null,
    "VolumeValue": 0.0377894778498901
  },
  "2720": {
    "expressID": 2720,
    "type": "IFCELEMENTQUANTITY",
    "GlobalId": "1csFEhcrX36eta3$21NcVG",
    "OwnerHistory": 42,
    "Name": "BaseQuantities",
    "Description": null,
    "MethodOfMeasurement": null,
    "Quantities": [2718, 2719]
  },
  "2722": {
    "expressID": 2722,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "0CXvyXMuH7Evjqk$ho6n6q",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2715],
    "RelatingPropertyDefinition": 2720
  },
  "2726": {
    "expressID": 2726,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Slope",
    "Description": null,
    "NominalValue": 75.9011138412773,
    "Unit": null
  },
  "2727": {
    "expressID": 2727,
    "type": "IFCPROPERTYSET",
    "GlobalId": "3Ov7wLi6vDs9PrlFRvDsm5",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 922, 924, 2726]
  },
  "2729": {
    "expressID": 2729,
    "type": "IFCPROPERTYSET",
    "GlobalId": "1CvG6B365AZw5Zreaplhpg",
    "OwnerHistory": 42,
    "Name": "Pset_QuantityTakeOff",
    "Description": null,
    "HasProperties": [922]
  },
  "2731": {
    "expressID": 2731,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Reference",
    "Description": null,
    "NominalValue": "W250X73",
    "Unit": null
  },
  "2732": {
    "expressID": 2732,
    "type": "IFCPROPERTYSET",
    "GlobalId": "0GJYDlu4z8guiLNp36JKmR",
    "OwnerHistory": 42,
    "Name": "Pset_ReinforcementBarPitchOfColumn",
    "Description": null,
    "HasProperties": [2731]
  },
  "2734": {
    "expressID": 2734,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "2xzdaXN7v1uQPwUQOFwmYR",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2715],
    "RelatingPropertyDefinition": 2727
  },
  "2737": {
    "expressID": 2737,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "0Vcm6YJu184PnZ0TrEMyrq",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2715],
    "RelatingPropertyDefinition": 2729
  },
  "2740": {
    "expressID": 2740,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "2QTddUV8rB$xFFlMHHEN2q",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2715],
    "RelatingPropertyDefinition": 2732
  },
  "2743": {
    "expressID": 2743,
    "type": "IFCPROPERTYSET",
    "GlobalId": "2vMoX3pyT9igGPA9px4zfA",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 924]
  },
  "2747": {
    "expressID": 2747,
    "type": "IFCGROUP",
    "GlobalId": "24bKYviez4sfXQ1fRhn$nI",
    "OwnerHistory": 42,
    "Name": "Modellgruppe:Reihengruppe 1:204929",
    "Description": null,
    "ObjectType": "Modellgruppe:Reihengruppe 1"
  },
  "2769": {
    "expressID": 2769,
    "type": "IFCVECTOR",
    "Orientation": 2767,
    "Magnitude": 304.8
  },
  "2786": {
    "expressID": 2786,
    "type": "IFCCOLUMNTYPE",
    "GlobalId": "24bKYviez4sfXQ3fRhn$nH",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73",
    "Description": null,
    "ApplicableOccurrence": null,
    "HasPropertySets": [2830],
    "RepresentationMaps": [2781, 2784],
    "Tag": "195136",
    "ElementType": null,
    "PredefinedType": "COLUMN"
  },
  "2802": {
    "expressID": 2802,
    "type": "IFCCOLUMN",
    "GlobalId": "24bKYviez4sfXQ1fRhn$nH",
    "OwnerHistory": 42,
    "Name": "M_W Shapes-Column:W250X73:204930",
    "Description": null,
    "ObjectType": "M_W Shapes-Column:W250X73",
    "ObjectPlacement": 2801,
    "Representation": 2796,
    "Tag": "204930"
  },
  "2805": {
    "expressID": 2805,
    "type": "IFCQUANTITYAREA",
    "Name": "GrossSurfaceArea",
    "Description": null,
    "Unit": null,
    "AreaValue": 0
  },
  "2806": {
    "expressID": 2806,
    "type": "IFCQUANTITYVOLUME",
    "Name": "NetVolume",
    "Description": null,
    "Unit": null,
    "VolumeValue": 0.03778947784989
  },
  "2807": {
    "expressID": 2807,
    "type": "IFCELEMENTQUANTITY",
    "GlobalId": "0C1YosOzPF$Q2q5qhLBd6N",
    "OwnerHistory": 42,
    "Name": "BaseQuantities",
    "Description": null,
    "MethodOfMeasurement": null,
    "Quantities": [2805, 2806]
  },
  "2809": {
    "expressID": 2809,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "1LOe0bJxn7$uBmXub$NQvq",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2802],
    "RelatingPropertyDefinition": 2807
  },
  "2813": {
    "expressID": 2813,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Slope",
    "Description": null,
    "NominalValue": 75.9011138412773,
    "Unit": null
  },
  "2814": {
    "expressID": 2814,
    "type": "IFCPROPERTYSET",
    "GlobalId": "02ebIgmTDCE85CQEkl2UpN",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 922, 924, 2813]
  },
  "2816": {
    "expressID": 2816,
    "type": "IFCPROPERTYSET",
    "GlobalId": "1nGCwEinv1qgn7LlflqTKc",
    "OwnerHistory": 42,
    "Name": "Pset_QuantityTakeOff",
    "Description": null,
    "HasProperties": [922]
  },
  "2818": {
    "expressID": 2818,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Reference",
    "Description": null,
    "NominalValue": "W250X73",
    "Unit": null
  },
  "2819": {
    "expressID": 2819,
    "type": "IFCPROPERTYSET",
    "GlobalId": "0wVDukTuv0cPQT2Byuzpt9",
    "OwnerHistory": 42,
    "Name": "Pset_ReinforcementBarPitchOfColumn",
    "Description": null,
    "HasProperties": [2818]
  },
  "2821": {
    "expressID": 2821,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "1rQeDEWP16JB73KBZi6h5I",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2802],
    "RelatingPropertyDefinition": 2814
  },
  "2824": {
    "expressID": 2824,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "3HIRxO3cD1BvcjRcrTVvgp",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2802],
    "RelatingPropertyDefinition": 2816
  },
  "2827": {
    "expressID": 2827,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "3n_QMuQATEAu$mUqF0VxAO",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2802],
    "RelatingPropertyDefinition": 2819
  },
  "2830": {
    "expressID": 2830,
    "type": "IFCPROPERTYSET",
    "GlobalId": "1NSyNQcZj95BdPfgtXVYpP",
    "OwnerHistory": 42,
    "Name": "Pset_ColumnCommon",
    "Description": null,
    "HasProperties": [288, 924]
  },
  "2834": {
    "expressID": 2834,
    "type": "IFCGROUP",
    "GlobalId": "24bKYviez4sfXQ1fRhn$nN",
    "OwnerHistory": 42,
    "Name": "Modellgruppe:Reihengruppe 1:204932",
    "Description": null,
    "ObjectType": "Modellgruppe:Reihengruppe 1"
  },
  "2836": {
    "expressID": 2836,
    "type": "IFCRELASSIGNSTOGROUP",
    "GlobalId": "24bKYviez4sfXQ1fVhnyCo",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [911],
    "RelatedObjectsType": null,
    "RelatingGroup": 945
  },
  "2840": {
    "expressID": 2840,
    "type": "IFCRELASSIGNSTOGROUP",
    "GlobalId": "24bKYviez4sfXQ1fVhnyCq",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1134],
    "RelatedObjectsType": null,
    "RelatingGroup": 1166
  },
  "2844": {
    "expressID": 2844,
    "type": "IFCRELASSIGNSTOGROUP",
    "GlobalId": "24bKYviez4sfXQ1fVhnyCh",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1354],
    "RelatedObjectsType": null,
    "RelatingGroup": 1386
  },
  "2848": {
    "expressID": 2848,
    "type": "IFCRELASSIGNSTOGROUP",
    "GlobalId": "24bKYviez4sfXQ1fVhnyCk",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1574],
    "RelatedObjectsType": null,
    "RelatingGroup": 1606
  },
  "2852": {
    "expressID": 2852,
    "type": "IFCRELASSIGNSTOGROUP",
    "GlobalId": "24bKYviez4sfXQ1fVhn$p7",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1794],
    "RelatedObjectsType": null,
    "RelatingGroup": 1826
  },
  "2856": {
    "expressID": 2856,
    "type": "IFCRELASSIGNSTOGROUP",
    "GlobalId": "24bKYviez4sfXQ1fVhn$oP",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2014],
    "RelatedObjectsType": null,
    "RelatingGroup": 2046
  },
  "2860": {
    "expressID": 2860,
    "type": "IFCRELASSIGNSTOGROUP",
    "GlobalId": "24bKYviez4sfXQ1fVhn$oU",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2234],
    "RelatedObjectsType": null,
    "RelatingGroup": 2266
  },
  "2864": {
    "expressID": 2864,
    "type": "IFCRELASSIGNSTOGROUP",
    "GlobalId": "24bKYviez4sfXQ1fVhn$o3",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2454],
    "RelatedObjectsType": null,
    "RelatingGroup": 2486
  },
  "2868": {
    "expressID": 2868,
    "type": "IFCRELASSIGNSTOGROUP",
    "GlobalId": "24bKYviez4sfXQ1fVhn$oe",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2541],
    "RelatedObjectsType": null,
    "RelatingGroup": 2573
  },
  "2872": {
    "expressID": 2872,
    "type": "IFCRELASSIGNSTOGROUP",
    "GlobalId": "24bKYviez4sfXQ1fVhn$oj",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2628],
    "RelatedObjectsType": null,
    "RelatingGroup": 2660
  },
  "2876": {
    "expressID": 2876,
    "type": "IFCRELASSIGNSTOGROUP",
    "GlobalId": "24bKYviez4sfXQ1fVhn$nI",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2715],
    "RelatedObjectsType": null,
    "RelatingGroup": 2747
  },
  "2880": {
    "expressID": 2880,
    "type": "IFCRELASSIGNSTOGROUP",
    "GlobalId": "24bKYviez4sfXQ1fVhn$nN",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2802],
    "RelatedObjectsType": null,
    "RelatingGroup": 2834
  },
  "2884": {
    "expressID": 2884,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Name",
    "Description": null,
    "NominalValue": "Level 1",
    "Unit": null
  },
  "2885": {
    "expressID": 2885,
    "type": "IFCPROPERTYSET",
    "GlobalId": "0XGOoYeb96QOeVJcvcQvgz",
    "OwnerHistory": 42,
    "Name": "Pset_AirSideSystemInformation",
    "Description": null,
    "HasProperties": [2884]
  },
  "2887": {
    "expressID": 2887,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "AboveGround",
    "Description": null,
    "NominalValue": "U",
    "Unit": null
  },
  "2888": {
    "expressID": 2888,
    "type": "IFCPROPERTYSET",
    "GlobalId": "1vK3KfqgSHqv5Y2_o6FnIY",
    "OwnerHistory": 42,
    "Name": "Pset_BuildingStoreyCommon",
    "Description": null,
    "HasProperties": [2887]
  },
  "2890": {
    "expressID": 2890,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Name",
    "Description": null,
    "NominalValue": "Level 1",
    "Unit": null
  },
  "2891": {
    "expressID": 2891,
    "type": "IFCPROPERTYSET",
    "GlobalId": "2SBjpb9CzAb9YKubYPxuak",
    "OwnerHistory": 42,
    "Name": "Pset_ProductRequirements",
    "Description": null,
    "HasProperties": [2890]
  },
  "2893": {
    "expressID": 2893,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "3wr$BG_150$xjrfnrOTDCi",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [141],
    "RelatingPropertyDefinition": 2885
  },
  "2897": {
    "expressID": 2897,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "3mD8nW1DT6BfCKAYms69K$",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [141],
    "RelatingPropertyDefinition": 2888
  },
  "2900": {
    "expressID": 2900,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "2x7w31On9A4eXWJxBK5zLY",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [141],
    "RelatingPropertyDefinition": 2891
  },
  "2903": {
    "expressID": 2903,
    "type": "IFCRELCONTAINEDINSPATIALSTRUCTURE",
    "GlobalId": "1vK3KfqgSHqv5Y0066FnIY",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedElements": [
      187, 373, 476, 553, 911, 1134, 1354, 1574, 1794, 2014, 2234, 2454, 2541,
      2628, 2715, 2802
    ],
    "RelatingStructure": 141
  },
  "2922": {
    "expressID": 2922,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Name",
    "Description": null,
    "NominalValue": "Level 2",
    "Unit": null
  },
  "2923": {
    "expressID": 2923,
    "type": "IFCPROPERTYSET",
    "GlobalId": "1jGOtnbQj3Pu1GmjL3RM9C",
    "OwnerHistory": 42,
    "Name": "Pset_AirSideSystemInformation",
    "Description": null,
    "HasProperties": [2922]
  },
  "2925": {
    "expressID": 2925,
    "type": "IFCPROPERTYSET",
    "GlobalId": "14lOI8vZuHqv6B2_o6Fnc4",
    "OwnerHistory": 42,
    "Name": "Pset_BuildingStoreyCommon",
    "Description": null,
    "HasProperties": [2887]
  },
  "2927": {
    "expressID": 2927,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "Name",
    "Description": null,
    "NominalValue": "Level 2",
    "Unit": null
  },
  "2928": {
    "expressID": 2928,
    "type": "IFCPROPERTYSET",
    "GlobalId": "0i53IzIr5CWwCj0ozgBM$n",
    "OwnerHistory": 42,
    "Name": "Pset_ProductRequirements",
    "Description": null,
    "HasProperties": [2927]
  },
  "2930": {
    "expressID": 2930,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "1AkvnMjEHEQQTt6QURrY2x",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [147],
    "RelatingPropertyDefinition": 2923
  },
  "2934": {
    "expressID": 2934,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "33V_w5Fw51OPTpJQJHrK9o",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [147],
    "RelatingPropertyDefinition": 2925
  },
  "2937": {
    "expressID": 2937,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "02ymS3jS915RxG9rsJJA0q",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [147],
    "RelatingPropertyDefinition": 2928
  },
  "2940": {
    "expressID": 2940,
    "type": "IFCRELCONTAINEDINSPATIALSTRUCTURE",
    "GlobalId": "14lOI8vZuHqv6B0066Fnc4",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedElements": [621],
    "RelatingStructure": 147
  },
  "2944": {
    "expressID": 2944,
    "type": "IFCRELAGGREGATES",
    "GlobalId": "2NUrbbTZP1Thslj0xPlATY",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatingObject": 121,
    "RelatedObjects": [151]
  },
  "2948": {
    "expressID": 2948,
    "type": "IFCRELAGGREGATES",
    "GlobalId": "29WxQXKE1Cmh8VU4Rn30f0",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatingObject": 151,
    "RelatedObjects": [132]
  },
  "2952": {
    "expressID": 2952,
    "type": "IFCRELAGGREGATES",
    "GlobalId": "3ioAY2VOL1QOEtMGyzl4Rh",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatingObject": 132,
    "RelatedObjects": [141, 147]
  },
  "2957": {
    "expressID": 2957,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "NumberOfStoreys",
    "Description": null,
    "NominalValue": 2,
    "Unit": null
  },
  "2958": {
    "expressID": 2958,
    "type": "IFCPROPERTYSINGLEVALUE",
    "Name": "IsLandmarked",
    "Description": null,
    "NominalValue": "U",
    "Unit": null
  },
  "2959": {
    "expressID": 2959,
    "type": "IFCPROPERTYSET",
    "GlobalId": "3ioAY2VOL1QOEtKkSzl4Rh",
    "OwnerHistory": 42,
    "Name": "Pset_BuildingCommon",
    "Description": null,
    "HasProperties": [2957, 2958]
  },
  "2961": {
    "expressID": 2961,
    "type": "IFCRELDEFINESBYPROPERTIES",
    "GlobalId": "25kh7S$ArFCOnddmUgrGBT",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [132],
    "RelatingPropertyDefinition": 2959
  },
  "2965": {
    "expressID": 2965,
    "type": "IFCRELASSOCIATESMATERIAL",
    "GlobalId": "3wMY8Q7gfFTB2rGGORf68o",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [187],
    "RelatingMaterial": 274
  },
  "2968": {
    "expressID": 2968,
    "type": "IFCRELASSOCIATESMATERIAL",
    "GlobalId": "3YNm2K_TTF6xdwo6Fzg0d_",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [373],
    "RelatingMaterial": 405
  },
  "2971": {
    "expressID": 2971,
    "type": "IFCRELASSOCIATESMATERIAL",
    "GlobalId": "0_DnMerff3pwx5G3jCiSnV",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [406],
    "RelatingMaterial": 402
  },
  "2974": {
    "expressID": 2974,
    "type": "IFCRELASSOCIATESMATERIAL",
    "GlobalId": "0poDM2OTP5CxQLcp9T$O88",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [476],
    "RelatingMaterial": 493
  },
  "2977": {
    "expressID": 2977,
    "type": "IFCRELASSOCIATESMATERIAL",
    "GlobalId": "1sWEASqzXADuxAPh4cHeN$",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [553],
    "RelatingMaterial": 570
  },
  "2980": {
    "expressID": 2980,
    "type": "IFCRELASSOCIATESMATERIAL",
    "GlobalId": "3Y6P_fRCD6186L9cm8wuYl",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [621],
    "RelatingMaterial": 661
  },
  "2983": {
    "expressID": 2983,
    "type": "IFCRELASSOCIATESMATERIAL",
    "GlobalId": "302GvchS9AIuBEe9bDvEjS",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [202, 624],
    "RelatingMaterial": 268
  },
  "2987": {
    "expressID": 2987,
    "type": "IFCRELASSOCIATESMATERIAL",
    "GlobalId": "1KtKuKtrj7QPkNyNh99h2V",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [
      883, 911, 1118, 1134, 1338, 1354, 1558, 1574, 1778, 1794, 1998, 2014,
      2218, 2234, 2438, 2454, 2525, 2541, 2612, 2628, 2699, 2715, 2786, 2802
    ],
    "RelatingMaterial": 885
  },
  "3013": {
    "expressID": 3013,
    "type": "IFCRELDEFINESBYTYPE",
    "GlobalId": "1zv93TJav3mAcVoUHeZ_pQ",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [187],
    "RelatingType": 202
  },
  "3016": {
    "expressID": 3016,
    "type": "IFCRELDEFINESBYTYPE",
    "GlobalId": "2cvtdtZs5BZBjBTp9zqIPX",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [373, 476, 553],
    "RelatingType": 406
  },
  "3019": {
    "expressID": 3019,
    "type": "IFCRELDEFINESBYTYPE",
    "GlobalId": "2_JJJDzWX5mPjJL9gCbyp6",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [621],
    "RelatingType": 624
  },
  "3022": {
    "expressID": 3022,
    "type": "IFCRELDEFINESBYTYPE",
    "GlobalId": "0Wpzm2FLT6ReB57sAzjuB_",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [911],
    "RelatingType": 883
  },
  "3025": {
    "expressID": 3025,
    "type": "IFCRELDEFINESBYTYPE",
    "GlobalId": "2ib9DW$Dv9YgteQfVoe0gw",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1134],
    "RelatingType": 1118
  },
  "3028": {
    "expressID": 3028,
    "type": "IFCRELDEFINESBYTYPE",
    "GlobalId": "3fhMSiZUDCrh7dUmqzV5Sm",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1354],
    "RelatingType": 1338
  },
  "3031": {
    "expressID": 3031,
    "type": "IFCRELDEFINESBYTYPE",
    "GlobalId": "3iR5$q0mfAVgutS5_D2zfm",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1574],
    "RelatingType": 1558
  },
  "3034": {
    "expressID": 3034,
    "type": "IFCRELDEFINESBYTYPE",
    "GlobalId": "2vcxaruJTB1ukkYPz_qQiI",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [1794],
    "RelatingType": 1778
  },
  "3037": {
    "expressID": 3037,
    "type": "IFCRELDEFINESBYTYPE",
    "GlobalId": "15YskedkfDtQDt3_$AxdaN",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2014],
    "RelatingType": 1998
  },
  "3040": {
    "expressID": 3040,
    "type": "IFCRELDEFINESBYTYPE",
    "GlobalId": "1NzyO_v0v4RfbXYnKXoW5P",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2234],
    "RelatingType": 2218
  },
  "3043": {
    "expressID": 3043,
    "type": "IFCRELDEFINESBYTYPE",
    "GlobalId": "3V$UMRQrrDCg1DGS6ciiQ1",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2454],
    "RelatingType": 2438
  },
  "3046": {
    "expressID": 3046,
    "type": "IFCRELDEFINESBYTYPE",
    "GlobalId": "3MxrRGYUDF4P9YD2IMM$uh",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2541],
    "RelatingType": 2525
  },
  "3049": {
    "expressID": 3049,
    "type": "IFCRELDEFINESBYTYPE",
    "GlobalId": "1KM7dfQb12T9$fXfvtMW2q",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2628],
    "RelatingType": 2612
  },
  "3052": {
    "expressID": 3052,
    "type": "IFCRELDEFINESBYTYPE",
    "GlobalId": "3KW5LiGXPDL9eTs7Qz4vEn",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2715],
    "RelatingType": 2699
  },
  "3055": {
    "expressID": 3055,
    "type": "IFCRELDEFINESBYTYPE",
    "GlobalId": "0I2IJxO4D6E9lU2yxMeSS$",
    "OwnerHistory": 42,
    "Name": null,
    "Description": null,
    "RelatedObjects": [2802],
    "RelatingType": 2786
  },
  "3058": {
    "expressID": 3058,
    "type": "IFCRELCONNECTSPATHELEMENTS",
    "GlobalId": "0Aizq_eVL4XwgUz84zCsQn",
    "OwnerHistory": 42,
    "Name": "24bKYviez4sfXQ1fRhnyTy|24bKYviez4sfXQ1fRhnyTd",
    "Description": "Structural",
    "ConnectionGeometry": null,
    "RelatingElement": 373,
    "RelatedElement": 476,
    "RelatingPriorities": [],
    "RelatedPriorities": [],
    "RelatedConnectionType": "ATSTART",
    "RelatingConnectionType": "ATEND"
  },
  "3063": {
    "expressID": 3063,
    "type": "IFCRELCONNECTSPATHELEMENTS",
    "GlobalId": "1sPkCu7Nr4shdOPB2DKGK1",
    "OwnerHistory": 42,
    "Name": "24bKYviez4sfXQ1fRhnyTd|24bKYviez4sfXQ1fRhnyTg",
    "Description": "Structural",
    "ConnectionGeometry": null,
    "RelatingElement": 476,
    "RelatedElement": 553,
    "RelatingPriorities": [],
    "RelatedPriorities": [],
    "RelatedConnectionType": "ATSTART",
    "RelatingConnectionType": "ATEND"
  },
  "3068": {
    "expressID": 3068,
    "type": "IFCPRESENTATIONLAYERASSIGNMENT",
    "Name": "A-FLOR-____-OTLN",
    "Description": null,
    "AssignedItems": [175, 616, 634],
    "Identifier": null
  },
  "3073": {
    "expressID": 3073,
    "type": "IFCPRESENTATIONLAYERASSIGNMENT",
    "Name": "L-SITE-WALL-OTLN",
    "Description": null,
    "AssignedItems": [330, 367, 440, 470, 519, 547],
    "Identifier": null
  },
  "3081": {
    "expressID": 3081,
    "type": "IFCPRESENTATIONLAYERASSIGNMENT",
    "Name": "S-COLS-____-OTLN",
    "Description": null,
    "AssignedItems": [
      859, 874, 899, 903, 1095, 1110, 1122, 1126, 1315, 1330, 1342, 1346, 1535,
      1550, 1562, 1566, 1755, 1770, 1782, 1786, 1975, 1990, 2002, 2006, 2195,
      2210, 2222, 2226, 2415, 2430, 2442, 2446, 2502, 2517, 2529, 2533, 2589,
      2604, 2616, 2620, 2676, 2691, 2703, 2707, 2763, 2778, 2790, 2794
    ],
    "Identifier": null
  },
  "coordinationMatrix": [
    1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 9.725692290658442, -4.027477646536262,
    -11.900045046993156, 1
  ],
  "globalHeight": 0
}
