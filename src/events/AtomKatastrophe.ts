import { defineEvent } from "../Factory"
import { markdown } from "../lib/utils"
import { dispatch } from "../params"

export default defineEvent({
  title: "Atom-Katastrophe",
  description: `Atomkraftwerk Tihange fliegt in die Luft`,

  apply() {
    return [dispatch("gameOver")]
  },

  probability(game) {
    const law = game.acceptedLaws.find((l) => l.lawId === "KernenergienutzungVerlaengern")
    return law ? Math.random() : 0
  },

  laws: [],
  citations: [],
  details: markdown`

  `,
  internals: markdown`

  `,
})
