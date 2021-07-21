import {
  ComputedParam,
  Details,
  GramPerPsgrKm,
  Internals,
  MioPsgrKm,
  MioTons,
  MrdEuro,
  ParamsBase,
  Percent,
  Sources,
  TsdPeople,
  TWh,
  Unit,
  WritableParam,
} from "../types"
import {
  bmvi2020VerkehrInZahlen,
  fraunhoferISE2020ElectricityGeneration,
  uba2020DeutscheTreibhausgasEmissionen,
  ubaEmissionenDesVerkehrs,
  umweltrat2020Umweltgutachten,
  vdv2019Statistik,
} from "./Sources"

const co2budget = new WritableParam({
  unit: "MioTons",
  initialValue: 6700,
  sources: [umweltrat2020Umweltgutachten],
  details: /*html*/ ``,
  internals: /*html*/ ``,
})

const co2emissionsIndustry = new WritableParam({
  unit: "MioTons",
  initialValue: 186.793,
  sources: [uba2020DeutscheTreibhausgasEmissionen],
})

const co2emissionsStreetVehicles = new ComputedParam({
  unit: "MioTons",
  valueGetter(data: ParamsBase): MioTons {
    const carNonrenewable: MioPsgrKm = data.carUsage * (1 - data.carRenewablePercentage / 100)
    const co2emissionsCars: MioTons = (carNonrenewable * data.carEmissionFactor) / 1000000
    const co2emissionsTrucks: MioTons = 14.4
    return co2emissionsCars + co2emissionsTrucks
  },
  sources: [vdv2019Statistik, ubaEmissionenDesVerkehrs],
  details: /*html*/ ``,
  internals: /*html*/ `
    TODO: #72 Source [ubaEmissionenDesVerkehrs] claims 47,4 MioTons emissions by trucks per year in 2019.
    We use 14.4 MioTons to adjust to the correct total emissions street sehicles.`,
})

const co2emissionsMobility = new ComputedParam({
  unit: "MioTons",
  valueGetter(data: ParamsBase): MioTons {
    return (
      data.co2emissionsStreetVehicles +
      (data.publicLocalCapacity * (65 as GramPerPsgrKm)) / 1000000 +
      (data.publicNationalCapacity * (32 as GramPerPsgrKm)) / 1000000 +
      (data.airDomesticUsage * (222 as GramPerPsgrKm)) / 1000000 +
      (1.641 as MioTons)
    )
  },
  sources: [vdv2019Statistik, uba2020DeutscheTreibhausgasEmissionen],
  details: /*html*/ ``,
  internals: /*html*/ `
    <p>[vdv2019Statistik] states: 65 g/Pkm for local public transport, 32 g/Pkm for inter-city public transport, 230 g/Pkm for domestic air traffic.</p>
    <p>From [uba2020DeutscheTreibhausgasEmissionen] we calculate backward 222 g/Pkm for domestic air traffic. (currently used)</p>
    <p>[uba2020DeutscheTreibhausgasEmissionen] states 1.641 Mio t CO2e emissions by costal and inland water transport.</p>
    <p>Unit conversion: 1 MioPsgrKm * 1 GramPerPsgrKm = 1 MioGram = 1 Ton. Target unit: MioTons. Devide by 1000000</p>
    `,
})

const co2emissionsBuildings = new ComputedParam({
  unit: "MioTons",
  valueGetter(data: ParamsBase): MioTons {
    return (
      data.buildingsSourceBio * 0 +
      data.buildingsSourceGas * 0.247 + // https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085
      data.buildingsSourceOil * 0.318 + // https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085
      data.buildingsSourceTele * 0.16
    ) // from https://www.klimaneutral-handeln.de/php/kompens-berechnen.php#rechner
  },
  // TODO: #72 Source claims 123.461 MioTons per year in 2019. Sums to 168.6 MioTons.
  //shouldInitiallyBe: 123.461 as MioTons,
  sources: [uba2020DeutscheTreibhausgasEmissionen],
  details: /*html*/ ``,
  internals: /*html*/ `shouldInitiallyBe: 123.461 according to [uba2020DeutscheTreibhausgasEmissionen].`,
})

