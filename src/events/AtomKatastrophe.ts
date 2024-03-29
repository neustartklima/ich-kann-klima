import { markdown } from "../lib/utils"
import { dispatch } from "../params"
import { defineEvent } from "./EventsTypes"

export default defineEvent({
  title: "Atom-Katastrophe",
  description: `Atomkraftwerk Tihange fliegt in die Luft`,

  apply() {
    return [dispatch("gameOver")]
  },

  probability(game) {
    const law = game.acceptedLaws.find((l) => l.lawId === "KernenergienutzungVerlaengern")
    return law ? 0.5 : 0
  },

  citations: [],
  details: markdown`

  `,
  internals: markdown`

  `,
})
