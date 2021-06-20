import { defineLaw } from "../Factory"
import { MioTons, MrdEuro, Percent, WritableBaseParams } from "../types"

export default defineLaw({
  title: "Nahverkehr Ausbauen",
  description: "Der Ausbau des Nahverkehrs wird bundesweit stärker bezuschusst.",
  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    const costsPerYear: MrdEuro = 3
    const yearsActive = currentYear - startYear
    if (yearsActive >= 5) {
      return {
        stateDebt: costsPerYear,
        co2emissionsMobility: Math.max(-data.co2emissionsMobility, -2 as MioTons),
        popularity: Math.min(100 - data.popularity, 2 as Percent),
      }
    } else {
      return {
        stateDebt: costsPerYear,
      }
    }
  },
  priority(game) {
    const mobilityFraction = game.values.co2emissionsMobility / game.values.co2emissions
    return 1000 * (mobilityFraction - 0.25)
  },
})
