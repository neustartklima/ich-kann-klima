import { createEvent } from "../Factory"
import { useStore } from "../store"

const store = useStore()

// if proposed laws contain at least one with the words 'subvention' and 'abbau', this event might occur
function getFirstMatchingLaw() {
  return store.getters.proposedLaws.find((law) => law.title.match(/subvention/i) && law.title.match(/abbau/i))
}

export default createEvent({
  title: "Anruf von befreundetem Unternehmer",
  description: `Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und möchte dich in seine
    Ferienvilla auf Sardinien einladen. Er geht natürlich davon aus, dass du dem Gesetzentwurf zum Abbau von Subventionen
    nicht zustimmen wirst.
  `,

  apply(game) {
    const law = getFirstMatchingLaw()
    if (law) {
      store.dispatch("rejectLaw", { lawId: law.id })
    }
  },

  probability(game) {
    const law = getFirstMatchingLaw()
    return law ? Math.random() : 0
  },
})
