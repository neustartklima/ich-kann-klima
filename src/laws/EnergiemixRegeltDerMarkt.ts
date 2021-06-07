import { endYear, startYear } from "../constants"
import { defaultValues } from "../repository"
import { defineLaw, MrdEuro, TWh, WritableBaseParams } from "../types"

export default defineLaw({
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
    const yearsTotal = endYear - startYear
    const yearsToGo = endYear - game.currentYear
    return (yearsToGo / yearsTotal) * 100
  },
})
