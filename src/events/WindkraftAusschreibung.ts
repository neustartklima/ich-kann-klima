import { defineEvent, lawList } from "../Factory"
import AusschreibungsverfahrenfuerWindkraftWieBisher from "../laws/AusschreibungsverfahrenfuerWindkraftWieBisher"
import AusschreibungsverfahrenfuerWindkraftVerdoppeln from "../laws/AusschreibungsverfahrenfuerWindkraftVerdoppeln"
import AusschreibungsverfahrenfuerWindkraftVervierfachen from "../laws/AusschreibungsverfahrenfuerWindkraftVervierfachen"
import AusschreibungsverfahrenfuerWindkraftVerachtfachen from "../laws/AusschreibungsverfahrenfuerWindkraftVerachtfachen"

export default defineEvent({
  title: "Abstimmung zur Ausschreibung von Windkraftanlagen",
  description:
    "Heute findet die Abstimmung im Bundestag zur weiteren Ausschreibung von Kindkraftanlagen statt. Die Meinungen der Parteien sind sehr unterschiedlich.",
  laws: lawList({
    AusschreibungsverfahrenfuerWindkraftWieBisher,
    AusschreibungsverfahrenfuerWindkraftVerdoppeln,
    AusschreibungsverfahrenfuerWindkraftVervierfachen,
    AusschreibungsverfahrenfuerWindkraftVerachtfachen,
  }),

  apply() {},

  probability() {
    return Math.random()
  },
})
