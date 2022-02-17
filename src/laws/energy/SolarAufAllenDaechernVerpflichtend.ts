import { markdown } from "../../lib/utils"
import { Change, modify } from "../../params"
import { defineLaw, monthsEffort } from "../LawsTypes"
import { currentEventIsInList, lawIsAccepted, linear, powerTransfer, renewablePercentage } from "../lawTools"

export default defineLaw({
  title: "Solar auf neuen Dächern verpflichtend",
  description: "Alle Neubauten bekommen PV Anlagen auf die Dächer.",
  treatAfterLabels: [],

  effort(game) {
    return monthsEffort(3)
  },

  effects(game, startYear, currentYear): Change[] {
    return [
      modify("stateDebt").byValue(4),
      modify("popularity")
        .byValue(-3)
        .if(startYear === currentYear),
      ...powerTransfer(game, "electricitySolar", 2),
    ]
  },

  priority(game) {
    if (currentEventIsInList(game, ["SolarstromFoerderung", "SolarstromFoerderung2"])) {
      return 100
    }
    if (lawIsAccepted(game, "SolarstromFoerderungWieZuBeginn")) {
      return linear(100, 30, renewablePercentage(game))
    }
    return 0
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