const co2emissionsAgriculture = new WritableParam({
  unit: "MioTons",
  initialValue: 67.936,
  sources: [uba2020DeutscheTreibhausgasEmissionen],
  details: /*html*/ ``,
  internals: /*html*/ ``,
})

const co2emissionsOthers = new WritableParam({
  unit: "MioTons",
  initialValue: 9.243,
  sources: [uba2020DeutscheTreibhausgasEmissionen],
  details: /*html*/ ``,
  internals: /*html*/ ``,
})

const co2emissionsEnergy = new ComputedParam({
  unit: "MioTons",
  valueGetter(data: ParamsBase): MioTons {
    // should sum up to 220 in 2020
    // factors from https://www.rensmart.com/Calculators/KWH-to-CO2 and @thomas-olszamowski
    return (
      data.electricityGas * 0.399 +
      data.electricitySolar * 0.058 +
      data.electricityWind * 0.005 +
      data.electricityWater * 0.02 +
      data.electricityHardCoal * 0.835 +
      data.electricityBrownCoal * 1.137 +
      data.electricityBiomass * 0 + // TODO find correct factor (no source found)
      data.electricityNuclear * 0.005
    )
  },
  sources: [],
  details: /*html*/ ``,
  internals: /*html*/ ``,
})

const co2emissions = new ComputedParam({
  unit: "MioTons",
  valueGetter(data: ParamsBase): MioTons {
    return (
      data.co2emissionsEnergy +
      data.co2emissionsIndustry +
      data.co2emissionsMobility +
      data.co2emissionsBuildings +
      data.co2emissionsAgriculture +
      data.co2emissionsOthers
    )
  },
  details: /*html*/ ``,
  internals: /*html*/ ``,
})

const electricityDemand = new WritableParam({
  unit: "TWh",
  initialValue: 480.54,
  sources: [fraunhoferISE2020ElectricityGeneration],
  details: /*html*/ ``,
  internals: /*html*/ ``,
})

const electricitySolar = new WritableParam({
  unit: "TWh",
  initialValue: 51.42,
  sources: [fraunhoferISE2020ElectricityGeneration],
  details: /*html*/ ``,
  internals: /*html*/ ``,
})

const electricityWind = new WritableParam({
  unit: "TWh",
  initialValue: 131.85,
  sources: [fraunhoferISE2020ElectricityGeneration],
  details: /*html*/ ``,
  internals: /*html*/ ``,
})

const electricityWindOnshoreMaxNew = new WritableParam({
  unit: "TWh",
  initialValue: 6.0,
  sources: [fraunhoferISE2020ElectricityGeneration],
  details: /*html*/ ``,
  internals: /*html*/ ``,
})

const electricityWater = new WritableParam({
  unit: "TWh",
  initialValue: 14.99,
  sources: [fraunhoferISE2020ElectricityGeneration],
  details: /*html*/ ``,
  internals: /*html*/ ``,
})

const electricityBiomass = new WritableParam({
  unit: "TWh",
  initialValue: 43.19,
  sources: [fraunhoferISE2020ElectricityGeneration],
  details: /*html*/ ``,
  internals: /*html*/ ``,
})

const electricityNuclear = new WritableParam({
  unit: "TWh",
  initialValue: 60.91,
  sources: [fraunhoferISE2020ElectricityGeneration],
  details: /*html*/ ``,
  internals: /*html*/ ``,
})

const electricityHardCoal = new WritableParam({
  unit: "TWh",
  initialValue: 35.46,
  sources: [fraunhoferISE2020ElectricityGeneration],
  details: /*html*/ ``,
  internals: /*html*/ ``,
})

