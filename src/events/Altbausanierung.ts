import { defineEvent } from "../Factory"
import { linear } from "../lawTools"

export default defineEvent({
  title: "Gesetzesinitiative zur Sanierung von Altbauten",
  description:
    "Zur Einhaltung der Pariser Klimaschutzvereinbarung halten Experten es für unausweichlich, dass in die Sanierung von Altbauten investiert werden muss. Die konkrete Ausgestaltung wird kontrovers diskutiert.",
  laws: [
    "DaemmungAltbauAbschaffen",
    "AllesBleibtBeimAlten",
    "DaemmungAltbau1Percent",
    "DaemmungAltbau2Percent",
    "DaemmungAltbau4Percent",
  ],

  apply() {
    return []
  },

  probability(game) {
    const buildingsPercentage = (game.values.co2emissionsBuildings / game.values.co2emissions) * 100
    return Math.max(1, linear(15, 25, buildingsPercentage) / 100)
  },
})
