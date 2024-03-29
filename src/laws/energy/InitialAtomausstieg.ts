import { defineLaw } from "../LawsTypes"
import { TWh } from "../../types"
import { Change, modify } from "../../params"

export default defineLaw({
  title: "Initial: Atomausstieg",
  description: "Atomausstieg finded wie beschlossen 2022 statt",
  labels: ["hidden", "initial", "Kernenergie"],

  effects(game, startYear, currentYear): Change[] {
    const mapping: Record<number, number> = {
      2021: 60.45 as TWh,
      2022: 30.21 as TWh,
    }
    const newValue = mapping[currentYear] || 0
    return [modify("electricityNuclear").setValue(newValue)]
  },

  priority(game) {
    return 0
  },
})
