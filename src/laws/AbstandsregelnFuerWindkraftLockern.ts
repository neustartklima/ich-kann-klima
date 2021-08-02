import { defineLaw } from "../Factory"
import { linear } from "../lawTools"
import { Percent, TWh } from "../types"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Abstandsregeln für Windkraft lockern",
  description:
    "Bundesweite gelockerte Abstandsregeln für Windkraftanlagen sowie Bauerlaubniss in Wäldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",
  labels: ["WindkraftAbstandsregel"],
  removeLawsWithLabels: ["WindkraftAbstandsregel"],

  effects(data, startYear, currentYear): Change[] {
    return [
      modify("popularity")
        .byValue(-3)
        .if(startYear === currentYear),
      modify("electricityWindOnshoreMaxNew").setValue(30 as TWh),
    ]
  },

  priority(game) {
    const v = game.values
    const relWindPercentage: Percent = (v.electricityWind / v.electricityDemand) * 100
    return linear(70, 30, relWindPercentage)
  },
})
