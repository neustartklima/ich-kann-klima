import { defineLaw } from "../Factory"
import { changePercentBy, linear } from "../lawTools"
import { Percent, TWh, WritableBaseParams } from "../types"

export default defineLaw({
  title: "Abstandsregeln für Windkraft abschaffen",
  description: "Jeder der Land besitzt kann seine Windkraftanlage dahin bauen wo er will.",
  labels: ["WindkraftAbstandsregel"],
  removeLawsWithLabels: ["WindkraftAbstandsregel"],

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    return {
      popularity: startYear === currentYear ? changePercentBy(data.popularity, -40) : 0,
      electricityWindOnshoreMaxNew: (1000 as TWh) - data.electricityWindOnshoreMaxNew,
    }
  },

  priority(game) {
    const v = game.values
    const relWindPercentage: Percent = (v.electricityWind / v.electricityDemand) * 100
    return linear(80, 40, relWindPercentage)
  },
})
