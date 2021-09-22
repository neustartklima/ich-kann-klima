import { defineEvent } from "../Factory"
import { defaultValues, dispatch } from "../params"
import { specialEventProbs } from "./EventsTypes"

export default defineEvent({
  title: "Zusammenbruch des Finanzsystems",
  description: `Deine Staatsfinanzen sind desaströs. Kein Land der Welt, keine Institutionen oder Privatpersonen trauen dir zu, dass du deine Schulden
    jemals wieder wirst zurückahlen können. Daher gibt dir auch niemand mehr Geld, mit dem du die Staatsangestellten oder die offenen Verpflichtungen zahlen
    könntest. Das Spiel ist damit leider beendet.
  `,

  apply() {
    return [dispatch("gameOver")]
  },

  probability(game) {
    return game.values.stateDebt > defaultValues.stateDebt * 2 ? specialEventProbs.finanzKollaps : 0
  },
})
