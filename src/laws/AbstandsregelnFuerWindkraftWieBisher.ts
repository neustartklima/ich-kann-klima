import { defineLaw } from "../Factory"
import { linear } from "../lawTools"
import { Percent, TWh, WritableBaseParams } from "../types"

export default defineLaw({
  title: "Abstandsregeln für Windkraft wie bisher",
  description: "Das Land / Die Kommune bestimmem über Abstände zwischen den Windkraftanlagen und Wohngebäuden.",
  labels: ["initial", "hidden", "WindkraftAbstandsregel"],
  removeLawsWithLabels: ["WindkraftAbstandsregel"],

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    return {
      electricityWindOnshoreMaxNew: (6.0 as TWh) - data.electricityWindOnshoreMaxNew,
    }
  },

  priority(game) {
    const v = game.values
    const relWindPercentage: Percent = (v.electricityWind / v.electricityDemand) * 100
    return linear(30, 100, relWindPercentage)
  },
})
