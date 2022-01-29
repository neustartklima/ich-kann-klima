import { cite, fraunhoferISE2020InstalledPower } from "../citations"
import { lawIsAccepted } from "../laws/lawTools"
import { markdown } from "../lib/utils"
import { defineEvent, lessTimeHasPassed } from "./EventsTypes"

export default defineEvent({
  title: "Bürgerinitiative fordert stärkere Solarförderung",
  description:
    "Du musst entscheiden, wie groß die Förderung ausfällt. Oder willst du sie verkleinern oder sogar abschaffen?",

  apply() {
    return []
  },

  probability(game, event) {
    if (lessTimeHasPassed(game, event, { months: 8 })) {
      return 0
    }
    const abgeschafft = lawIsAccepted(game, "SolarstromFoerderungAbschaffen")
    const beibehalten = lawIsAccepted(game, "SolarstromFoerderungWieZuBeginn")
    const x2 = lawIsAccepted(game, "SolarstromFoerdernx2")
    return abgeschafft || beibehalten || x2 ? 0.5 : 0
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
