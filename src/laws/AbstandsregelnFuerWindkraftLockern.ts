import { defineLaw } from "../Factory"
import { changePercentBy, linear } from "../lawTools"
import { Percent, TWh, WritableBaseParams } from "../types"

export default defineLaw({
  title: "Abstandsregeln für Windkraft lockern",
  description:
    "Bundesweite gelockerte Abstandsregeln für Windkraftanlagen sowie Bauerlaubniss in Wäldern. Ja auch Bayern wird jetzt gezwungen Windkraftanlagen zuzulassen, sowie andere nicht bauwillige Kommunen.",
  labels: ["WindkraftAbstandsregel"],
  removeLawsWithLabels: ["WindkraftAbstandsregel"],

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    return {
      popularity: startYear === currentYear ? changePercentBy(data.popularity, -3) : 0,
      electricityWindOnshoreMaxNew: (30 as TWh) - data.electricityWindOnshoreMaxNew,
    }
  },

  priority(game) {
    const v = game.values
    const relWindPercentage: Percent = (v.electricityWind / v.electricityDemand) * 100
    return linear(70, 30, relWindPercentage)
  },
})
