import { defineLaw } from "./LawsTypes"
import { lawIsAccepted, linear, renewablePercentage } from "./lawTools"
import { markdown } from "../lib/utils"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Solarstrom Förderung wie zu Beginn",
  description: "Subventionierung für mittlere bis große Solaranlagen wie bisher",
  labels: ["initial", "SolarFoerderung"],
  removeLawsWithLabels: ["SolarFoerderung"],
  treatAfterLabels: [],

  effects(): Change[] {
    return [modify("electricitySolar").byValue(5)]
  },

  priority(game) {
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
