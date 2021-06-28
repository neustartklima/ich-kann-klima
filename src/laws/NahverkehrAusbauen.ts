import { defineLaw } from "../Factory"
import { MrdEuro, WritableBaseParams } from "../types"
import { changeMioPsgrKmBy, changePercentBy, linear } from "../lawTools"

export default defineLaw({
  title: "Nahverkehr Ausbauen",
  description: "Der Ausbau des Nahverkehrs wird bundesweit stärker bezuschusst.",
  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    const relCapacity = (data.publicLocalCapacity / data.publicLocalUsage) * 100
    const potentialUsageIncrease = relCapacity >= 105 ? 0.01 * data.publicLocalUsage : 0
    // Need to use change...By for carUsage here, to ensure it does not fall below zero:
    const usageIncrease = -changeMioPsgrKmBy(data.carUsage, -potentialUsageIncrease)

    const yearly: Partial<WritableBaseParams> = {
      stateDebt: 3 as MrdEuro,
      publicLocalCapacity: 0.01 * data.publicLocalCapacity,
      publicLocalUsage: usageIncrease,
      carUsage: -usageIncrease,
    }

    const yearsActive = currentYear - startYear
    if (yearsActive >= 5) {
      return {
        ...yearly,
        popularity: changePercentBy(data.popularity, 2),
      }
    } else {
      return {
        ...yearly,
      }
    }
  },
  priority(game) {
    const mobilityPercentage = (game.values.co2emissionsMobility / game.values.co2emissions) * 100
    return linear(20, 35, mobilityPercentage)
  },
})
