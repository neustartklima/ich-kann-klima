import { Change, modify } from "../../params"
import { TWh } from "../../types"
import { defineLaw, monthsEffort } from "../LawsTypes"
import { lawIsAccepted, linear, windPercentage } from "../lawTools"

export default defineLaw({
  title: "Abstandsregeln für Windkraft verschärfen",
  description:
    "Der Mindestabstand zwischen Wind Energie Anlagen und Wohngebäuden im Innenbereich muss das Zehnfache der Gesamthöhe der Wind Energie Anlagen betragen (10H-Regel)",
  labels: ["WindkraftAbstandsregel"],
  removeLawsWithLabels: ["WindkraftAbstandsregel"],

  effort(game) {
    return monthsEffort(1, "Dauert nur einen Monat.")
  },

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
