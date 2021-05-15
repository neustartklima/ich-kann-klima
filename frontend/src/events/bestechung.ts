import { createEvent } from "../Factory"
import { Law } from "../types"
import { store } from "../store"
import { getLaw } from "../LawProposer"
import { rejectLaw } from "../store/actions"

// if proposed laws contain at least one with the words 'subvention' and 'abbau', this event might occur
function getFirstMatchingLaw(laws: Law[]) {
  return laws.find((law) => law.title.match(/subvention/i) && law.title.match(/abbau/i))
}

export default createEvent({
  title: "Anruf von befreundetem Unternehmer",
  description: `Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und möchte dich in seine
    Ferienvilla auf Sardinien einladen. Er geht natürlich davon aus, dass du dem Gesetzentwurf zum Abbau von Subventionen
    nicht zustimmen wirst.
  `,

  apply(game) {
    const law = getFirstMatchingLaw(game.proposedLaws.map(getLaw))
    if (law) {
      store.dispatch(rejectLaw(law.id))
    }
  },

  probability(game) {
    const law = getFirstMatchingLaw(game.proposedLaws.map(getLaw))
    return law ? Math.random() : 0
  },
})
