import { defineLaw } from "../Factory"
import { changeMioPsgrKmBy, linear } from "../lawTools"
import { MrdEuro, Percent } from "../types"
import { modify } from "../params"

export default defineLaw({
  title: "Ausbau von Straßen",
  description: "Autobahnen und Straßen werden intensiver ausgebaut.",

  effects(data) {
    const localChange = changeMioPsgrKmBy(data.publicLocalUsage, -0.01 * data.publicLocalUsage)
    const longChange = changeMioPsgrKmBy(data.publicNationalUsage, -0.01 * data.publicNationalUsage)

    return [
      modify("stateDebt").byValue(5 as MrdEuro),
      modify("popularity").byValue(0.5),
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
