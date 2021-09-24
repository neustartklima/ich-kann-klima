import { defineEvent } from "../Factory"
import { markdown } from "../lib/utils"
import { modify } from "../params"

export default defineEvent({
  title: "PR-Skandal",
  description: `Auf dem Computer deines Innenministers wurden durch Hackerangriff rechtsradikale Inhalte gefunden.`,

  apply() {
    return [modify("popularity").byValue(-2)]
  },

  probability() {
    return .3
  },

  laws: [],
  citations: [],
  details: markdown`

  `,
  internals: markdown`
    Klimaaktivisten steigen dir aufs Dach! Aber bei den Lobbyisten steigt deine Beliebtheit. Das gleicht deinen Popularitätsverlust etwas aus.
  `,
})
