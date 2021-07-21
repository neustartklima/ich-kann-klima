import { defineLaw } from "../Factory"
import { changeMioPsgrKmBy, changePercentBy, linear } from "../lawTools"
import { MrdEuro, Percent } from "../types"
import { WritableBaseParams } from "../params"

export default defineLaw({
  title: "Fernverkehr Verbindungen ausbauen",
  description: "Der Ausbau des öffentlichen Fernverkehrs wird bundesweit stärker Bezuschusst und Vorangetrieben",
  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    const relCapacity = (data.publicNationalCapacity / data.publicNationalUsage) * 100
    const potentialUsageIncrease = relCapacity >= 105 ? 0.015 * data.publicNationalUsage : 0
    // Need to use change...By for carUsage here, to ensure it does not fall below zero:
    const usageIncrease = -changeMioPsgrKmBy(data.carUsage, -potentialUsageIncrease)

    return {
      stateDebt: 6 as MrdEuro,
      publicNationalCapacity: 0.01 * data.publicNationalCapacity,
      publicNationalUsage: 0.667 * usageIncrease,
      carUsage: -usageIncrease,
      publicLocalUsage: 0.333 * usageIncrease,
      popularity: changePercentBy(data.popularity, 2),
    }
  },
  priority(game) {
    const relCapacity: Percent = (game.values.publicNationalCapacity / game.values.publicNationalUsage) * 100
    return linear(150, 80, relCapacity)
  },
})
