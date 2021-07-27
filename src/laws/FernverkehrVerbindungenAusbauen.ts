import { defineLaw } from "../Factory"
import { changeMioPsgrKmBy, linear } from "../lawTools"
import { MrdEuro, Percent } from "../types"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Fernverkehr Verbindungen ausbauen",
  description: "Der Ausbau des öffentlichen Fernverkehrs wird bundesweit stärker Bezuschusst und Vorangetrieben",
  
  effects(data): Change[] {
    const relCapacity = (data.publicNationalCapacity / data.publicNationalUsage) * 100
    const potentialUsageIncrease = relCapacity >= 105 ? 0.015 * data.publicNationalUsage : 0
    // Need to use change...By for carUsage here, to ensure it does not fall below zero:
    const usageIncrease = -changeMioPsgrKmBy(data.carUsage, -potentialUsageIncrease)

    return [
      modify("stateDebt").byValue(6 as MrdEuro),
      modify("publicNationalCapacity").byValue(0.01 * data.publicNationalCapacity),
      modify("publicNationalUsage").byValue(0.667 * usageIncrease),
      modify("carUsage").byValue(-usageIncrease),
      modify("publicLocalUsage").byValue(0.333 * usageIncrease),
      modify("popularity").byPercent(2),
    ]
  },

  priority(game) {
    const relCapacity: Percent = (game.values.publicNationalCapacity / game.values.publicNationalUsage) * 100
    return linear(150, 80, relCapacity)
  },
})
