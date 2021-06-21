import { defineLaw } from "../Factory"
import { changeMioPsgrKmBy, changePercentBy, linear } from "../lawTools"
import { MrdEuro, Percent, WritableBaseParams } from "../types"

export default defineLaw({
  title: "Ausbau von Straßen",
  description: "Autobahnen und Straßen werden intensiver ausgebaut.",

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    const localChange = changeMioPsgrKmBy(data.localTransportUsage, -0.01 * data.localTransportUsage)
    const longChange = changeMioPsgrKmBy(data.longdistanceTransportUsage, -0.01 * data.longdistanceTransportUsage)

    return {
      stateDebt: 5 as MrdEuro,
      popularity: changePercentBy(data.popularity, 0.5),
      carUsage: -localChange - longChange,
      localTransportUsage: localChange,
      longdistanceTransportUsage: longChange,
    }
  },

  priority(game) {
    const v = game.values
    const totalUsage = v.localTransportUsage + v.longdistanceTransportUsage + v.carUsage
    const relCarPercentage: Percent = (v.carUsage / totalUsage) * 100
    return linear(70, 100, relCarPercentage)
  },
})
