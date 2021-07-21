import { defineEvent } from "../Factory"
import { defaultValues } from "../params"
import { Store } from "../store"

export default defineEvent({
  title: "Zusammenbruch des Finanzsystems",
  description: `Deine Staatsfinanzen sind desaströs. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden
    jemals wieder wirst zurückahlen können. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen
    könntest. Das Spiel ist damit leider beendet.
  `,

  apply(context) {
    context.dispatch("gameOver")
  },

  probability(store: Store) {
    return store.state.game && store.state.game.values.stateDebt > defaultValues.stateDebt * 2 ? 1 : 0
  },
})
