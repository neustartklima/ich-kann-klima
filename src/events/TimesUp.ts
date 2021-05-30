import { createEvent } from "../Factory"
import { Store } from "../store"

export default createEvent({
  title: "Du hast durchgehalten",
  description: `Es ist vielleicht nicht alles optimal nach deiner inzwischen sehr langen Amtszeit, aber du hast es geschafft,
    bis hierhin durchzuhalten! Das ist wunderbar, denn noch immer ist der Planet bewohnbar, deine Maßnahmen waren zu finanzieren
    und die Menschen hast du auf diesem Weg auch mitgenommen. Gratulation!
  `,

  apply(context) {
    context.dispatch("gameOver")
  },

  probability(store: Store) {
    return store.state.game && store.state.game.currentYear === 2050 ? 1 : 0
  },
})
