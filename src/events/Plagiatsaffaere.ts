import { markdown } from "../lib/utils"
import { modify } from "../params"
import { defineEvent, lessTimeHasPassed } from "./EventsTypes"

export default defineEvent({
  title: "Plagiatsaffäre",
  description: `Während des Wahlkampfs wirft dir die Opposition Plagiatsverletzungen vor. Das kostet Wählerstimmen.`,

  apply() {
    return [modify("popularity").byValue(-10)]
  },

  probability(game, event) {
    if (lessTimeHasPassed(game, event, { years: 3, months: 10 })) {
      return 0
    }
    return 0.5
  },

  citations: [],
  details: markdown`

  `,
  internals: markdown`

  `,
})
