import { defineLaw } from "../Factory"
import { MrdEuro } from "../types"
import { changeMioPsgrKmBy, linear } from "../lawTools"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Nahverkehr Ausbauen",
  description: "Der Ausbau des Nahverkehrs wird bundesweit stärker bezuschusst.",

  effects(data, startYear, currentYear): Change[] {
    const relCapacity = (data.publicLocalCapacity / data.publicLocalUsage) * 100
    const potentialUsageIncrease = relCapacity >= 105 ? 0.01 * data.publicLocalUsage : 0
    // Need to use change...By for carUsage here, to ensure it does not fall below zero:
    const usageIncrease = -changeMioPsgrKmBy(data.carUsage, -potentialUsageIncrease)

    const yearsActive = currentYear - startYear
    return [
      modify("stateDebt").byValue(3 as MrdEuro),
      modify("publicLocalCapacity").byPercent(1),
      modify("publicLocalUsage").byValue(usageIncrease),
      modify("carUsage").byValue(-usageIncrease),
      modify("popularity").byValue(2).if(yearsActive >= 5),
    ]
  },

  priority(game) {
    const mobilityPercentage = (game.values.co2emissionsMobility / game.values.co2emissions) * 100
    return linear(20, 35, mobilityPercentage)
  },
})
