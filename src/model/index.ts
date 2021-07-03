import {
  BaseParams,
  GramPerPsgrKm,
  MioPsgrKm,
  MioTons,
  Percent,
  TWh,
  WritableBaseParams,
} from "../types"
import { startYear } from "../constants"

export const defaultValues: WritableBaseParams = {
  co2budget: 6700, // https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=22

  stateDebt: 1899, // in 2019, source https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands
  popularity: 50, // 50% of all people accept you as your chancellor

  // hidden

  numberOfCitizens: 83157, // Tsd people in 2020, source https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html
  unemployment: 2695, // Tsd people in 2020, source https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre
  gdp: 3332, // in 2020, source http://www.statistikportal.de/de/bruttoinlandsprodukt-vgr

  // https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile p. 219 column 2019
  carUsage: 917000 as MioPsgrKm,
  carEmissionFactor: 160 as GramPerPsgrKm,
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

  // 2020, https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele
  // https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx sheet "THG" row 2019
  co2emissionsIndustry: 186.793,
  co2emissionsBuildings: 123.461,
  co2emissionsAgriculture: 67.936,
  co2emissionsOthers: 9.243,
}

export const initialGame = {
  currentYear: startYear,
  values: defaultValues,
  acceptedLaws: [],
  proposedLaws: [],
  rejectedLaws: [],
}

export function createBaseValues(values: WritableBaseParams): BaseParams {
  return {
    ...values,

    get electricityCoal() {
      return this.electricityHardCoal + this.electricityBrownCoal
    },

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

    get co2emissionsStreetVehicles(): MioTons {
      const carNonrenewable: MioPsgrKm = this.carUsage * (1 - this.carRenewablePercentage / 100)
      // https://www.vdv.de/vdv-statistik-2019.pdfx page 11 would lead to about 160 g/Pkm
      const co2emissionsCars: MioTons = (carNonrenewable * this.carEmissionFactor) / 1000000
      // 47.4 MioTons for 2019 https://www.umweltbundesamt.de/daten/verkehr/emissionen-des-verkehrs#strassenguterverkehr
      // ...but using this to adjust to the correct total emissions
      // TODO: Check, what is correct.
      const co2emissionsTrucks: MioTons = 14.4
      return co2emissionsCars + co2emissionsTrucks
    },

    get co2emissionsMobility(): MioTons {
      // 1 MioPsgrKm * 1 GramPerPsgrKm = 1 MioGram = 1 Ton
      // [1] https://www.vdv.de/vdv-statistik-2019.pdfx page 11
      // [2] https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx sheet "THG" row 2019
      return (
        this.co2emissionsStreetVehicles +
        (this.publicLocalCapacity * (65 as GramPerPsgrKm)) / 1000000 + // [1]: 65 g/Pkm
        (this.publicNationalCapacity * (32 as GramPerPsgrKm)) / 1000000 + // [1]: 32 g/Pkm
        (this.airDomesticUsage * (222 as GramPerPsgrKm)) / 1000000 + // [1]: 230 g/Pkm [2] backward: 222 g/Pkm
        (1.641 as MioTons) // costal and inland water transport
      )
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
}
