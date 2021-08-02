import { defineLaw } from "../Factory"
import { linear } from "../lawTools"
import { MrdEuro, Percent } from "../types"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Dienstwagen Privileg abgeschaffen",
  description: "Steuererleichterungen für Dienstwagen werden abgeschafft.",

  effects(data, startYear, currentYear): Change[] {
    const carModifier = modify("carUsage").byPercent(-0.05)
    const carChange = carModifier.getChange(data)
    return [
      modify("stateDebt").byValue(-18 as MrdEuro),
      modify("popularity")
        .byValue(-1)
        .if(startYear === currentYear),
      carModifier,
      modify("publicLocalUsage").byValue(-carChange),
    ]
  },

  priority(game) {
    const v = game.values
    const carNonRenewableUsage = v.carUsage * (1 - v.carRenewablePercentage / 100)
    const relCarPercentage: Percent = (carNonRenewableUsage / v.passengerTransportUsage) * 100
    return linear(50, 100, relCarPercentage)
  },
})
