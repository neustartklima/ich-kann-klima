import { defineLaw } from "../Factory"
import { MrdEuro, WritableBaseParams } from "../types"
import { changeEmissionsBy, changePercentBy } from "../lawTools"

export default defineLaw({
  title: "Förderung für Tierhaltung abschaffen",
  description: "Subventionen für Tierhaltung werden ersatzlos gestrichen",

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    if (startYear === currentYear) {
      return {
        co2emissionsAgriculture: changeEmissionsBy(data.co2emissionsAgriculture, -10),
        stateDebt: -10 as MrdEuro,
        popularity: changePercentBy(data.popularity, -20),
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
