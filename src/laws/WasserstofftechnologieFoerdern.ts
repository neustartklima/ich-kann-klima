import { defineLaw } from "../Factory"
import { linear } from "../lawTools"
import { MrdEuro, Percent } from "../types"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Wasserstofftechnologie fördern",
  description:
    "Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie wird stark gefördert.",

  effects(game, startYear, currentYear): Change[] {
    return [
      modify("stateDebt").byValue(3 as MrdEuro),
      modify("carRenewablePercentage")
        .byValue(1)
        .if(startYear + 5 <= currentYear),
    ]
  },

  priority(game) {
    const v = game.values
    const carNonRenewableUsage = v.carUsage * (1 - v.carRenewablePercentage / 100)
    const relCarPercentage: Percent = (carNonRenewableUsage / v.passengerTransportUsage) * 100
    return linear(40, 90, relCarPercentage)
  },
})
