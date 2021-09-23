import { defineLaw } from "../Factory"
import { linear } from "../lawTools"
import { MrdEuro, Percent } from "../types"
import { modify, transfer } from "../params"

export default defineLaw({
  title: "Ausbau von Straßen",
  description: "Autobahnen und Straßen werden intensiver ausgebaut.",

  effects(game) {
    return [
      modify("stateDebt").byValue(5 as MrdEuro),
      modify("popularity").byValue(0.5),
      transfer("publicLocalUsage", "carUsage").byPercent(-1),
      transfer("publicNationalUsage", "carUsage").byPercent(-1),
    ]
  },

  priority(game) {
    const v = game.values
    const relCarPercentage: Percent = (v.carUsage / v.passengerTransportUsage) * 100
    return linear(60, 100, relCarPercentage)
  },
})
