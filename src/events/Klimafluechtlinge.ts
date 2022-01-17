import { markdown } from "../lib/utils"
import { modify } from "../params"
import { defineEvent } from "./EventsTypes"

export default defineEvent({
  title: "Klimaflüchtlinge",
  description: `Durch weltweiten Temperaturanstieg kommt es international zu mehr Klimaflüchtlingen - auch in Deutschland. Das Kostet die Staatskasse.`,

  apply() {
    return [modify("stateDebt").byValue(10)]
  },

  probability(game, event) {
    return game.values.co2budget < 500 ? 0.2 : 0
  },

  laws: [],
  citations: [],
  details: markdown`

  `,
  internals: markdown`

  `,
})
