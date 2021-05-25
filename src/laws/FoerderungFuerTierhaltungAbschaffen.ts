import { LawDefinition, WritableBaseParams } from "../types"

export default {
  title: "Förderung für Tierhaltung abschaffen",
  description: "Subventionen für Tierhaltung werden ersatzlos gestrichen",

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    if (startYear === currentYear) {
      return {
        co2emissionsAgriculture: -Math.min(data.co2emissionsAgriculture, 10),
        stateDebt: -10,
        popularity: -0.2 * data.popularity,
      }
    } else {
      return {
        stateDebt: -10,
      }
    }
  },

  priority(game) {
    return 100 - game.values.unemployment / 100 // Not allowed if unemployment over 10 000 000
  },
} as LawDefinition
