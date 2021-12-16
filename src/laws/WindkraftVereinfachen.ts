import { markdown } from "../lib/utils"
import { Change } from "../params"
import { defineLaw, monthsEffort } from "./LawsTypes"
import { linear, windPercentage } from "./lawTools"

export default defineLaw({
  title: "Windkraft vereinfachen",
  description: "Genehmigungen für Windkraftanlagen werden vereinfacht und beschleunigt.",
  labels: [],
  removeLawsWithLabels: [],

  effort(game) {
    return monthsEffort(4, "Die Bundesländer müssen mit ins Boot geholt werden. Das dauert {months}.")
  },

  effects(game, startYear, currentYear): Change[] {
    return []
  },

  priority(game) {
    return linear(80, 27, windPercentage(game))
  },
  citations: [],
  details: markdown`

  `,
  internals: markdown`
    # Happy Path 1.3

    # Folgen

    - Popularität unverändert: Einige freuen sich, andere ärgern die Windräder.
    - Kostenneutral.
    - Änderungen in den Ausschreibungsverfahren und Abstandsregeln wirken sich schneller aus.

    # Priorität

    - 0% bei einem Anteil von Windstrom von 80%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von Windstrom von 27%.
    - linear interpoliert
  `,
})
