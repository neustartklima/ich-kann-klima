import { defineEvent } from "../Factory"
import { markdown } from "../lib/utils"
import { modify } from "../params"

export default defineEvent({
  title: "PR-Skandal",
  description: `Du wurdest mit dem Vorstand von RWE beim Currywurst essen gesehen und fotografiert. Das Bild geht jetzt viral und führt zu einer neuen Diskussion über Lobbyismus.`,

  apply() {
    return [modify("popularity").byValue(2)]
  },

  probability() {
    // - viele Investitionen in Kohlekraft getätigt
    // - Ablehnung von Gesetzen für erneuerbare Energien
    return Math.random()
  },

  laws: [],
  citations: [],
  details: markdown`

  `,
  internals: markdown`
    Klimaaktivisten steigen dir aufs Dach! Aber bei den Lobbyisten steigt deine Beliebtheit. Das gleicht deinen Popularitätsverlust etwas aus.
  `,
})
