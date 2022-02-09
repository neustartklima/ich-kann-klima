import { dispatch } from "../params"
import { defineEvent, specialEventProbs } from "./EventsTypes"

export default defineEvent({
  title: "Klimaneutral !!!",
  description: `Geschafft! Die jährlichen CO2 Emissionen sind auf null oder werden vollständig durch Absorption kompensiert.`,

  apply() {
    return [dispatch("gameOver")]
  },

  probability(game) {
    return game.values.co2emissions <= 0 ? specialEventProbs.timesUp : 0
  },
})
