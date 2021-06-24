import { defineLaw } from "../Factory"
import { changeMioPsgrKmBy, changePercentBy, linear } from "../lawTools"
import { MrdEuro, Percent, WritableBaseParams } from "../types"

export default defineLaw({
  title: "Ausbau von Straßen",
  description: "Autobahnen und Straßen werden intensiver ausgebaut.",

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    const localChange = changeMioPsgrKmBy(data.shortdistanceTransportUsage, -0.01 * data.shortdistanceTransportUsage)
    const longChange = changeMioPsgrKmBy(data.longdistanceTransportUsage, -0.01 * data.longdistanceTransportUsage)

    return {
      stateDebt: 5 as MrdEuro,
      popularity: changePercentBy(data.popularity, 0.5),
      carUsage: -localChange - longChange,
      shortdistanceTransportUsage: localChange,
      longdistanceTransportUsage: longChange,
    }
  },

  priority(game) {
    const v = game.values
    const relCarPercentage: Percent = (v.carUsage / v.passengerTransportUsage) * 100
    return linear(60, 100, relCarPercentage)
  },
})
