import { defineEvent } from "../Factory"

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
    const amountOfLaws = game?.acceptedLaws.filter((law) => law.effectiveSince == game.currentYear).length || 0
    if (amountOfLaws < 3 ) {
      return 0
    }
    // After 3 decisions, the year might end, after 5 decisions, the probability is 100%
    const probability = amountOfLaws * 0.1 + 0.5
    return Math.max(Math.random() + probability)
  },
})
