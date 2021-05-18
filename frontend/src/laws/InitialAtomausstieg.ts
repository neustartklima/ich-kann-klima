import { createLaw } from "../Factory"

export default createLaw(import.meta.url, {
  title: "Atomausstieg finded wie beschlossen 2022 statt",
  description: "",
  labels: ["hidden", "initial", "Kernenergie"],

  effects(data, startYear, currentYear) {
    const mapping: Record<number, number> = {
      2021: 60.45,
      2022: 30.21,
    }
    const newValue = mapping[currentYear] || 0
    return {
      electricityNuclear: newValue - data.electricityNuclear,
    }
  },
})
