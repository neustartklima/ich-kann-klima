import { defineLaw } from "../Factory"
import { changePercentBy, linear } from "../lawTools"
import { Percent, TWh } from "../types"
import { WritableBaseParams } from "../params"

export default defineLaw({
  title: "Abstandsregeln für Windkraft verschärfen",
  description:
    "Der Mindestabstand zwischen Wind Energie Anlagen und Wohngebäuden im Innenbereich muss das Zehnfache der Gesamthöhe der Wind Energie Anlagen betragen (10H-Regel)",
  labels: ["WindkraftAbstandsregel"],
  removeLawsWithLabels: ["WindkraftAbstandsregel"],

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    return {
      popularity: startYear === currentYear ? changePercentBy(data.popularity, +5) : 0,
      electricityWindOnshoreMaxNew: (0.42 as TWh) - data.electricityWindOnshoreMaxNew,
    }
  },

  priority(game) {
    const v = game.values
    const relWindPercentage: Percent = (v.electricityWind / v.electricityDemand) * 100
    return linear(0, 100, relWindPercentage)
  },
})