const electricityBrownCoal = new WritableParam({
  unit: "TWh",
  initialValue: 82.13,
  sources: [fraunhoferISE2020ElectricityGeneration],
  details: /*html*/ ``,
  internals: /*html*/ ``,
})

const electricityCoal = new ComputedParam({
  unit: "TWh",
  valueGetter(data: ParamsBase): number {
    return data.electricityHardCoal + data.electricityBrownCoal
  },
  details: /*html*/ ``,
  internals: /*html*/ ``,
})

const electricityGas = new ComputedParam({
  unit: "TWh",
  valueGetter(data: ParamsBase): number {
    return (
      data.electricityDemand -
      data.electricitySolar -
      data.electricityWind -
      data.electricityWater -
      data.electricityHardCoal -
      data.electricityBrownCoal -
      data.electricityBiomass -
      data.electricityNuclear
    )
  },
  details: /*html*/ ``,
  internals: /*html*/ ``,
})

const carEmissionFactor = new WritableParam({
  unit: "GramPerPsgrKm",
  initialValue: 160 as GramPerPsgrKm,
  sources: [vdv2019Statistik],
  details: /*html*/ ``,
  internals: /*html*/ `[vdv2019Statistik] page 11 would lead to about 160 g/Pkm`,
})

const carUsage = new WritableParam({
  unit: "MioPsgrKm",
  initialValue: 917000 as MioPsgrKm,
  sources: [bmvi2020VerkehrInZahlen],
  details: /*html*/ ``,
  internals: /*html*/ ``,
})

const carRenewablePercentage = new WritableParam({
  unit: "Percent",
  initialValue: 1 as Percent,
  sources: [],
  details: /*html*/ ``,
  internals: /*html*/ `https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/ (very rough estimate)`,
})

const publicLocalUsage = new WritableParam({
  unit: "MioPsgrKm",
  initialValue: 112600 as MioPsgrKm,
  sources: [bmvi2020VerkehrInZahlen],
  details: /*html*/ ``,
  internals: /*html*/ ``,
})

const publicLocalCapacity = new WritableParam({
  unit: "MioPsgrKm",
  initialValue: 112600 as MioPsgrKm,
  sources: [bmvi2020VerkehrInZahlen],
  details: /*html*/ ``,
  internals: /*html*/ `Our definition: current situation is 100%`,
})

const publicNationalUsage = new WritableParam({
  unit: "MioPsgrKm",
  initialValue: 67300 as MioPsgrKm,
  sources: [bmvi2020VerkehrInZahlen],
  details: /*html*/ ``,
  internals: /*html*/ `public - local - air = 251700 - 71800 - 112600 = 67300`,
})

const publicNationalCapacity = new WritableParam({
  unit: "MioPsgrKm",
  initialValue: 67300 as MioPsgrKm,
  sources: [bmvi2020VerkehrInZahlen],
  details: /*html*/ ``,
  internals: /*html*/ `Our defionition current situation is 100%`,
})

const airDomesticUsage = new WritableParam({
  unit: "MioPsgrKm",
  initialValue: 10100 as MioPsgrKm,
  sources: [bmvi2020VerkehrInZahlen],
  details: /*html*/ ``,
  internals: /*html*/ ``,
})

const airIntlUsage = new WritableParam({
  unit: "MioPsgrKm",
  initialValue: 61700 as MioPsgrKm,
  sources: [bmvi2020VerkehrInZahlen],
  details: /*html*/ ``,
  internals: /*html*/ ``,
})

const passengerTransportUsage = new ComputedParam({
  unit: "MioPsgrKm",
  valueGetter(data: ParamsBase): MioPsgrKm {
    return data.carUsage + data.publicLocalUsage + data.publicNationalUsage + data.airDomesticUsage + data.airIntlUsage
  },
  details: /*html*/ ``,
  internals: /*html*/ ``,
})

const buildingsIndustryDemand = new WritableParam({
  unit: "TWh",
  initialValue: 226 as TWh,
  sources: [],
  details: /*html*/ ``,
  internals: /*html*/ `TODO#73: Find source of initialValue.`, //TODO #73
})

