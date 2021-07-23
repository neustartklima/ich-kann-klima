import { defineEvent } from "../Factory"
import { Game } from "../game"
import { Percent } from "../types"

export default defineEvent({
  title: "Social Media Alarm!",
  description: `Deine Wahlkampfberaterin ruft dich völlig aufgelöst an. Ob denn an den Geschichten was dran sein, die da im
    Netz kursieren, dass du vor einigen Jahren bei einer Demo dabei warst, bei der die Gewalt eskaliert ist.
    Die Zeitungen haben die Meldung schon aufgegriffen und es gibt Spekulationen, ob man dir das Misstrauen aussprechen wird.
  `,

  apply(context) {
    const game = { ...context.state.game } as Game
    if (game) {
      game.values.popularity += Math.max(-game.values.popularity, -20 as Percent)
      context.commit("setGameState", { game })
    }
  },

  probability() {
    return Math.random()
  },
})
