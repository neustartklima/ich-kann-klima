import { Change, modify } from "../../params"
import { GramPerPsgrKm, Percent } from "../../types"
import { defineLaw, monthsEffort } from "../LawsTypes"
import { lawIsAccepted, linear } from "../lawTools"

export default defineLaw({
  title: "Tempolimit 130 auf Autobahnen",
  description: "Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 130 km/h.",
  labels: ["TempolimitAutobahn"],
  removeLawsWithLabels: ["TempolimitAutobahn"],

  effort(game) {
    return monthsEffort(3)
  },

  effects(game): Change[] {
    const emissionModifier = modify("carEmissionFactor").setValue(157.9 as GramPerPsgrKm)
    const emissionChange = emissionModifier.getChange(game.values)

    return [
      modify("popularity")
        .byValue(2)
        .if(emissionChange < 0),
      emissionModifier,
    ]
  },

  priority(game) {
    if (
      lawIsAccepted(game, "Tempolimit100AufAutobahnen") ||
      lawIsAccepted(game, "Tempolimit120AufAutobahnen") ||
      lawIsAccepted(game, "TempolimitAufAutobahnenAussitzen")
    )
      return 0
    const v = game.values
    const relCarPercentage: Percent = (v.carUsage / v.passengerTransportUsage) * 100
    return linear(10, 100, relCarPercentage)
  },
})
