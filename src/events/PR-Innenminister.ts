import { markdown } from "../lib/utils"
import { modify } from "../params"
import { defineEvent, lessTimeHasPassed } from "./EventsTypes"

export default defineEvent({
  title: "PR-Skandal",
  description: `Auf dem Computer deines Innenministers wurden durch Hackerangriff rechtsradikale Inhalte gefunden.`,

  apply() {
    return [modify("popularity").byValue(-10)]
  },

  probability(game, event) {
    if (lessTimeHasPassed(game, event, { years: 20 }, { years: 5, months: 11 })) {
      return 0
    }
    return 0.3
  },

  citations: [],
  details: markdown`

  `,
  internals: markdown`

  `,
})
