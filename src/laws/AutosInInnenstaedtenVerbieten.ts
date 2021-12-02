import { defineLaw } from "./LawsTypes"
import { linear } from "./lawTools"
import { Percent } from "../types"
import { Change, modify, transfer } from "../params"

export default defineLaw({
  title: "Autos in Innenstädten verbieten",
  description:
    "Die Innenstädte der großen Städte werden zu Autofreien Zonen erklärt und begrünt, sowie Fahrrad und Fußgängerzonen eingerichtet.",

  effects(game, startYear, currentYear): Change[] {
    var popularityChange = -2
    if (game.values.publicLocalCapacity > game.values.publicLocalUsage * 1.2) {
      popularityChange = -1
      if (startYear + 2 < currentYear) {
        popularityChange = 2
      }
    }

    // Need to use the carModifier with byValue() here, to ensure it does not fall below zero:

    return [
      modify("popularity").byValue(popularityChange),
      transfer("publicLocalUsage", "carUsage")
        .byPercent(10)
        .if(startYear === currentYear),
    ]
  },

  priority(game) {
    const relCapacity: Percent = (game.values.publicLocalCapacity / game.values.publicLocalUsage) * 100
    return linear(90, 120, relCapacity)
  },
})
