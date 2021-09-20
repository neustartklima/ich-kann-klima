import { defineLaw } from "../Factory"
import { markdown } from "../lib/utils"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Solarstrom Förderung beibehalten",
  description: "Subventionierung für mittlere bis große Solaranlagen wie bisher",
  labels: ["initial", "SolarFoerderung"],
  removeLawsWithLabels: ["SolarFoerderung"],
  treatAfterLabels: [],

  effects(): Change[] {
    return [
      modify("electricitySolar").byValue(5),
    ]
  },

  priority(game) {
    return Math.random()
  },
  
  details: markdown`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.`
})
