import { defineLaw } from "../Factory"
import { changeMioPsgrKmBy, changePercentBy, linear } from "../lawTools"
import { MrdEuro, Percent } from "../types"
import { modify } from "../params"

export default defineLaw({
  title: "Ausbau von Straßen",
  description: "Autobahnen und Straßen werden intensiver ausgebaut.",

  effects(values) {
    const localChange = changeMioPsgrKmBy(values.publicLocalUsage, -0.01 * values.publicLocalUsage)
    const longChange = changeMioPsgrKmBy(values.publicNationalUsage, -0.01 * values.publicNationalUsage)

    return [
      modify("stateDebt").byValue(5 as MrdEuro),
      modify("popularity").byPercent(0.5),
      modify("carUsage").byValue(-localChange - longChange),
      modify("publicLocalUsage").byValue(localChange),
      modify("publicNationalUsage").byValue(longChange),
    ]
  },

  priority(game) {
    const v = game.values
    const relCarPercentage: Percent = (v.carUsage / v.passengerTransportUsage) * 100
    return linear(60, 100, relCarPercentage)
  },
})
