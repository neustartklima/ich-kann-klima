import { createLaw } from "../Factory"
import { BaseParams, LawDefinition } from "../types"

export default createLaw(import.meta.url, {
  title: "Kernenergienutzung verlängern",
  description: "Kernkraftwerke länger nutzen, wieder in Betrieb nehmen und neu bauen.",
  removeLawsWithLabels: ["Kernenergie"],

  effects(data, startYear, currentYear) {
    const subventions = 2500 // Mio €

    return {
      electricityNuclear: 104.3 - data.electricityNuclear,
      stateDebt: subventions,
      popularity: -data.popularity * 0.1,
    }
  },
})
