import { ComputedParam, GramPerPsgrKm, MioPsgrKm, MioTons, ParamDefinition, ParamsBase, WritableParam } from "../types"
import {
  uba2020DeutscheTreibhausgasEmissionen,
  ubaEmissionenDesVerkehrs,
  umweltrat2020Umweltgutachten,
  vdv2019Statistik,
} from "./Sources"

//TODO #73: I would like to ensure, this is of type Record<string, Param>.
// But if I specify this here, Params will be Record<string, Param> and not more specific.
export const paramDefinitions = {
  co2budget: new WritableParam({
    unit: "MioTons",
    initialValue: 6700,
    sources: [umweltrat2020Umweltgutachten],
    details: /*html*/ ``,
    internals: /*html*/ ``,
  }),
  co2emissionsIndustry: new WritableParam({
    unit: "MioTons",
    initialValue: 186.793,
    sources: [uba2020DeutscheTreibhausgasEmissionen],
  }),
  co2emissionsStreetVehicles: new ComputedParam({
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
  }),
  co2emissionsMobility: new ComputedParam({
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
  }),

  /*
  co2emissionsBuildings: o("MioTons", false),
  co2emissionsAgriculture: o("MioTons", true),
  co2emissionsOthers: o("MioTons", true),
  co2emissionsEnergy: o("MioTons", false),
  co2emissions: o("MioTons", false),
  electricityDemand: o("TWh/a", true),
  electricitySolar: o("TWh/a", true),
  electricityWind: o("TWh/a", true),
  electricityWindOnshoreMaxNew: o("TWh/a", true),
  electricityWater: o("TWh/a", true),
  electricityBiomass: o("TWh/a", true),
  electricityNuclear: o("TWh/a", true),*/
  electricityHardCoal: new WritableParam({
    unit: "TWh",
    initialValue: 35.46,
  }),
  electricityBrownCoal: new WritableParam({
    unit: "TWh",
    initialValue: 82.13,
  }),
  electricityCoal: new ComputedParam({
    unit: "TWh",
    valueGetter(data: ParamsBase): number {
      return data.electricityHardCoal + data.electricityBrownCoal
    },
  }),
  /*electricityGas: o("TWh/a", false),
  carEmissionFactor: o("GramPerPsgrKm", true),
  carUsage: o("MioPsgrKm", true),
  carRenewablePercentage: o("Percent", true),
  publicLocalUsage: o("MioPsgrKm", true),
  publicLocalCapacity: o("MioPsgrKm", true),
  publicNationalUsage: o("MioPsgrKm", true),
  publicNationalCapacity: o("MioPsgrKm", true),
  airDomesticUsage: o("MioPsgrKm", true),
  airIntlUsage: o("MioPsgrKm", true),
  passengerTransportUsage: o("MioPsgrKm", false),
  buildingsIndustryDemand: o("TWh/a", true),
  buildingsPrivateDemand: o("TWh/a", true),
  buildingsDemand: o("TWh/a", false),
  buildingsSourceBio: o("TWh/a", true),
  buildingsSourceOil: o("TWh/a", true),
  buildingsSourceTele: o("TWh/a", true),
  buildingsSourceGas: o("TWh/a", false),
  stateDebt: o("MrdEuro", true),
  popularity: o("Percent", true),
  numberOfCitizens: o("TsdPeople", true),
  unemployment: o("TsdPeople", true),
  gdp: o("MrdEuro", true),




  stateDebt: 1899, // in 2019, source https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands
  popularity: 50, // 50% of all people accept you as your chancellor

  // hidden

  numberOfCitizens: 83157, // Tsd people in 2020, source https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html
  unemployment: 2695, // Tsd people in 2020, source https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre
  gdp: 3332, // in 2020, source http://www.statistikportal.de/de/bruttoinlandsprodukt-vgr

  // https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile p. 219 column 2019
  carUsage: 917000 as MioPsgrKm,
  carEmissionFactor: 160 as GramPerPsgrKm, // [vdv2019Statistik] page 11 would lead to about 160 g/Pkm
  carRenewablePercentage: 1 as Percent, // https://de.motor1.com/news/401639/autos-in-deutschland-zahlen-und-fakten/ (very rough estimate)
  publicLocalUsage: 112600 as MioPsgrKm,
  publicLocalCapacity: 112600 as MioPsgrKm, // Our definition: current situation is 100%
  publicNationalUsage: 67300 as MioPsgrKm, // public - local - air = 251700 - 71800 - 112600 = 67300
  publicNationalCapacity: 67300 as MioPsgrKm, // Our defionition current situation is 100%
  airDomesticUsage: 10100 as MioPsgrKm,
  airIntlUsage: 61700 as MioPsgrKm,

  // https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020
  electricityDemand: 480.54 as TWh,
  electricitySolar: 51.42 as TWh,
  electricityWind: 131.85 as TWh,
  electricityWindOnshoreMaxNew: 6.0 as TWh,
  electricityWater: 14.99 as TWh,
  electricityHardCoal: 35.46 as TWh,
  electricityBrownCoal: 82.13 as TWh,
  electricityBiomass: 43.19 as TWh,
  electricityNuclear: 60.91 as TWh,

  buildingsPrivateDemand: 544 as TWh,
  buildingsIndustryDemand: 226 as TWh,
  buildingsSourceBio: 130 as TWh,
  buildingsSourceOil: 219 as TWh,
  buildingsSourceTele: 58 as TWh,

  co2emissionsAgriculture: 67.936, uba2020DeutscheTreibhausgasEmissionen
  co2emissionsOthers: 9.243,uba2020DeutscheTreibhausgasEmissionen



  get electricityGas() {
    return (
      this.electricityDemand -
      this.electricitySolar -
      this.electricityWind -
      this.electricityWater -
      this.electricityHardCoal -
      this.electricityBrownCoal -
      this.electricityBiomass -
      this.electricityNuclear
    )
  },

  get co2emissionsEnergy() {
    // should sum up to 220 in 2020
    // factors from https://www.rensmart.com/Calculators/KWH-to-CO2 and @thomas-olszamowski
    return (
      this.electricityGas * 0.399 +
      this.electricitySolar * 0.058 +
      this.electricityWind * 0.005 +
      this.electricityWater * 0.02 +
      this.electricityHardCoal * 0.835 +
      this.electricityBrownCoal * 1.137 +
      this.electricityBiomass * 0 + // TODO find correct factor (no source found)
      this.electricityNuclear * 0.005
    )
  },

  get passengerTransportUsage(): MioPsgrKm {
    return (
      this.carUsage + this.publicLocalUsage + this.publicNationalUsage + this.airDomesticUsage + this.airIntlUsage
    )
  },


  get buildingsDemand(): TWh {
    return this.buildingsPrivateDemand + this.buildingsIndustryDemand
  },

  get buildingsSourceGas(): TWh {
    return this.buildingsDemand - (this.buildingsSourceBio + this.buildingsSourceOil + this.buildingsSourceTele)
  },

  get co2emissionsBuildings(): MioTons {
    // Should initially equal 123.461 MioTons (https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx sheet "THG" row 2019)
    return (
      this.buildingsSourceBio * 0 +
      this.buildingsSourceGas * 0.247 + // https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085
      this.buildingsSourceOil * 0.318 + // https://www.polarstern-energie.de/magazin/artikel/heizen-co2-vergleich-von-brennstoffen/#c7085
      this.buildingsSourceTele * 0.16
    ) // from https://www.klimaneutral-handeln.de/php/kompens-berechnen.php#rechner
  },

  get co2emissions(): number {
    return (
      this.co2emissionsEnergy +
      this.co2emissionsIndustry +
      this.co2emissionsMobility +
      this.co2emissionsBuildings +
      this.co2emissionsAgriculture +
      this.co2emissionsOthers
    )
  },
}
*/
}

export type ParamDefinitions = typeof paramDefinitions
export type ParamKey = keyof ParamDefinitions

//TODO #73: This assertion does the trick, but might not be noticed, when changing params. Better here or in unit test?
const assertion: ParamDefinitions extends Record<string, ParamDefinition> ? true : never = true

export type Params = Record<ParamKey, number>

export function createInitialValues(): Params {
  const result: Partial<Params> = {}
  for (const key in paramDefinitions) {
    const name = key as ParamKey
    const pd = paramDefinitions[name]
    if (pd instanceof WritableParam) {
      result[name] = pd.initialValue
    } else {
      Object.defineProperty(result, name, {
        get: () => {
          return pd.valueGetter(result)
        },
      })
    }
  }
  return result as Params
}
