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

  priority(game) {
    // More likely if lots of Gas usage leads to dependency of Russia etc..
    const electricityGasAtStart = 56.77 // TODO: Put constants in central place
    const gasChangeRelStart = game.values.electricityGas - electricityGasAtStart
    return (1000 * gasChangeRelStart) / electricityGasAtStart
  },
})
