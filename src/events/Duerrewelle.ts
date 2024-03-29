import { linear } from "../laws/lawTools"
import { markdown } from "../lib/utils"
import { modify } from "../params"
import { defineEvent } from "./EventsTypes"

export default defineEvent({
  title: "Dürreperiode",
  description: `Die anhaltende Trockenheit und die damit verbundene Wasserknappheit hatte Rationierungen zur Folge. Die Ernteausfälle sind enorm.`,

  apply() {
    return [modify("gdp").byValue(-100), modify("popularity").byValue(-10)]
  },

  probability(game, event) {
    return Math.min(1, linear(400, 0, game.values.co2budget) / 100)
  },

  citations: [],
  details: markdown`

  `,
  internals: markdown`

  `,
})
