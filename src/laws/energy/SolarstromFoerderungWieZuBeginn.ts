import { markdown } from "../../lib/utils"
import { Change, modify } from "../../params"
import { defineLaw, monthsEffort } from "../LawsTypes"
import { currentEventIsInList, lawIsAccepted, linear, powerTransfer, renewablePercentage } from "../lawTools"

export default defineLaw({
  title: "Solarstrom Förderung wie zu Beginn 5 TWh",
  description: "Subventionierung für mittlere bis große Solaranlagen wie bisher. Es werden 5 TWh pro Jahr zugebaut.",
  labels: ["initial", "SolarFoerderung"],
  removeLawsWithLabels: ["SolarFoerderung"],
  treatAfterLabels: [],

  effort(game) {
    return monthsEffort(9)
  },

  effects(game, startYear, currentYear): Change[] {
    return [modify("stateDebt").byValue(1), ...powerTransfer(game, "electricitySolar", 5)]
  },

  priority(game) {
    if (currentEventIsInList(game, ["SolarstromFoerderung", "SolarstromFoerderung2"])) {
      return 100
    }
    if (lawIsAccepted(game, "SolarstromFoerdernx8")) {
      return linear(70, 100, renewablePercentage(game))
    }
    return 0
  },

  details: markdown`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `,
})
