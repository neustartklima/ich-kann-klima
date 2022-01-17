import { date } from "../lib/Temporal"
import { dispatch } from "../params"
import { defineEvent, specialEventProbs } from "./EventsTypes"

export default defineEvent({
  title: "Happy New Year!",
  description: `Mal wieder geht ein ereignisreiches Jahr zuende. Die Regierung hat eine Bilanz ihrer bisherigen Tätigkeit aufgestellt
    und kommt zu dem nicht weiter überraschenden Ergebnis, dass sie sehr wirkungsvolle Gesetze beschlossen hat. Die Opposition -
    ebenfalls nicht überraschend - sieht die Sache anders und verurteilt die Regierungserklärung als haltlos.
  `,

  apply() {
    return [dispatch("advanceYear")]
  },

  probability(game, event) {
    if (date(game.currentDate).getYear() > game.currentYear) {
      return specialEventProbs.newYear
    }
    return 0
  },
})
