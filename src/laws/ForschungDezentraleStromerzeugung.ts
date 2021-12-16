import { markdown } from "../lib/utils"
import { Change, modify } from "../params"
import { defineLaw, monthsEffort } from "./LawsTypes"
import { linear } from "./lawTools"

export default defineLaw({
  title: "Erforschung und Umsetzung dezentraler Stromerzeugung fördern",
  description:
    "Ein Förderprogramm zur Erfoschung und Umsetzung der notwendigen Anpassungen von Netz und Infrastruktur für die denzentrale Stromerzeugung wird aufgesetzt. 10 Mrd € über 5 Jahre.",

  effort(game) {
    return monthsEffort(1)
  },

  effects(game, startYear, currentYear): Change[] {
    const inGrantPeriod = currentYear < startYear + 5
    const effective = currentYear >= startYear + 1
    return [modify("stateDebt").byValue(2).if(inGrantPeriod), modify("electricityGridQuality").byValue(1).if(effective)]
  },

  priority(game) {
    const v = game.values
    return linear(80, 45, v.electricityGridQuality)
  },
  citations: [],
  details: markdown`

  `,
  internals: markdown`
    # Happy Path 4.5

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - [x] Konsten: 2 Mrd Euro pro Jahr für die ersten 5 Jahre
    - [x] Nach 1 Jahr zahlt es sich aus und die Netzqualität steigt (ohne Förderung) jährlich um 1%.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    Identisch zu "StromspeicherungErleichtern".

    - 0% bei einer Netzqualität von 80%. (Zu Beginn: 50%)
    - 100% bei einer Netzqualität von 45%.
    - linear interpoliert
  `,
})
