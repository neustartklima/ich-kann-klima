import { markdown } from "../lib/utils"
import { Change, modify } from "../params"
import { TWh } from "../types"
import { defineLaw, monthsEffort } from "./LawsTypes"
import { lawIsAccepted, linear, windPercentage } from "./lawTools"

export default defineLaw({
  title: "Abstandsregeln für Windkraft lockern",
  description:
    "Bundesweite gelockerte Abstandsregeln für Windkraftanlagen sowie Bauerlaubniss in Wäldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",
  labels: ["WindkraftAbstandsregel"],
  removeLawsWithLabels: ["WindkraftAbstandsregel"],

  effort(game) {
    return monthsEffort(6, "Das schaffst Du in {months}n.")
  },

  effects(game, startYear, currentYear): Change[] {
    const delay = lawIsAccepted(game, "WindkraftVereinfachen") ? 0 : 5
    return [
      modify("popularity")
        .byValue(-3)
        .if(startYear === currentYear),
      modify("electricityWindOnshoreMaxNew")
        .setValue(30 as TWh)
        .if(currentYear >= startYear + delay),
    ]
  },

  priority(game) {
    if (lawIsAccepted(game, "AbstandsregelnFuerWindkraftWieBisher")) {
      return linear(70, 27, windPercentage(game))
    }
    if (lawIsAccepted(game, "AbstandsregelnFuerWindkraftAbschaffen")) {
      return linear(30, 100, windPercentage(game))
    }
    return 0
  },
  citations: [],
  details: markdown`

  `,
  internals: markdown`
    # Happy Path 2

    # Priorität

    Zu Beginn und wenn "WieBisher" ausgewählt:

    - 0% bei einem Anteil von Windstrom von 70%. (Zu Beginn: 27%)
    - 100% bei einem Anteil von Windstrom von 27%.
    - linear interpoliert

    Wenn Abstandsregeln abgeschafft wurden:

    - 0% bei einem Anteil von Windstrom von 30%.
    - 100% bei einem Anteil von Windstrom von 100%.
  `,
})
