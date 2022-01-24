import { Change, modify, transfer } from "../../params"
import { Percent } from "../../types"
import { defineLaw, monthsEffort } from "../LawsTypes"
import { linear } from "../lawTools"

export default defineLaw({
  title: "Autos in Innenstädten verbieten",
  description:
    "Die Innenstädte der großen Städte werden zu Autofreien Zonen erklärt und begrünt, sowie Fahrrad und Fußgängerzonen eingerichtet.",

  effort(game) {
    return monthsEffort(12)
  },

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