const buildingsPrivateDemand = new WritableParam({
  unit: "TWh",
  initialValue: 544 as TWh,
  sources: [],
  details: /*html*/ ``,
  internals: /*html*/ `TODO#73: Find source of initialValue.`, //TODO #73
})

const buildingsDemand = new ComputedParam({
  unit: "TWh",
  valueGetter(data: ParamsBase): TWh {
    return data.buildingsPrivateDemand + data.buildingsIndustryDemand
  },
  details: /*html*/ ``,
  internals: /*html*/ `TODO#73: Find source of initialValue.`, //TODO #73
})

const buildingsSourceBio = new WritableParam({
  unit: "TWh",
  initialValue: 130 as TWh,
  sources: [],
  details: /*html*/ ``,
  internals: /*html*/ `TODO#73: Find source of initialValue.`, //TODO #73
})

const buildingsSourceOil = new WritableParam({
  unit: "TWh",
  initialValue: 219 as TWh,
  sources: [],
  details: /*html*/ ``,
  internals: /*html*/ `TODO#73: Find source of initialValue.`, //TODO #73
})

const buildingsSourceTele = new WritableParam({
  unit: "TWh",
  initialValue: 58 as TWh,
  sources: [],
  details: /*html*/ ``,
  internals: /*html*/ `TODO#73: Find source of initialValue.`, //TODO #73
})

const buildingsSourceGas = new ComputedParam({
  unit: "TWh",
  valueGetter(data: ParamsBase): TWh {
    return data.buildingsDemand - (data.buildingsSourceBio + data.buildingsSourceOil + data.buildingsSourceTele)
  },
  details: /*html*/ ``,
  internals: /*html*/ `TODO#73: Find value for shouldInitiallyBe.`, //TODO #73
})

const popularity = new WritableParam({
  unit: "Percent",
  initialValue: 50 as Percent,
  sources: [],
  details: /*html*/ ``,
  internals: /*html*/ `50% of all people accept you as their chancellor.`,
})

const numberOfCitizens = new WritableParam({
  unit: "TsdPeople",
  initialValue: 83157 as TsdPeople,
  sources: [],
  details: /*html*/ ``,
  internals: /*html*/ `in 2020, source https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html.`,
})

const unemployment = new WritableParam({
  unit: "TsdPeople",
  initialValue: 2695 as TsdPeople,
  sources: [],
  details: /*html*/ ``,
  internals: /*html*/ `in 2020, source https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre`,
})

const gdp = new WritableParam({
  unit: "MrdEuro",
  initialValue: 3332 as MrdEuro,
  sources: [],
  details: /*html*/ ``,
  internals: /*html*/ `in 2020, source http://www.statistikportal.de/de/bruttoinlandsprodukt-vgr`,
})

const stateDebt = new WritableParam({
  unit: "MrdEuro",
  initialValue: 1899 as MrdEuro,
  sources: [],
  details: /*html*/ ``,
  internals: /*html*/ `In 2019, source https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands`,
})

const paramDefinitions = {
  co2budget,
  co2emissionsIndustry,
  co2emissionsStreetVehicles,
  co2emissionsMobility,
  co2emissionsAgriculture,
  co2emissionsBuildings,
  co2emissionsOthers,
  co2emissionsEnergy,
  co2emissions,

  electricityDemand,

  electricitySolar,
  electricityWind,
  electricityWindOnshoreMaxNew,
  electricityWater,
  electricityBiomass,
  electricityNuclear,
  electricityHardCoal,
  electricityBrownCoal,
  electricityCoal,
  electricityGas,

  carEmissionFactor,
  carUsage,
  carRenewablePercentage,
  publicLocalUsage,
  publicLocalCapacity,
  publicNationalUsage,
  publicNationalCapacity,
  airDomesticUsage,
  airIntlUsage,
  passengerTransportUsage,

  buildingsIndustryDemand,
  buildingsPrivateDemand,
  buildingsDemand,
  buildingsSourceBio,
  buildingsSourceOil,
  buildingsSourceTele,
  buildingsSourceGas,

  popularity,

  numberOfCitizens,
  unemployment,

  gdp,
  stateDebt,
}

