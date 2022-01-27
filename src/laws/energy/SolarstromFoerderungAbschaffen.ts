import { markdown } from "../../lib/utils"
import { Change, modify } from "../../params"
import { defineLaw, monthsEffort } from "../LawsTypes"
import { currentEventIsInList, lawIsAccepted, linear, powerTransfer, renewablePercentage } from "../lawTools"

export default defineLaw({
  title: "Solarstrom Förderung einstellen",
  description: "Mittlere bis große Solaranlagen sollten sich selbst tragen. Die Förderung wird abgeschafft.",
  labels: ["SolarFoerderung"],
  removeLawsWithLabels: ["SolarFoerderung"],
  treatAfterLabels: [],

  effort(game) {
    if (lawIsAccepted(game, "SolarstromFoerderungWieZuBeginn")) {
      return monthsEffort(5)
    }
    return monthsEffort(13, "So eine Kehrtwende in der Politik ist schwer durchsetzbar. Das braucht {months}.")
  },

  effects(game, startYear, currentYear): Change[] {
    return [...powerTransfer(game, "electricitySolar", 2)]
  },

  priority(game) {
    if (currentEventIsInList(game, ["SolarstromFoerderung", "SolarstromFoerderung2"])) {
      return 100
    }
    if (lawIsAccepted(game, "SolarstromFoerderungWieZuBeginn")) {
      return linear(0, 100, renewablePercentage(game))
    }
    return 0
  },

  details: markdown`

  `,
})
