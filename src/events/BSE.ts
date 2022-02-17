import { idsToLaws } from "../laws"
import { linear } from "../laws/lawTools"
import { markdown } from "../lib/utils"
import { dispatch } from "../params"
import { defineEvent, durationSinceStartWithoutEvents } from "./EventsTypes"

export default defineEvent({
  title: "Staatsoberhaupt verstorben",
  description: `Du stirbst an der neuen BSE Variante. Tja, hättest du dich mal besser um das Tierwohl gekümmert...`,

  apply() {
    return [dispatch("gameOver")]
  },

  probability(game, event): number {
    if (idsToLaws(game.acceptedLaws.map((ref) => ref.lawId)).find((law) => law.title.match(/tierwohl/i))) {
      return 0
    }

    return Math.min(1, linear(5, 10, durationSinceStartWithoutEvents(game, [event.id]).lux.as("years")) / 100)
  },

  citations: [],
  details: markdown`

  `,
  internals: markdown`
    # Voraussetzungen

    Kann passieren, wenn es 5 Jahre keine Investitionen in bessere Tierhaltung gab.
  `,
})
