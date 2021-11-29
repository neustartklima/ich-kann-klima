import { defineEvent } from "./EventsTypes"
import { dispatch } from "../params"
import { specialEventProbs } from "./EventsTypes"

export default defineEvent({
  title: "Wahl verloren",
  description: `Deine Beliebtheit in der Bevölkerung ist katastrophal, lieber würde man Mao Zedong wählen als dich.
    Deine Partei hat daher bei der Wahl gerade mal 1.3% erreicht (weil wohl manche nicht wussten, zu welcher Partei du gehörst) und ist damit unter
    die 5% Marke gerutscht. An eine weitere Kanzlerschaft hat schon länger kein vernünftiger Mensch mehr geglaubt.
  `,

  apply() {
    return [dispatch("gameOver")]
  },

  probability(game) {
    return game.values.popularity <= 0 ? specialEventProbs.wahlVerloren : 0
  },
})
