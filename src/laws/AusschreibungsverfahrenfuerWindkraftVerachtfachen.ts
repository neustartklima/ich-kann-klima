import { Change, modify } from "../params"
import { TsdPeople, TWh } from "../types"
import { defineLaw, monthsEffort } from "./LawsTypes"
import { lawIsAccepted, linear, renewablePercentage } from "./lawTools"

export default defineLaw({
  title: "Ausschreibungsverfahren für Windkraft verachtfachen",
  description: "Der jährlich ausgeschriebene Windstrom-Zubau wird auf 64,8TWh verachtfacht.",
  labels: ["WindkraftSubvention"],
  removeLawsWithLabels: ["WindkraftSubvention"],
  treatAfterLabels: ["WindkraftAbstandsregel"],

  effort(game) {
    return monthsEffort(5)
  },

  effects(game, startYear, currentYear): Change[] {
    const delay = lawIsAccepted(game, "WindkraftVereinfachen") ? 0 : 5

    const onshoreNew: TWh = Math.min(55.2 as TWh, game.values.electricityWindOnshoreMaxNew)
    const offshoreNew: TWh = 9.6
    return [
      modify("popularity")
        .byValue(-20)
        .if(startYear === currentYear),
      modify("unemployment")
        .byValue(-100 as TsdPeople)
        .if(startYear === currentYear),
      modify("electricityWind")
        .byValue(((onshoreNew + offshoreNew) * game.values.electricityWindEfficiency) / 100)
        .if(currentYear >= startYear + delay),
    ]
  },

  priority(game) {
    if (lawIsAccepted(game, "AusschreibungsverfahrenfuerWindkraftVervierfachen")) {
      return linear(100, 50, renewablePercentage(game))
    }
    return 0
  },
})
