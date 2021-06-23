import { defineLaw } from "../Factory"
import { changeMioPsgrKmBy, changePercentBy, linear } from "../lawTools"
import { MrdEuro, Percent, WritableBaseParams } from "../types"

export default defineLaw({
  title: "Abschaffung der Mineralölsteuer",
  description: "Die Steuer auf sämtliche erdölbasierten Treibstoffe wird abgeschafft.",

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    const yearly = {
      stateDebt: 41 as MrdEuro,
      popularity: changePercentBy(data.popularity, startYear === currentYear ? 5 : -3),
    }
    const localChange = changeMioPsgrKmBy(data.localTransportUsage, -0.2 * data.localTransportUsage)
    const longChange = changeMioPsgrKmBy(data.longdistanceTransportUsage, -0.2 * data.longdistanceTransportUsage)

    if (currentYear === startYear) {
      return {
        ...yearly,
        carUsage: -localChange - longChange,
        localTransportUsage: localChange,
        longdistanceTransportUsage: longChange,
      }
    }
    return yearly
  },

  priority(game) {
    const v = game.values
    const totalUsage = v.localTransportUsage + v.longdistanceTransportUsage + v.carUsage
    const carNonRenewableUsage = v.carUsage * (1 - v.carRenewablePercentage / 100)
    const relCarPercentage: Percent = (carNonRenewableUsage / totalUsage) * 100
    return linear(70, 100, relCarPercentage)
  },
})
