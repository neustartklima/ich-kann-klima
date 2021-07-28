import { defineLaw } from "../Factory"
import { linear } from "../lawTools"
import { MrdEuro, Percent } from "../types"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Fernverkehr Verbindungen ausbauen",
  description: "Der Ausbau des öffentlichen Fernverkehrs wird bundesweit stärker Bezuschusst und Vorangetrieben",

  effects(data): Change[] {
    const relCapacity = (data.publicNationalCapacity / data.publicNationalUsage) * 100

    // Need to use carModifier with byValue() here, to ensure it does not fall below zero:
    const carModifier = modify("carUsage").byValue(0.015 * data.publicNationalUsage).if(relCapacity >= 105)
    const carChange = carModifier.getChange(data)

    return [
      modify("stateDebt").byValue(6 as MrdEuro),
      modify("publicNationalCapacity").byPercent(1),
      carModifier,
      modify("publicNationalUsage").byValue(0.667 * -carChange),
      modify("publicLocalUsage").byValue(0.333 * -carChange),
      modify("popularity").byValue(2),
    ]
  },

  priority(game) {
    const relCapacity: Percent = (game.values.publicNationalCapacity / game.values.publicNationalUsage) * 100
    return linear(150, 80, relCapacity)
  },
})
