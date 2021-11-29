import { defineLaw } from "./LawsTypes"
import { MrdEuro, TWh } from "../types"
import { linear } from "./lawTools"
import { Change, createBaseValues, defaultValues, modify } from "../params"

const electricityGasAtStart: TWh = createBaseValues(defaultValues).electricityGas

export default defineLaw({
  title: "Kernenergienutzung verlängern",
  description: "Kernkraftwerke länger nutzen, wieder in Betrieb nehmen und neu bauen.",
  removeLawsWithLabels: ["Kernenergie"],

  effects(): Change[] {
    return [
      modify("electricityNuclear").setValue(104.3 as TWh),
      modify("stateDebt").byValue(-2.5 as MrdEuro),
      modify("popularity").byValue(-4),
    ]
  },

  priority(game) {
    return linear(electricityGasAtStart, 1.1 * electricityGasAtStart, game.values.electricityGas)
  },
})
