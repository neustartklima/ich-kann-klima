import { defineLaw } from "../Factory"
import { MrdEuro, WritableBaseParams } from "../types"
import { changeEmissionsBy, changePercentBy, linear } from "../lawTools"

export default defineLaw({
  title: "Nahverkehr Ausbauen",
  description: "Der Ausbau des Nahverkehrs wird bundesweit stärker bezuschusst.",
  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    const costsPerYear: MrdEuro = 3
    const yearsActive = currentYear - startYear
    if (yearsActive >= 5) {
      return {
        stateDebt: costsPerYear,
        co2emissionsMobility: changeEmissionsBy(data.co2emissionsMobility, -2),
        popularity: changePercentBy(data.popularity, 2),
      }
    } else {
      return {
        stateDebt: costsPerYear,
      }
    }
  },
  priority(game) {
    const mobilityPercentage = (game.values.co2emissionsMobility / game.values.co2emissions) * 100
    return linear(25, 35, mobilityPercentage)
  },
})
