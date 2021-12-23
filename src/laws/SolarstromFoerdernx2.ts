import { markdown } from "../lib/utils"
import { Change, modify } from "../params"
import { defineLaw, monthsEffort } from "./LawsTypes"
import { lawIsAccepted, linear, powerTransfer, renewablePercentage } from "./lawTools"

export default defineLaw({
  title: "Solarstrom Förderung x2",
  description: "Subventionierung für mittlere bis große Solaranlagen verdoppeln",
  labels: ["SolarFoerderung"],
  removeLawsWithLabels: ["SolarFoerderung"],

  effort(game) {
    return monthsEffort(4)
  },

  effects(game, startYear, currentYear): Change[] {
    return [
      modify("popularity")
        .byValue(10)
        .if(startYear === currentYear),
      modify("unemployment")
        .byValue(-31000)
        .if(startYear === currentYear),
      ...powerTransfer(game, "electricitySolar", 10),
    ]
  },

  priority(game) {
    if (lawIsAccepted(game, "SolarstromFoerderungWieZuBeginn")) {
      return linear(100, 30, renewablePercentage(game))
    }
    return 0
  },

  details: markdown`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
  `,
})
