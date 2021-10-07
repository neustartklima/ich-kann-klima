import { defineLaw } from "../Factory"
import { lawIsAccepted, linear } from "../lawTools"
import { Change, modify } from "../params"
import { markdown } from "../lib/utils"
import { paramDefinitions } from "../params/Params"

export default defineLaw({
  title: "Stromspeicherung fördern",
  description: "Bau von Speicheranlagen und Einspeisung von gespeichertem Strom mit Steuermitteln fördern",

  effects(game, startYear, currentYear): Change[] {
    if (!lawIsAccepted(game, "StromspeicherungErleichtern")) {
      return [modify("stateDebt").byValue(1)]
    }
    return [
      modify("popularity").byValue(0.2),
      modify("stateDebt").byValue(2),
      modify("electricityGridQuality").byValue(1),
    ]
  },

  priority(game) {
    const v = game.values
    return linear(80, 45, v.electricityGridQuality)
  },
  citations: [],
  details: markdown`

  `,
  internals: markdown`
    # Happy Path 8.5

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen werden.

    - [x] Wenn nicht "StromspeicherungErleichtern" ausgewählt wurde, kostet das 1 MrdEuro im Jahr, sonst:
    - [x] Viele verdienen Geld mit kleinen Batteriespeichern: Popularität steigt um 0,2% pro Jahr.
    - [x] Die Netzqualität steigt jährlich um 2%.
    - [x] Konsten: 2 Mrd Euro pro Jahr.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    Identisch zu "StromspeicherungErleichtern".

    - 0% bei einer Netzqualität von 80%. (Zu Beginn: 50%)
    - 100% bei einer Netzqualität von 45%.
    - linear interpoliert
  `,
})
