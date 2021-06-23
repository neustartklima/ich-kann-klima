import { defineLaw } from "../Factory"
import { changeMioPsgrKmBy, changePercentBy, linear } from "../lawTools"
import { MrdEuro, Percent, WritableBaseParams } from "../types"

export default defineLaw({
  title: "Dienstwagen Privileg abgeschaffen",
  description: "Steuererleichterungen für Dienstwagen werden abgeschafft.",

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    const usageChange = changeMioPsgrKmBy(data.carUsage, -0.0005 * data.carUsage)
    return {
      stateDebt: -18 as MrdEuro,
      popularity: startYear === currentYear ? changePercentBy(data.popularity, -1) : 0,
      carUsage: usageChange,
      localTransportUsage: -usageChange,
    }
  },

  priority(game) {
    const v = game.values
    const totalUsage = v.localTransportUsage + v.longdistanceTransportUsage + v.carUsage
    const carNonRenewableUsage = v.carUsage * (1 - v.carRenewablePercentage / 100)
    const relCarPercentage: Percent = (carNonRenewableUsage / totalUsage) * 100
    return linear(50, 100, relCarPercentage)
  },
})
