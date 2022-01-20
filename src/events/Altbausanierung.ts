import { linear } from "../laws/lawTools"
import { defineEvent, lessTimeHasPassed } from "./EventsTypes"

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

  probability(game, event) {
    if (lessTimeHasPassed(game, event, { years: 2, months: 2 })) {
      return 0
    }
    const buildingsPercentage = (game.values.co2emissionsBuildings / game.values.co2emissions) * 100
    return Math.min(1, linear(15, 30, buildingsPercentage) / 100)
  },
})
