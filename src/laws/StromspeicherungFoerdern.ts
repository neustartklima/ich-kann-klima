import { markdown } from "../lib/utils"
import { Change, modify } from "../params"
import { defineLaw, monthsEffort } from "./LawsTypes"
import { lawIsAccepted, linear } from "./lawTools"

export default defineLaw({
  title: "Stromspeicherung fördern",
  description:
    "Bau von Speicheranlagen und Einspeisung von gespeichertem Strom mit Steuermitteln fördern. 2 Mrd € pro Jahr.",

  effort(game) {
    return monthsEffort(7)
  },

  effects(game, startYear, currentYear): Change[] {
    const delay = lawIsAccepted(game, "StromspeicherungErleichtern") ? 0 : 5
    const hasEffect = currentYear >= startYear + delay
    const isBoosted = lawIsAccepted(game, "ForschungUndEntwicklungStromspeicherung", 3)
    return [
      modify("stateDebt").byValue(1),
      modify("popularity").byValue(0.2).if(hasEffect),
      modify("stateDebt").byValue(1).if(hasEffect),
      modify("electricityGridQuality").byValue(2).if(hasEffect),
      modify("electricityGridQuality").byValue(2).if(isBoosted),
      modify("electricityGridQuality")
        .byValue(2)
        .if(hasEffect && isBoosted),
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

    - [x] Kostet 1 MrdEuro im Jahr.
    - Wenn "StromspeicherungErleichtern" angenommen oder dieses Gesetz vor mehr als 5 Jahren beschlossen:
      - [x] Weitere 1 MrdEuro im Jahr
      - [x] Viele verdienen Geld mit kleinen Batteriespeichern: Popularität steigt um 0,2% pro Jahr.
      - [x] Die Netzqualität steigt jährlich um 2%.
    - Wenn "ForschungUndEntwicklungStromspeicherung" vor 3 oder mehr Jahren angenommen:
      - [x] Die Netzqualität steigt jährlich um 2% (zusätzlich).
    - Wenn "StromspeicherungErleichtern" und "ForschungUndEntwicklungStromspeicherung" angenommen:
      - [x] Die Netzqualität steigt jährlich um 2% (zusätzlich).

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    Identisch zu "StromspeicherungErleichtern".

    - 0% bei einer Netzqualität von 80%. (Zu Beginn: 50%)
    - 100% bei einer Netzqualität von 45%.
    - linear interpoliert
  `,
})
