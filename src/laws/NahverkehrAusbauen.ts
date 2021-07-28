import { defineLaw } from "../Factory"
import { MrdEuro } from "../types"
import { linear } from "../lawTools"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Nahverkehr Ausbauen",
  description: "Der Ausbau des Nahverkehrs wird bundesweit stärker bezuschusst.",

  effects(data, startYear, currentYear): Change[] {
    const relCapacity = (data.publicLocalCapacity / data.publicLocalUsage) * 100

    // Need to use carModifier with byValue() here, to ensure it does not fall below zero:
    const carModifier = modify("carUsage").byValue(-0.01 * data.publicLocalUsage).if(relCapacity >= 105)
    const carChange = carModifier.getChange(data)

    const yearsActive = currentYear - startYear
    return [
      modify("stateDebt").byValue(3 as MrdEuro),
      modify("publicLocalCapacity").byPercent(1),
      modify("publicLocalUsage").byValue(-carChange),
      carModifier,
      modify("popularity").byValue(2).if(yearsActive >= 5),
    ]
  },

  priority(game) {
    const mobilityPercentage = (game.values.co2emissionsMobility / game.values.co2emissions) * 100
    return linear(20, 35, mobilityPercentage)
  },
})
