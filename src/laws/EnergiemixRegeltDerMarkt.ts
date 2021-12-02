import { endYear, startYear } from "../constants"
import { linear } from "./lawTools"
import { defineLaw, Effort } from "./LawsTypes"
import { MrdEuro, TWh } from "../types"
import { Change, modify } from "../params"
import { duration } from "../lib/Temporal"

export default defineLaw({
  title: "Energiemix regelt der Markt",
  description: "Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",

  effort(game): Effort {
    if (game.values.popularity >= 50) {
      return { time: duration("P3M"), text: "Normal dauert das 6 Monate, aber bei Deiner Beliebtheit nur 3." }
    } else {
      return { time: duration("P6M"), text: "Dauert 6 Monate." }
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
