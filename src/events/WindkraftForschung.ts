import { lawIsAccepted } from "../laws/lawTools"
import { markdown } from "../lib/utils"
import { modify } from "../params"
import { defineEvent, lessTimeHasPassed } from "./EventsTypes"

export default defineEvent({
  title: "Durchbruch in der Windenergie-Forschung",
  description: `Wissenschaftler haben eine neue Art der Energiegewinnung durch Wind entwickelt, mit der bestehende Windturbinen deutlich mehr Leistung bringen.`,

  apply() {
    return [modify("popularity").byValue(4), modify("electricityWindEfficiency").byPercent(30)]
  },

  probability(game, event) {
    if (lessTimeHasPassed(game, event, { years: 3, months: 7 })) {
      return 0
    }
    const factor = lawIsAccepted(game, "WindkraftVereinfachen") ? 1.5 : 1
    if (lawIsAccepted(game, "AusschreibungsverfahrenfuerWindkraftVerachtfachen")) {
      return 0.5 * factor
    }
    if (lawIsAccepted(game, "AusschreibungsverfahrenfuerWindkraftVervierfachen")) {
      return 0.4 * factor
    }
    if (lawIsAccepted(game, "AusschreibungsverfahrenfuerWindkraftVerdoppeln")) {
      return 0.3 * factor
    }
    return 0
  },

  citations: [],
  details: markdown`

  `,
  internals: markdown`

  `,
})
