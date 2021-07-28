import { defineLaw } from "../Factory"
import { linear } from "../lawTools"
import { Percent } from "../types"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Autos in Innenstädten verbieten",
  description:
    "Die Innenstädte der großen Städte werden zu Autofreien Zonen erklärt und begrünt, sowie Fahrrad und Fußgängerzonen eingerichtet.",

  effects(data, startYear, currentYear): Change[] {
    var popularityChange = -2
    if (data.publicLocalCapacity > data.publicLocalUsage * 1.2) {
      popularityChange = -1
      if (startYear + 2 < currentYear) {
        popularityChange = 2
      }
    }

    // Need to use the carModifier with byValue() here, to ensure it does not fall below zero:
    const carModifier = modify("carUsage").byValue(-0.1 * data.publicLocalUsage).if(startYear === currentYear)
    const carChange = carModifier.getChange(data)

    return [
      modify("popularity").byValue(popularityChange),
      carModifier,
      modify("publicLocalUsage").byValue(-carChange),
    ]
  },

  priority(game) {
    const relCapacity: Percent = (game.values.publicLocalCapacity / game.values.publicLocalUsage) * 100
    return linear(90, 120, relCapacity)
  },
})
