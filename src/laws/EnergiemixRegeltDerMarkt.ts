import { defaultValues } from "../repository"
import { LawDefinition, MrdEuro, TWh, WritableBaseParams } from "../types"

export default {
  title: "Energiemix regelt der Markt",
  description: "Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    return {
      stateDebt: -37 as MrdEuro,
      electricityHardCoal: Math.max(-data.electricityHardCoal, -0.1 * defaultValues.electricityHardCoal),
      electricityBrownCoal: Math.max(-data.electricityBrownCoal, -0.05 * defaultValues.electricityBrownCoal),
      electricityWind: 5.0 as TWh,
      electricitySolar: 3.0 as TWh,
      electricityWater: 0.5 as TWh,
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
