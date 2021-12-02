import { defineLaw } from "./LawsTypes"
import { TsdPeople, TWh } from "../types"
import { lawIsAccepted, linear, renewablePercentage } from "./lawTools"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Ausschreibungsverfahren für Windkraft verdoppeln",
  description: "Der jährlich ausgeschriebene Windstrom-Zubau wird auf 16,2TWh verdoppelt.",
  labels: ["WindkraftSubvention"],
  removeLawsWithLabels: ["WindkraftSubvention"],
  treatAfterLabels: ["WindkraftAbstandsregel"],

  effects(game, startYear, currentYear): Change[] {
    const delay = lawIsAccepted(game, "WindkraftVereinfachen") ? 0 : 5

    const onshoreNew: TWh = Math.min(13.8 as TWh, game.values.electricityWindOnshoreMaxNew)
    const offshoreNew: TWh = 2.4
    return [
      modify("popularity")
        .byValue(-1)
        .if(startYear === currentYear),
      modify("unemployment")
        .byValue(-20 as TsdPeople)
        .if(startYear === currentYear),
      modify("electricityWind")
        .byValue(((onshoreNew + offshoreNew) * game.values.electricityWindEfficiency) / 100)
        .if(currentYear >= startYear + delay),
    ]
  },

  priority(game) {
    if (lawIsAccepted(game, "AusschreibungsverfahrenfuerWindkraftWieBisher")) {
      return linear(100, 50, renewablePercentage(game))
    }
    if (lawIsAccepted(game, "AusschreibungsverfahrenfuerWindkraftVervierfachen")) {
      return linear(40, 100, renewablePercentage(game))
    }
    return 0
  },
})
