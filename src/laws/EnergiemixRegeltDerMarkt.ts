import { endYear, startYear } from "../constants"
import { Change, modify } from "../params"
import { MrdEuro, TWh } from "../types"
import { defineLaw, Effort, monthsEffort } from "./LawsTypes"
import { linear } from "./lawTools"

export default defineLaw({
  title: "Energiemix regelt der Markt",
  description: "Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",

  effort(game): Effort {
    if (game.values.popularity >= 50) {
      return monthsEffort(6, "Normal dauert das 12 Monate, aber bei Deiner Beliebtheit nur {months}.")
    } else {
      return monthsEffort(12)
    }
  },

  effects(): Change[] {
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
