import { LawDefinition } from "../types"

export default {
  title: "Energiemix regelt der Markt",
  description: "Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",

  effects(data, startYear, currentYear) {
    return {
      co2emmissions: -100,
      stateDebt: -1000,
    }
  },

  priority(game) {
    const startYear = 2021 // TODO: Put constants in central place
    const endYear = 2050 // TODO: Put constants in central place
    const yearsTotal = endYear - startYear
    const yearsToGo = endYear - game.currentYear
    return (yearsToGo / yearsTotal) * 100
  },
} as LawDefinition
