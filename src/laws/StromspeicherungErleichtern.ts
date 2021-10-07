import { defineLaw } from "../Factory"
import { linear } from "../lawTools"
import { Change, modify } from "../params"
import { markdown } from "../lib/utils"

export default defineLaw({
  title: "Stromspeicherung erleichtern",
  description:
    "Bürokratische Hürden für den Bau von Speicheranlagen und Einspeisung von gespeichertem Strom werden abgeschafft.",

  effects(game, startYear, currentYear): Change[] {
    return [modify("electricityGridQuality").byValue(0.2)]
  },

  priority(game) {
    const v = game.values
    return linear(80, 45, v.electricityGridQuality)
  },
  citations: [],
  details: markdown`

  `,
  internals: markdown`
    # Happy Path 1.7

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen werden.

    - [x] Die Netzqualität steigt jährlich um 0.2%.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    Identisch zu "StromspeicherungFoerdern".

    - 0% bei einer Netzqualität von 80%. (Zu Beginn: 50%)
    - 100% bei einer Netzqualität von 45%.
    - linear interpoliert
  `,
})
