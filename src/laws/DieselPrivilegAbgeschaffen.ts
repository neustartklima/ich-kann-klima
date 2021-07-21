import { defineLaw } from "../Factory"
import { changePercentBy, linear } from "../lawTools"
import { MrdEuro, Percent } from "../types"
import { WritableBaseParams } from "../params"

export default defineLaw({
  title: "Diesel Privileg abgeschaffen",
  description: "Diesel wird jetzt genauso besteuert wie Benzin.",

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    return {
      stateDebt: -7.35 as MrdEuro,
      popularity: startYear === currentYear ? changePercentBy(data.popularity, -1) : 0,
    }
  },

  priority(game) {
    const v = game.values
    const carNonRenewableUsage = v.carUsage * (1 - v.carRenewablePercentage / 100)
    const relCarPercentage: Percent = (carNonRenewableUsage / v.passengerTransportUsage) * 100
    return linear(10, 100, relCarPercentage)
  },
})
