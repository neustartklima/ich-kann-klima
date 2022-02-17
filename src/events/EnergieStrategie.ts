import { defineEvent, lessTimeHasPassed } from "./EventsTypes"

export default defineEvent({
  title: "Grundsatzdebatte zur Stromerzeugung",
  description:
    "Der Bundestag debattierte heute über die Strategie zur Stromerzeugung in Deutschland. Die Meinungen der Parteien gingen dabei stark auseinander.",

  apply() {
    return []
  },

  probability(game, event) {
    if (lessTimeHasPassed(game, event, { years: 10 }, { years: 2 })) {
      return 0
    }
    return 0.5
  },
})
