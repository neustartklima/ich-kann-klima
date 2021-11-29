import { startYear } from "../constants"
import { defineEvent } from "./EventsTypes"
import { dispatch } from "../params"
import { specialEventProbs } from "./EventsTypes"

export default defineEvent({
  title: "Happy New Year!",
  description: `Mal wieder geht ein ereignisreiches Jahr zuende. Die Regierung hat eine Bilanz ihrer bisherigen Tätigkeit aufgestellt
    und kommt zu dem nicht weiter überraschenden Ergebnis, dass sie sehr wirkungsvolle Gesetze beschlossen hat. Die Opposition -
    ebenfalls nicht überraschend - sieht die Sache anders und verurteilt die Regierungserklärung als haltlos.
  `,

  apply() {
    return [dispatch("advanceYear")]
  },

  probability(game) {
    const pastActions = (game.currentYear - startYear) * 4
    const numOfActions = game.actionCount - pastActions
    if (numOfActions < 3) {
      return 0
    }
    if (numOfActions >= 5) {
      return specialEventProbs.newYear
    }

    // After 3 decisions, the year might end, after 5 decisions, the probability is 100%
    const probability = Math.round((numOfActions - 2) * 33.3) / 100
    return Math.min(1, probability)
  },
})
