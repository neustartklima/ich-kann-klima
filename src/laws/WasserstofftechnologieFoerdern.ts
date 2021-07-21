import { defineLaw } from "../Factory"
import { changePercentBy, linear } from "../lawTools"
import { MrdEuro, Percent } from "../types"
import { WritableBaseParams } from "../params"

export default defineLaw({
  title: "Wasserstofftechnologie fördern",
  description:
    "Forschung und Entwicklung von wasserstoffbasierter Antriebs- und Produktionstechnologie wird stark gefördert.",

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    const possibleChange = startYear + 5 <= currentYear ? 1 : 0
    return {
      stateDebt: 3 as MrdEuro,
      carRenewablePercentage: changePercentBy(data.carRenewablePercentage, possibleChange),
    }
  },

  priority(game) {
    const v = game.values
    const carNonRenewableUsage = v.carUsage * (1 - v.carRenewablePercentage / 100)
    const relCarPercentage: Percent = (carNonRenewableUsage / v.passengerTransportUsage) * 100
    return linear(40, 90, relCarPercentage)
  },
})
