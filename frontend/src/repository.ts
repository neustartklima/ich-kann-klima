import { BaseParams, Game, GameDefinition, GameId, WritableBaseParams } from "./types"
import { v4 as uuid } from "uuid"

export const defaultValues = {
  co2budget: 6700, // https://www.umweltrat.de/SharedDocs/Downloads/DE/01_Umweltgutachten/2016_2020/2020_Umweltgutachten_Kap_02_Pariser_Klimaziele.pdf?__blob=publicationFile&v=22

  stateDebt: 1899, // in 2019, source https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands
  popularity: 50, // 50% of all people accept you as your chancellor

  // hidden
  co2emissions: 805, // in 2019, source https://www.bundesregierung.de/breg-de/aktuelles/bilanz-umweltbundesamt-1730880
  unemployment: 2695, // in 2020, source https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre
  gdp: 3332, // in 2020, source http://www.statistikportal.de/de/bruttoinlandsprodukt-vgr

  // https://energy-charts.info/charts/energy/chart.htm?l=en&c=DE&interval=year&year=2020
  electricityDemand: 484.22,
  electricitySolar: 51.42,
  electricityWind: 131.85,
  electricityWater: 18.4,
  electricityCoal: 117.72,
  electricityBiomass: 47.15,
  electricityNuclear: 60.92
}

export function createBaseValues(values: WritableBaseParams): BaseParams {
  return {
    ...values,

    get electricityGas(): number {
      return (
        this.electricityDemand -
        this.electricitySolar -
        this.electricityWind -
        this.electricityWater -
        this.electricityCoal -
        this.electricityBiomass -
        this.electricityNuclear
        
      )
    }
  }
}

export function createGame(game: GameDefinition): Game {
  const newGame = {
    id: uuid(),
    currentYear: game.currentYear,
    acceptedLaws: game.acceptedLaws,
    values: createBaseValues(game.values)
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
    }
  }
}
