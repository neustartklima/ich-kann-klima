import { defineLaw } from "../Factory"
import { lawIsAccepted, linear, windPercentage } from "../lawTools"
import { TWh } from "../types"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Abstandsregeln für Windkraft wie zu Beginn",
  description: "Das Land / Die Kommune bestimmem über Abstände zwischen den Windkraftanlagen und Wohngebäuden.",
  labels: ["initial", "WindkraftAbstandsregel"],
  removeLawsWithLabels: ["WindkraftAbstandsregel"],

  effects(game, startYear, currentYear): Change[] {
    const delay = lawIsAccepted(game, "WindkraftVereinfachen") ? 0 : 5

    return [
      modify("electricityWindOnshoreMaxNew")
        .setValue(6.0 as TWh)
        .if(currentYear >= startYear + delay),
    ]
  },

  priority(game) {
    if (lawIsAccepted(game, "AbstandsregelnFuerWindkraftLockern")) {
      return linear(30, 100, windPercentage(game))
    }
    if (lawIsAccepted(game, "AbstandsregelnFuerWindkraftVerschaerfen")) {
      return linear(70, 30, windPercentage(game))
    }
    return 0
  },
})
