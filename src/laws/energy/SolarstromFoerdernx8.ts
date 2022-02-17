import { markdown } from "../../lib/utils"
import { Change, modify } from "../../params"
import { defineLaw, monthsEffort } from "../LawsTypes"
import { currentEventIsInList, lawIsAccepted, linear, powerTransfer, renewablePercentage } from "../lawTools"

export default defineLaw({
  title: "Solarstrom Förderung 40TWh",
  description:
    "Subventionierung für mittlere bis große Solaranlagen verachtfachen. Es werden 40 TWh pro Jahr zugebaut.",
  labels: ["SolarFoerderung"],
  removeLawsWithLabels: ["SolarFoerderung"],
  treatAfterLabels: [],

  effort(game) {
    if (lawIsAccepted(game, "SolarstromFoerdernx4")) {
      return monthsEffort(2)
    }
    if (lawIsAccepted(game, "SolarstromFoerdernx2")) {
      return monthsEffort(5)
    }
    return monthsEffort(9)
  },

  effects(game, startYear, currentYear): Change[] {
    return [
      modify("stateDebt").byValue(8),
      modify("popularity")
        .byValue(-10)
        .if(startYear === currentYear),
      modify("unemployment")
        .byValue(-209000)
        .if(startYear === currentYear),
      ...powerTransfer(game, "electricitySolar", 40),
    ]
  },

  priority(game) {
    if (currentEventIsInList(game, ["SolarstromFoerderung", "SolarstromFoerderung2"])) {
      return 100
    }
    if (lawIsAccepted(game, "SolarstromFoerdernx4")) {
      return linear(100, 50, renewablePercentage(game))
    }
    return 0
  },

  details: markdown`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für alle Gebäude, auch bei moderater Ausbäute.
    Umwandlung vieler Landwirtschaftlicher flächen in Freiflächen PV.
  `,
})
