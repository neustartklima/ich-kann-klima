import { Change, createBaseValues, defaultValues, modify } from "../../params"
import { MrdEuro, TWh } from "../../types"
import { defineLaw, monthsEffort } from "../LawsTypes"
import { currentEventIsInList, linear } from "../lawTools"

const electricityGasAtStart: TWh = createBaseValues(defaultValues).electricityGas

export default defineLaw({
  title: "Kernenergienutzung verlängern",
  description: "Kernkraftwerke länger nutzen, wieder in Betrieb nehmen und neu bauen.",
  removeLawsWithLabels: ["Kernenergie"],

  effort(game) {
    return monthsEffort(8)
  },

  effects(): Change[] {
    return [
      modify("electricityNuclear").setValue(104.3 as TWh),
      modify("stateDebt").byValue(-2.5 as MrdEuro),
      modify("popularity").byValue(-4),
    ]
  },

  priority(game) {
    if (currentEventIsInList(game, ["EnergieStrategie"])) {
      return 100
    }
    return linear(electricityGasAtStart, 1.1 * electricityGasAtStart, game.values.electricityGas)
  },
})
