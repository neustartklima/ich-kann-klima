import { defineLaw } from "../Factory"
import { changePercentBy, lawIsAccepted, linear } from "../lawTools"
import { GramPerPsgrKm, Percent, WritableBaseParams } from "../types"

export default defineLaw({
  title: "Tempolimit 100 auf Autobahnen",
  description: "Auf den Autobahnen gilt ab sofort ein allgemeines Tempolimit von 100 km/h.",
  labels: ["TempolimitAutobahn"],
  removeLawsWithLabels: ["TempolimitAutobahn"],

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    const newCarEmissionFactor: GramPerPsgrKm = 154.1
    const popChange = data.carEmissionFactor > newCarEmissionFactor ? -1 : 0
    return {
      popularity: changePercentBy(data.popularity, popChange),
      carEmissionFactor: newCarEmissionFactor - data.carEmissionFactor,
    }
  },

  priority(game) {
    if (!lawIsAccepted(game, "Tempolimit120AufAutobahnen")) return 0
    const v = game.values
    const relCarPercentage: Percent = (v.carUsage / v.passengerTransportUsage) * 100
    return linear(10, 60, relCarPercentage)
  },
})