export type ParamDefinitions = typeof paramDefinitions

type RemoveNeverField<T> = { 
  [P in keyof T as T[P] extends never ? never : P]: T[P] 
}
type PickByType<T, C> = RemoveNeverField<{ 
  [Key in keyof T]: T[Key] extends C ? T[Key] : never 
}>

type WritableParamDefinitions = PickByType<ParamDefinitions, WritableParam>
type ComputedParamDefinitions = PickByType<ParamDefinitions, ComputedParam>

const writableParamDefinitions = Object.entries(paramDefinitions)
  .filter((e) => e[1] instanceof WritableParam)
  .map((e) => e as [string, WritableParam])
  .reduce((newObj, e) => {
    newObj[e[0]] = e[1]
    return newObj
  }, {} as Record<string, WritableParam>) as WritableParamDefinitions

const computedParamDefinitions = Object.entries(paramDefinitions)
  .filter((e) => e[1] instanceof ComputedParam)
  .map((e) => e as [string, ComputedParam])
  .reduce((newObj, e) => {
    newObj[e[0]] = e[1]
    return newObj
  }, {} as Record<string, ComputedParam>) as ComputedParamDefinitions

type WritableParamKey = keyof WritableParamDefinitions
const writableParamKeys = Object.keys(writableParamDefinitions) as WritableParamKey[]
type WritableParams = Record<WritableParamKey, number>
export type WritableBaseParams = WritableParams

type ComputedParamKey = keyof ComputedParamDefinitions
const computedParamKeys = Object.keys(computedParamDefinitions) as ComputedParamKey[]
type ComputedParams = Record<ComputedParamKey, number>

type ParamKey = WritableParamKey | ComputedParamKey
export const paramKeys = Object.keys(paramDefinitions) as ParamKey[]
type Params = Record<ParamKey, number>
export type BaseParams = Params

interface ParamEntryBase {
  name: ParamKey
  unit: Unit
  sources: Sources
  details: Details
  internals: Internals
  writable: boolean
}

class WritableParamEntry extends WritableParam implements ParamEntryBase {
  name: WritableParamKey
  constructor(param: WritableParam, name: string) {
    super(param)
    this.name = name as WritableParamKey
  }
}
export const writableParamList: WritableParamEntry[] = Object.entries(writableParamDefinitions).map(
  (e) => new WritableParamEntry(e[1], e[0] as WritableParamKey)
)

class ComputedParamEntry extends ComputedParam implements ParamEntryBase {
  name: ComputedParamKey
  constructor(param: ComputedParam, name: string) {
    super(param)
    this.name = name as ComputedParamKey
  }
}
export const computedParamList: ComputedParamEntry[] = Object.entries(computedParamDefinitions).map(
  (e) => new ComputedParamEntry(e[1], e[0] as ComputedParamKey)
)

type ParamEntry = WritableParamEntry | ComputedParamEntry
export const paramList: ParamEntry[] = Object.entries(paramDefinitions).map((e) =>
  e[1] instanceof WritableParam  ? new WritableParamEntry(e[1], e[0]) : new ComputedParamEntry(e[1], e[0])
)

export const defaultValues: WritableParams = writableParamList.reduce(
  (newObj, e) => ({ ...newObj, [e.name]: e.initialValue }),
  {} as WritableParams
)

export function createBaseValues(values: WritableParams): Params {
  const result: ParamsBase = { ...values }
  Object.entries(computedParamDefinitions).forEach((e) =>
    Object.defineProperty(result, e[0], {
      get: () => {
        return e[1].valueGetter(result)
      },
    })
  )
  return result as Params
}
