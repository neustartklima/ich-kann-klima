import { popularityRating } from "../Calculator"
import { dispatch } from "../params"
import { defineEvent, specialEventProbs } from "./EventsTypes"

export default defineEvent({
  title: "Revolte",
  description: `Die Massen stürmen das Kanzleramt. Du erreichst so gerade noch den Privatjet Deines Freundes, lebst fortan im Exil und beobachtest in den Medien, wie das Land in Anarchie versinkt.`,

  apply() {
    return [dispatch("gameOver")]
  },

  probability(game) {
    return popularityRating(game) <= 0 ? specialEventProbs.wahlVerloren : 0
  },
})
