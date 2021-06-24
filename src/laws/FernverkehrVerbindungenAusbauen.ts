import { defineLaw } from "../Factory"
import { changeMioPsgrKmBy, changePercentBy, linear } from "../lawTools"
import { MrdEuro, Percent } from "../types"

export default defineLaw({
  title: "Fernverkehr Verbindungen ausbauen",
  description: "Der Ausbau des öffentlichen Fernverkehrs wird bundesweit stärker Bezuschusst und Vorangetrieben",
  effects(data, startYear, currentYear) {
    const relCapacity = (data.longdistanceTransportCapacity / data.longdistanceTransportUsage) * 100
    const potentialUsageIncrease = relCapacity >= 105 ? 0.015 * data.longdistanceTransportUsage : 0
    // Need to use change...By for carUsage here, to ensure it does not fall below zero:
    const usageIncrease = -changeMioPsgrKmBy(data.carUsage, -potentialUsageIncrease)

    return {
      stateDebt: 6 as MrdEuro,
      longdistanceTransportCapacity: 0.01 * data.longdistanceTransportCapacity,
      longdistanceTransportUsage: 0.667 * usageIncrease,
      carUsage: -usageIncrease,
      shortdistanceTransportUsage: 0.333 * usageIncrease,
      popularity: changePercentBy(data.popularity, 2),
    }
  },
  priority(game) {
    const relCapacity: Percent =
      (game.values.longdistanceTransportCapacity / game.values.longdistanceTransportUsage) * 100
    return linear(150, 80, relCapacity)
  },
})
