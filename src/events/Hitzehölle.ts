import { co2BudgetRating } from "../Calculator"
import { dispatch } from "../params"
import { defineEvent, specialEventProbs } from "./EventsTypes"

export default defineEvent({
  title: "Hitzehölle",
  description: `Die CO2-Werte sind soweit gestiegen, dass die Erde nur noch an wenigen Orten bewohnbar ist. Die ehemaligen Küstenregionen
  stehen unter Wasser, ganze Landstriche sind verschwunden. In den trockeneren Gebieten ist die Temperatur so hoch, dass nichts mehr wächst.
  Um die verbleibdenden Teile sind erbitterte Kämpfe ausgebrochen.
  `,

  apply() {
    return [dispatch("gameOver")]
  },

  probability(game, event) {
    return co2BudgetRating(game) <= 0 ? specialEventProbs.hitzehoelle : 0
  },
})
