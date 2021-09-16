import { defineLaw } from "../Factory"
import { lawIsAccepted, linear } from "../lawTools"
import { Percent, TWh } from "../types"
import { Change, modify } from "../params"
import { markdown } from "../lib/utils"

export default defineLaw({
  title: "Netzausbau fördern",
  description: "Ausbau des Stromnetzes mit Steuermitteln fördern",

  effects(game, startYear, currentYear): Change[] {
    return [
      modify("popularity")
        .byValue(-1)
        .if(startYear === currentYear),
      modify("stateDebt").byValue(2),
      modify("electricityGridQuality").byValue(5), //.if(lawIsAccepted("NetzausbauErleichtern")), TODO: Need game here...
    ]
  },

  priority(game) {
    if (!lawIsAccepted(game, "NetzausbauErleichtern")) return 0
    const v = game.values
    const relWindPercentage: Percent = (v.electricityWindUsable / v.electricityDemand) * 100
    return linear(70, 30, relWindPercentage)
  },
  citations: [],
  details: markdown`

  `,
  internals: markdown`
    # Happy Path 1

    # Folgen

    - [x] Im ersten Jahr machen BIs schlechte Stimmung: 1% Popularität weniger.
    - [x] Die Netzqualität steigt jährlich um 5%, aber nur, wenn auch die Planungsverfahren vereinfacht wurden.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    - 0% bei einem Anteil von nutzbarem Windstrom von 70%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von nutzbarem Windstrom von 30%.
    - linear interpoliert
  `,
})
