import { defineEvent } from "./EventsTypes"
import { lawIsAccepted } from "../laws/lawTools"
import { markdown } from "../lib/utils"
import { modify } from "../params"

export default defineEvent({
  title: "Autobatterie explodiert",
  description: `Nachdem eine Auto-Batterie während Fahrt explodiert ist, zweifeln Käufer beim Kauf von E-Autos, der Absatz sinkt. Die Industrie fordert finanzielle Unterstützung, um den Standort zu sichern`,

  apply() {
    return [modify("popularity").byValue(-2), modify("stateDebt").byValue(10)]
  },

  probability(game) {
    if (lawIsAccepted(game, "ElektromobilitaetFoerdern")) {
      return 0.2
    } else {
      return 0
    }
  },

  laws: [],
  citations: [],
  details: markdown`

  `,
  internals: markdown`

  `,
})
