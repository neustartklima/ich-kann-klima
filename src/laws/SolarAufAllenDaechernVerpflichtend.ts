import { defineLaw } from "../Factory"
import { markdown } from "../lib/utils"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Solar auf neuen Dächern verpflichtend",
  description: "Alle Neubauten bekommen PV Anlagen auf die Dächer.",
  labels: ["SolarFoerderung"],
  removeLawsWithLabels: ["SolarFoerderung"],
  treatAfterLabels: [],

  effects(game, startYear, currentYear): Change[] {
    return [
      modify("popularity")
        .byValue(-3)
        .if(startYear === currentYear),
      modify("electricitySolar").byValue(2),
    ]
  },

  priority(game) {
    return Math.random()
  },

  details: markdown`

  `,
  internals: markdown`
    # Happy Path 11

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Popularität sinkt um 3 Prozent im ersten Jahr, weil das als Zwang empfunden wird.
    - Zusätzlicher Ausbau um 2TWh pro Jahr.
  `,
})
