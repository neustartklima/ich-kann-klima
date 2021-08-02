import { defineLaw } from "../Factory"
import { linear } from "../lawTools"
import { Percent, TWh } from "../types"
import { modify } from "../params"

export default defineLaw({
  title: "Abstandsregeln für Windkraft abschaffen",
  description: "Jeder der Land besitzt kann seine Windkraftanlage dahin bauen wo er will.",
  labels: ["WindkraftAbstandsregel"],
  removeLawsWithLabels: ["WindkraftAbstandsregel"],

  effects(data, startYear, currentYear) {
    return [
      modify("popularity")
        .byValue(-40)
        .if(startYear === currentYear),
      modify("electricityWindOnshoreMaxNew").setValue(1000 as TWh),
    ]
  },

  priority(game) {
    const v = game.values
    const relWindPercentage: Percent = (v.electricityWind / v.electricityDemand) * 100
    return linear(80, 40, relWindPercentage)
  },
})
