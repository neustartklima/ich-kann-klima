import { defineLaw } from "./LawsTypes"
import { lawIsAccepted, linear, windPercentage } from "./lawTools"
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
      modify("electricityGridQuality").byValue(5).if(lawIsAccepted(game, "NetzausbauErleichtern")),
    ]
  },

  priority(game) {
    return linear(70, 27, windPercentage(game))
  },
  citations: [],
  details: markdown`

  `,
  internals: markdown`
    # Happy Path 8

    # Folgen

    - [x] Im ersten Jahr machen BIs schlechte Stimmung: 1% Popularität weniger.
    - [x] Kostet 2 Mrd Euro im Jahr.
    - [x] Die Netzqualität steigt jährlich um 5%, aber nur, wenn auch die Planungsverfahren vereinfacht wurden.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    - 0% bei einem Anteil von nutzbarem Windstrom von 70%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von nutzbarem Windstrom von 27%.
    - linear interpoliert
  `,
})
