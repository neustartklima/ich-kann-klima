import { LawDefinition, MrdEuro, Percent, TWh, WritableBaseParams } from "../types"

export default {
  title: "Kernenergienutzung verlängern",
  description: "Kernkraftwerke länger nutzen, wieder in Betrieb nehmen und neu bauen.",
  removeLawsWithLabels: ["Kernenergie"],

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    return {
      electricityNuclear: (104.3 as TWh) - data.electricityNuclear,
      stateDebt: -2.5 as MrdEuro,
      popularity: Math.max(-data.popularity, -4 as Percent),
    }
  },

  priority(game) {
    // More likely if lots of Gas usage leads to dependency of Russia etc..
    const electricityGasAtStart: TWh = 56.77 // TODO: Put constants in central place
    const gasChangeRelStart = game.values.electricityGas - electricityGasAtStart
    return (1000 * gasChangeRelStart) / electricityGasAtStart
  },
} as LawDefinition
