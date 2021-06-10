import { BaseParams, Game, GameDefinition, GameId, WritableBaseParams } from "./types"
import { v4 as uuid } from "uuid"
import { startYear } from "./constants"

export const defaultValues: WritableBaseParams = {
  co2budget: 6700, // https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=22

  stateDebt: 1899, // in 2019, source https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands
  popularity: 50, // 50% of all people accept you as your chancellor

  // hidden
  //co2emissions: 739, // in 2020, source https://www.bmu.de/pressemitteilung/treibhausgasemissionen-sinken-2020-um-87-prozent/
  numberOfCitizens: 83157, // Tsd people in 2020, source https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Bevoelkerungsstand/Tabellen/zensus-geschlecht-staatsangehoerigkeit-2020.html
  unemployment: 2695, // Tsd people in 2020, source https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre
  gdp: 3332, // in 2020, source http://www.statistikportal.de/de/bruttoinlandsprodukt-vgr
  publicTransport: {
    usage: 10400,  // Mio rides in 2019, source https://www.vdv.de/daten-fakten.aspx
    passengerKm: 94600, // Mio passenger km in 2019, source https://www.vdv.de/daten-fakten.aspx
    ridesPerCitizen: 138, // in 2019, source https://www.vdv.de/daten-fakten.aspx
    revenue: 13.3, // Mrd € from ticket sale in 2019, source https://www.vdv.de/daten-fakten.aspx
    publicOperationCost: 9.4, // Mrd € in 2019, source https://www.vdv.de/daten-fakten.aspx
    publicInvestmentsPerCitizen: 19.3, // in 2019, source https://www.vdv.de/daten-fakten.aspx
  },

  // https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020
  electricityDemand: 480.54,
  electricitySolar: 51.42,
  electricityWind: 131.85,
  electricityWater: 14.99,
  electricityHardCoal: 35.46,
  electricityBrownCoal: 82.13,
  electricityBiomass: 43.19,
  electricityNuclear: 60.91,

  // 2020, https://www.umweltbundesamt.de/daten/klima/treibhausgas-emissionen-in-deutschland#nationale-und-europaische-klimaziele
  co2emissionsIndustry: 186,
  co2emissionsBuildings: 118,
  co2emissionsMobility: 150,
  co2emissionsAgriculture: 70,
  co2emissionsOthers: 9,
}

const initialGame = {
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

export function createGame(game: GameDefinition = initialGame): Game {
  const newGame = {
    id: uuid(),
    currentYear: game.currentYear,
    acceptedLaws: game.acceptedLaws,
    proposedLaws: game.proposedLaws,
    rejectedLaws: game.rejectedLaws,
    values: createBaseValues(game.values),
    events: [],
    over: false,
  }

  return newGame
}

export default function() {
  return {
    loadGame(id: GameId): Game {
      const storedItem = localStorage.getItem("game")
      if (!storedItem) {
        throw Error("Game not found")
      }
      const game = createGame(JSON.parse(storedItem))
      game.id = id
      return game
    },

    saveGame(game: Game) {
      localStorage.setItem("game", JSON.stringify(game))
    },
  }
}
