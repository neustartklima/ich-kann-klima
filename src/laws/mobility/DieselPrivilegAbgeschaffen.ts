import { Change, modify } from "../../params"
import { MrdEuro, Percent } from "../../types"
import { defineLaw, monthsEffort } from "../LawsTypes"
import { linear } from "../lawTools"

export default defineLaw({
  title: "Diesel Privileg abgeschaffen",
  description: "Diesel wird jetzt genauso besteuert wie Benzin.",

  effort(game) {
    return monthsEffort(6)
  },

  effects(game, startYear, currentYear): Change[] {
    return [
      modify("stateDebt").byValue(-7.35 as MrdEuro),
      modify("popularity")
        .byValue(-1)
        .if(startYear === currentYear),
    ]
  },

  priority(game) {
    const v = game.values
    const carNonRenewableUsage = v.carUsage * (1 - v.carRenewablePercentage / 100)
    const relCarPercentage: Percent = (carNonRenewableUsage / v.passengerTransportUsage) * 100
    return linear(10, 100, relCarPercentage)
  },
})
