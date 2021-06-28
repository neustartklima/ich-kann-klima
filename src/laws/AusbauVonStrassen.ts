import { defineLaw } from "../Factory"
import { changeMioPsgrKmBy, changePercentBy, linear } from "../lawTools"
import { MrdEuro, Percent, WritableBaseParams } from "../types"

export default defineLaw({
  title: "Ausbau von Straßen",
  description: "Autobahnen und Straßen werden intensiver ausgebaut.",

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    const localChange = changeMioPsgrKmBy(data.publicLocalUsage, -0.01 * data.publicLocalUsage)
    const longChange = changeMioPsgrKmBy(data.publicNationalUsage, -0.01 * data.publicNationalUsage)

    return {
      stateDebt: 5 as MrdEuro,
      popularity: changePercentBy(data.popularity, 0.5),
      carUsage: -localChange - longChange,
      publicLocalUsage: localChange,
      publicNationalUsage: longChange,
    }
  },

  priority(game) {
    const v = game.values
    const relCarPercentage: Percent = (v.carUsage / v.passengerTransportUsage) * 100
    return linear(60, 100, relCarPercentage)
  },
})
