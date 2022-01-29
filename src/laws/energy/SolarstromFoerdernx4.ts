import { cite, wuppertalStudie } from "../../citations"
import { markdown } from "../../lib/utils"
import { Change, modify } from "../../params"
import { defineLaw, monthsEffort } from "../LawsTypes"
import { currentEventIsInList, lawIsAccepted, linear, powerTransfer, renewablePercentage } from "../lawTools"

export default defineLaw({
  title: "Solarstrom Förderung 20TWh",
  description:
    "Subventionierung für mittlere bis große Solaranlagen vervierfachen. Es werden 20 TWh pro Jahr zugebaut.",
  labels: ["SolarFoerderung"],
  removeLawsWithLabels: ["SolarFoerderung"],

  effort(game) {
    if (lawIsAccepted(game, "SolarstromFoerdernx2")) {
      return monthsEffort(3)
    }
    return monthsEffort(7)
  },

  effects(game, startYear, currentYear): Change[] {
    return [
      modify("popularity")
        .byValue(20)
        .if(startYear === currentYear),
      modify("unemployment")
        .byValue(-89000)
        .if(startYear === currentYear),
      ...powerTransfer(game, "electricitySolar", 20),
    ]
  },

  priority(game) {
    if (currentEventIsInList(game, ["SolarstromFoerderung", "SolarstromFoerderung2"])) {
      return 100
    }
    if (lawIsAccepted(game, "SolarstromFoerdernx2")) {
      return linear(100, 30, renewablePercentage(game))
    }
    return 0
  },

  details: markdown`
    Betreiber von etwas größeren PV Anlagen z.B. Lagerhaus bewerben sich um Subventionen.
    Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag.
    Nachrüst Pflicht für besonders geeignete Gebäude, moderater Zuwachs der Freiflächen Photovoltaik mit Doppeltbewirtschaftung von Energieerzeugung und Landwirtschaft #AgroPV.
  `,

  internals: markdown`
    # Happy path 10

    ${cite(wuppertalStudie)}
  `,

  citations: [wuppertalStudie],
})
