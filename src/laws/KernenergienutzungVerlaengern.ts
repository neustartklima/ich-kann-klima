import { defineLaw } from "../Factory"
import { MrdEuro, TWh } from "../types"
import { changePercentBy, linear } from "../lawTools"
import { createBaseValues, defaultValues, WritableBaseParams } from "../params"

const electricityGasAtStart: TWh = createBaseValues(defaultValues).electricityGas

export default defineLaw({
  title: "Kernenergienutzung verlängern",
  description: "Kernkraftwerke länger nutzen, wieder in Betrieb nehmen und neu bauen.",
  removeLawsWithLabels: ["Kernenergie"],

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    return {
      electricityNuclear: (104.3 as TWh) - data.electricityNuclear,
      stateDebt: -2.5 as MrdEuro,
      popularity: changePercentBy(data.popularity, -4),
    }
  },

  priority(game) {
    return linear(electricityGasAtStart, 1.1 * electricityGasAtStart, game.values.electricityGas)
  },
})
