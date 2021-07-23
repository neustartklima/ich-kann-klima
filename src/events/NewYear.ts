import { defineEvent } from "../Factory"
import { getAcceptedLaw } from "../LawProposer"

export default defineEvent({
  title: "Happy New Year!",
  description: `Mal wieder geht ein ereignisreiches Jahr zuende. Die Regierung hat eine Bilanz ihrer bisherigen Tätigkeit aufgestellt
    und kommt zu dem nicht weiter überraschenden Ergebnis, dass sie sehr wirkungsvolle Gesetze beschlossen hat. Die Opposition -
    ebenfalls nicht überraschend - sieht die Sache anders und verurteilt die Regierungserklärung als haltlos.
  `,

  apply(context) {
    context.dispatch("advanceYear")
  },

  probability(store) {
    const game = store.state.game
    const acceptedLaws = game?.acceptedLaws
      .map(getAcceptedLaw)
      .filter((law) => !law.labels?.includes("initial") && law.effectiveSince == game.currentYear + 1)

    const numOfLaws = acceptedLaws && acceptedLaws.length || 0
    if (numOfLaws < 3) {
      return 0
    }

    // After 3 decisions, the year might end, after 5 decisions, the probability is 100%
    const probability = Math.round((numOfLaws - 2) * 33.3) / 100
    return Math.min(1, probability)
  },
})
