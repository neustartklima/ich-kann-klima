import { markdown } from "../lib/utils"
import { Change, modify } from "../params"
import { defineLaw, monthsEffort } from "./LawsTypes"
import { linear, windPercentage } from "./lawTools"

export default defineLaw({
  title: "Netzausbau erleichtern",
  description: "Vereinfachung und Beschleunigung von Planungsverfahren für den Ausbau des Stromnetzes",

  effort(game) {
    return monthsEffort(2)
  },

  effects(game, startYear, currentYear): Change[] {
    return [
      modify("popularity")
        .byValue(-3)
        .if(startYear === currentYear),
      modify("electricityGridQuality").byValue(1),
    ]
  },

  priority(game) {
    return linear(70, 27, windPercentage(game))
  },
  citations: [],
  details: markdown`

  `,
  internals: markdown`
    # Happy Path 1

    # Folgen

    - [x] Im ersten Jahr machen BIs schlechte Stimmung: 3% Popularität weniger.
    - [x] Die Netzqualität steigt jährlich um 1%.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    - 0% bei einem Anteil von nutzbarem Windstrom von 70%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von nutzbarem Windstrom von 27%.
    - linear interpoliert
  `,
})
