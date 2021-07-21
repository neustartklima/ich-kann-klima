import { defineLaw } from "../Factory"
import { TWh } from "../types"
import { WritableBaseParams } from "../params"

export default defineLaw({
  title: "Initial: Atomausstieg",
  description: "Atomausstieg finded wie beschlossen 2022 statt",
  labels: ["hidden", "initial", "Kernenergie"],

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    const mapping: Record<number, number> = {
      2021: 60.45 as TWh,
      2022: 30.21 as TWh,
    }
    const newValue = mapping[currentYear] || 0
    return {
      electricityNuclear: newValue - data.electricityNuclear,
    }
  },

  priority(game) {
    return 0
  },
})
