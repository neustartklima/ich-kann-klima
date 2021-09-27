import { defineEvent } from "../Factory"
import { linear } from "../lawTools"
import { markdown } from "../lib/utils"
import { modify } from "../params"

export default defineEvent({
  title: "Dürreperiode",
  description: `Die anhaltende Trockenheit und die damit verbundene Wasserknappheit hatte Rationierungen zur Folge. Die Ernteausfälle sind enorm.`,

  apply() {
    return [
      modify("gdp").byValue(-100),
      modify("popularity").byValue(-10),
    ]
  },

  probability(game) {
    return Math.min(1, linear(400, 0, game.values.co2budget) / 100)
  },

  laws: [],
  citations: [],
  details: markdown`

  `,
  internals: markdown`
  `,
})
