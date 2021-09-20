import { defineLaw } from "../Factory"
import { lawIsAccepted, linear, windPercentage } from "../lawTools"
import { Percent, TWh } from "../types"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Abstandsregeln für Windkraft verschärfen",
  description:
    "Der Mindestabstand zwischen Wind Energie Anlagen und Wohngebäuden im Innenbereich muss das Zehnfache der Gesamthöhe der Wind Energie Anlagen betragen (10H-Regel)",
  labels: ["WindkraftAbstandsregel"],
  removeLawsWithLabels: ["WindkraftAbstandsregel"],

  effects(game, startYear, currentYear): Change[] {
    return [
      modify("popularity")
        .byValue(5)
        .if(startYear === currentYear),
      modify("electricityWindOnshoreMaxNew").setValue(0.42 as TWh),
    ]
  },

  priority(game) {
    if (lawIsAccepted(game, "AbstandsregelnFuerWindkraftWieBisher")) {
      return linear(0, 100, windPercentage(game))
    }
    return 0
  },
})
