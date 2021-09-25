import { defineEvent } from "../Factory"
import { markdown } from "../lib/utils"
import { modify } from "../params"

export default defineEvent({
  title: "Plagiatsaffäre",
  description: `Während des Wahlkampfs wirft dir die Opposition Plagiatsverletzungen vor. Das kostet Wählerstimmen.`,

  apply() {
    return [modify("popularity").byValue(-10)]
  },

  probability(game) {
    return 0.5
  },

  laws: [],
  citations: [],
  details: markdown`

  `,
  internals: markdown`

  `,
})
