import { defineLaw } from "./LawsTypes"
import { Change, modify } from "../params"
import { markdown } from "../lib/utils"
import { linear } from "./lawTools"

export default defineLaw({
  title: "Forschung und Entwicklung zur Stromspeicherung fördern",
  description:
    "Ein Förderprogramm zur Erfoschung und Entwicklung innovativer Technologien zur Stromspeicherung wird aufgesetzt. 10 Mrd € über 5 Jahre.",

  effects(game, startYear, currentYear): Change[] {
    const inGrantPeriod = currentYear < startYear + 5
    const effective = currentYear >= startYear + 3
    return [
      modify("stateDebt").byValue(2).if(inGrantPeriod),
      modify("electricityGridQuality").byValue(0.2).if(effective),
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
    # Happy Path 4

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen werden.

    - [x] Konsten: 2 Mrd Euro pro Jahr für die ersten 5 Jahre
    - [x] Nach 2 Jahren zahlt es sich aus und die Netzqualität steigt (ohne Förderung) jährlich um 0.2%.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    Identisch zu "StromspeicherungErleichtern".

    - 0% bei einer Netzqualität von 80%. (Zu Beginn: 50%)
    - 100% bei einer Netzqualität von 45%.
    - linear interpoliert
  `,
})
