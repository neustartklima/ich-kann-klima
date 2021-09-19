import { defineEvent } from "../Factory"
import { dispatch } from "../params"
import { specialEventProbs } from "./EventsTypes"

export default defineEvent({
  title: "Hitzehölle",
  description: `Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen Küstenregionen
  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr wächst.
  Um die verbleibdenden Teile sind erbitterte Kämpfe ausgebrochen.
  `,

  apply() {
    return [dispatch("gameOver")]
  },

  probability(game) {
    return game.values.co2budget <= 0 ? specialEventProbs.hitzehoelle : 0
  },
})
