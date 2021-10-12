import { defineEvent } from "../Factory"
import { idsToLaws } from "../laws"
import { markdown } from "../lib/utils"
import { dispatch } from "../params"

export default defineEvent({
  title: "Staatsoberhaupt verstorben",
  description: `Du stirbst an der neuen BSE Variante. Tja, hättest du dich mal besser um das Tierwohl gekümmert...`,

  apply() {
    return [dispatch("gameOver")]
  },

  probability(game) {
    const law =  idsToLaws(game.acceptedLaws.map(ref => ref.lawId))
      .find((law) => law.title.match(/tierwohl/i))

    // Kann passieren, wenn es keine Investitionen in bessere Tierhaltung gab
    return law ? 0 : .5
  },

  laws: [],
  citations: [],
  details: markdown`

  `,
  internals: markdown`

  `,
})
