import { defineLaw } from "../Factory"
import { MioTons, MrdEuro, Percent, WritableBaseParams } from "../types"

export default defineLaw({
  title: "Förderung für Tierhaltung abschaffen",
  description: "Subventionen für Tierhaltung werden ersatzlos gestrichen",

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    if (startYear === currentYear) {
      return {
        co2emissionsAgriculture: Math.max(-data.co2emissionsAgriculture, -10 as MioTons),
        stateDebt: -10 as MrdEuro,
        popularity: Math.max(-data.popularity, -20 as Percent),
      }
    } else {
      return {
        stateDebt: -10 as MrdEuro,
      }
    }
  },

  priority(game) {
    return 100 - game.values.unemployment / 100 // Not allowed if unemployment over 10 000 000
  },
})
