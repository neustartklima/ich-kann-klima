import { cite, fraunhoferISE2020InstalledPower } from "../citations"
import { defineEvent } from "./EventsTypes"
import { lawIsAccepted } from "../laws/lawTools"
import { markdown } from "../lib/utils"

export default defineEvent({
  title: "Bund der Steuerzahler fordert Abschaffung Solarförderung",
  description: "Der Solaranteil ist bereits sehr hoch, die Kosten für die Förderung sind schwer zu vermitteln.",
  laws: [
    "SolarstromFoerderungAbschaffen",
    "SolarstromFoerderungWieZuBeginn",
    "SolarstromFoerdernx2",
    "SolarstromFoerdernx4",
    "SolarstromFoerdernx8",
  ],

  apply() {
    return []
  },

  probability(game) {
    const solarRatio = game.values.electricitySolar / game.values.electricityDemand
    const x2 = lawIsAccepted(game, "SolarstromFoerdernx2")
    const x4 = lawIsAccepted(game, "SolarstromFoerdernx4")
    const x8 = lawIsAccepted(game, "SolarstromFoerdernx8")
    return solarRatio > 50 && (x2 || x4 || x8) ? 0.5 : 0
  },

  citations: [fraunhoferISE2020InstalledPower],
  details: markdown`

  `,
  internals: markdown`
    Installierte Leistung 2020 54GW entspricht Jährlich ~51,42TWh.
    ${cite(fraunhoferISE2020InstalledPower)}
    Ausgeschrieben sind 5-6GW PV Leistung
  `,
})
