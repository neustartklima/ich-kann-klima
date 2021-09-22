import { defineLaw } from "../Factory"
import { lawIsAccepted, linear, windPercentage } from "../lawTools"
import { Percent, TWh } from "../types"
import { Change, modify } from "../params"
import { markdown } from "../lib/utils"

export default defineLaw({
  title: "Abstandsregeln für Windkraft lockern",
  description:
    "Bundesweite gelockerte Abstandsregeln für Windkraftanlagen sowie Bauerlaubniss in Wäldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",
  labels: ["WindkraftAbstandsregel"],
  removeLawsWithLabels: ["WindkraftAbstandsregel"],

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
      return linear(70, 30, windPercentage(game))
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
    - 100% bei einem Anteil von Windstrom von 30%.
    - linear interpoliert

    Wenn Abstandsregeln abgeschafft wurden:

    - 0% bei einem Anteil von Windstrom von 30%.
    - 100% bei einem Anteil von Windstrom von 100%.
  `,
})
