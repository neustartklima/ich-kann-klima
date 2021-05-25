import { defaultValues } from "../repository"
import { LawDefinition, WritableBaseParams } from "../types"

export default {
  title: "Energiemix regelt der Markt",
  description: "Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    return {
      stateDebt: -37,
      electricityHardCoal: -Math.min(0.1 * defaultValues.electricityHardCoal, data.electricityHardCoal),
      electricityBrownCoal: -Math.min(0.05 * defaultValues.electricityBrownCoal, data.electricityBrownCoal),
      electricityWind: 5.0,
      electricitySolar: 3.0,
      electricityWater: 0.5,
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
