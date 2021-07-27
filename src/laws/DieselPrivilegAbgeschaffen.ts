import { defineLaw } from "../Factory"
import { linear } from "../lawTools"
import { MrdEuro, Percent } from "../types"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Diesel Privileg abgeschaffen",
  description: "Diesel wird jetzt genauso besteuert wie Benzin.",

  effects(data, startYear, currentYear): Change[] {
    return [
      modify("stateDebt").byValue(-7.35 as MrdEuro),
      modify("popularity").byValue(-1).if(startYear === currentYear),
    ]
  },

  priority(game) {
    const v = game.values
    const carNonRenewableUsage = v.carUsage * (1 - v.carRenewablePercentage / 100)
    const relCarPercentage: Percent = (carNonRenewableUsage / v.passengerTransportUsage) * 100
    return linear(10, 100, relCarPercentage)
  },
})
