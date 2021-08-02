import { defineLaw } from "../Factory"
import { lawIsAccepted, linear } from "../lawTools"
import { GramPerPsgrKm, Percent } from "../types"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Tempolimit 100 auf Autobahnen",
  description: "Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 100 km/h.",
  labels: ["TempolimitAutobahn"],
  removeLawsWithLabels: ["TempolimitAutobahn"],

  effects(data): Change[] {
    const emissionModifier = modify("carEmissionFactor").byValue(154.1 as GramPerPsgrKm)
    const emissionChange = emissionModifier.getChange(data)

    return [
      modify("popularity")
        .byValue(-1)
        .if(emissionChange < 0),
      emissionModifier,
    ]
  },

  priority(game) {
    if (!lawIsAccepted(game, "Tempolimit120AufAutobahnen")) return 0
    const v = game.values
    const relCarPercentage: Percent = (v.carUsage / v.passengerTransportUsage) * 100
    return linear(10, 60, relCarPercentage)
  },
})
