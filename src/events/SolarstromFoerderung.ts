import { cite, fraunhoferISE2020InstalledPower } from "../citations"
import { defineEvent } from "../Factory"
import { lawIsAccepted } from "../lawTools"
import { markdown } from "../lib/utils"

export default defineEvent({
  title: "Bürgerinitiative fordert stärkere Solarförderung",
  description: "",
  laws: [
    "SolarstromFoerderungAbschaffen",
    "SolarstromFoerderungBeibehalten",
    "SolarstromFoerdernx2",
    "SolarstromFoerdernx4",
    "SolarstromFoerdernx8",
  ],

  apply() {
    return []
  },

  probability(game) {
    const abgeschafft = lawIsAccepted(game, "SolarstromFoerderungAbschaffen")
    const beibehalten = lawIsAccepted(game, "SolarstromFoerderungBeibehalten")
    const x2 = lawIsAccepted(game, "SolarstromFoerdernx2")
    return abgeschafft || beibehalten || x2 ? Math.random() : 0
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
