import { defineLaw } from "../Factory"
import { linear } from "../lawTools"
import { MrdEuro, Percent } from "../types"
import { modify } from "../params"

export default defineLaw({
  title: "Ausbau von Straßen",
  description: "Autobahnen und Straßen werden intensiver ausgebaut.",

  effects(data) {
    const localModifier = modify("publicLocalUsage").byPercent(-1)
    const longModifier = modify("publicNationalUsage").byPercent(-1)
    const localChange = localModifier.getChange(data)
    const longChange = longModifier.getChange(data)

    return [
      modify("stateDebt").byValue(5 as MrdEuro),
      modify("popularity").byValue(0.5),
      modify("carUsage").byValue(-localChange - longChange),
      localModifier,
      longModifier,
    ]
  },

  priority(game) {
    const v = game.values
    const relCarPercentage: Percent = (v.carUsage / v.passengerTransportUsage) * 100
    return linear(60, 100, relCarPercentage)
  },
})
