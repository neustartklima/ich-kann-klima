import { idsToLaws, Law } from "../laws"
import { dispatch } from "../params"
import { defineEvent, lessTimeHasPassed } from "./EventsTypes"

// if proposed laws contain at least one with the words 'subvention' and 'abbau', this event might occur
function getFirstMatchingLaw(proposedLaws: Law[]) {
  return proposedLaws.find((law) => law.title.match(/subvention/i) && law.title.match(/abbau/i))
}

export default defineEvent({
  title: "Anruf von befreundetem Unternehmer",
  description: `Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und möchte dich in seine
    Ferienvilla auf Sardinien einladen. Er verlässt sich natürlich darauf, dass du dem Gesetzentwurf zum Abbau von Subventionen
    nicht zustimmen wirst.
  `,

  apply(game) {
    if (game) {
      const law = getFirstMatchingLaw(idsToLaws(game.proposedLaws))
      if (law) {
        return [dispatch("rejectLaw", { lawId: law.id })]
      }
    }
    return []
  },

  probability(game, event) {
    if (lessTimeHasPassed(game, event, { years: 3, months: 8 })) {
      return 0
    }
    const law = getFirstMatchingLaw(idsToLaws(game.proposedLaws))
    return law ? 0.5 : 0
  },
})
