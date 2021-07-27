import { endYear, startYear } from "../constants"
import { changeTWhBy, linear } from "../lawTools"
import { defineLaw } from "../Factory"
import { MrdEuro, TWh } from "../types"
import { Change, defaultValues, modify } from "../params"

export default defineLaw({
  title: "Energiemix regelt der Markt",
  description: "Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",

  effects(data): Change[] {
    return [
      modify("stateDebt").byValue(-37 as MrdEuro),
      modify("electricityHardCoal").byPercent(-10),
      modify("electricityBrownCoal").byPercent(-5),
      modify("electricityWind").byValue(5.0 as TWh),
      modify("electricitySolar").byValue(3.0 as TWh),
      modify("electricityWater").byValue(0.5 as TWh),
    ]
  },

  priority(game) {
    return linear(endYear, startYear, game.currentYear)
  },
})
