import { endYear, startYear } from "../constants"
import { changeTWhBy, linear } from "../lawTools"
import { defineLaw } from "../Factory"
import { MrdEuro, TWh } from "../types"
import { defaultValues, WritableBaseParams } from "../params"

export default defineLaw({
  title: "Energiemix regelt der Markt",
  description: "Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    return {
      stateDebt: -37 as MrdEuro,
      electricityHardCoal: changeTWhBy(data.electricityHardCoal, -0.1 * defaultValues.electricityHardCoal),
      electricityBrownCoal: changeTWhBy(data.electricityBrownCoal, -0.05 * defaultValues.electricityBrownCoal),
      electricityWind: 5.0 as TWh,
      electricitySolar: 3.0 as TWh,
      electricityWater: 0.5 as TWh,
    }
  },

  priority(game) {
    return linear(endYear, startYear, game.currentYear)
  },
})
