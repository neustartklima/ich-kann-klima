import { defineLaw } from "../Factory"
import { linear } from "../lawTools"
import { Percent, TWh } from "../types"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Abstandsregeln für Windkraft verschärfen",
  description:
    "Der Mindestabstand zwischen Wind Energie Anlagen und Wohngebäuden im Innenbereich muss das Zehnfache der Gesamthöhe der Wind Energie Anlagen betragen (10H-Regel)",
  labels: ["WindkraftAbstandsregel"],
  removeLawsWithLabels: ["WindkraftAbstandsregel"],

  effects(data, startYear, currentYear): Change[] {
    return [
      modify("popularity").byValue(5).if(startYear === currentYear),
      modify("electricityWindOnshoreMaxNew").byValue((0.42 as TWh) - data.electricityWindOnshoreMaxNew),
    ]
  },

  priority(game) {
    const v = game.values
    const relWindPercentage: Percent = (v.electricityWind / v.electricityDemand) * 100
    return linear(0, 100, relWindPercentage)
  },
})
