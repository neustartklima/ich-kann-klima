import { defineLaw } from "../Factory"
import { changeMioPsgrKmBy, changePercentBy, linear } from "../lawTools"
import { MioPsgrKm, Percent } from "../types"
import { WritableBaseParams } from "../params"

export default defineLaw({
  title: "Autos in Innenstädten verbieten",
  description:
    "Die Innenstädte der großen Städte werden zu Autofreien Zonen erklärt und begrünt, sowie Fahrrad und Fußgängerzonen eingerichtet.",

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    var popularityChange = changePercentBy(data.popularity, -2)
    if (data.publicLocalCapacity > data.publicLocalUsage * 1.2) {
      popularityChange = changePercentBy(data.popularity, -1)
      if (startYear + 2 < currentYear) popularityChange = changePercentBy(data.popularity, 2)
    }

    const potentialUsageIncrease = (startYear === currentYear ? 0.1 * data.publicLocalUsage : 0) as MioPsgrKm
    // Need to use change...By for carUsage here, to ensure it does not fall below zero:
    const usageIncrease = -changeMioPsgrKmBy(data.carUsage, -potentialUsageIncrease)

    return {
      popularity: popularityChange,
      carUsage: -usageIncrease,
      publicLocalUsage: usageIncrease,
    }
  },

  priority(game) {
    const relCapacity: Percent = (game.values.publicLocalCapacity / game.values.publicLocalUsage) * 100
    return linear(90, 120, relCapacity)
  },
})
