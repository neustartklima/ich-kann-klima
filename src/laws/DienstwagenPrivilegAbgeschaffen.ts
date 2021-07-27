import { defineLaw } from "../Factory"
import { changeMioPsgrKmBy, linear } from "../lawTools"
import { MrdEuro, Percent } from "../types"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Dienstwagen Privileg abgeschaffen",
  description: "Steuererleichterungen für Dienstwagen werden abgeschafft.",

  effects(data, startYear, currentYear): Change[] {
    const usageChange = changeMioPsgrKmBy(data.carUsage, -0.0005 * data.carUsage)
    return [
      modify("stateDebt").byValue(-18 as MrdEuro),
      modify("popularity").byValue(-1).if(startYear === currentYear),
      modify("carUsage").byValue(usageChange),
      modify("publicLocalUsage").byValue(-usageChange),
    ]
  },

  priority(game) {
    const v = game.values
    const carNonRenewableUsage = v.carUsage * (1 - v.carRenewablePercentage / 100)
    const relCarPercentage: Percent = (carNonRenewableUsage / v.passengerTransportUsage) * 100
    return linear(50, 100, relCarPercentage)
  },
})
