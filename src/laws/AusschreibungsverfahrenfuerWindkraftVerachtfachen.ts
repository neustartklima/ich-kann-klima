import { defineLaw } from "../Factory"
import { TsdPeople, TWh } from "../types"
import { lawIsAccepted, linear } from "../lawTools"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Ausschreibungsverfahren für Windkraft verachtfachen",
  description: "Der jährlich ausgeschriebene Windstrom-Zubau wird auf 64,8TWh verachtfacht.",
  labels: ["WindkraftSubvention"],
  removeLawsWithLabels: ["WindkraftSubvention"],
  treatAfterLabels: ["WindkraftAbstandsregel"],

  effects(data, startYear, currentYear): Change[] {
    const onshoreNew: TWh = Math.min(55.2 as TWh, data.electricityWindOnshoreMaxNew)
    const offshoreNew: TWh = 9.6
    return [
      modify("popularity").byPercent(-20).if(startYear === currentYear),
      modify("unemployment").byValue(-100 as TsdPeople).if(startYear === currentYear),
      modify("electricityWind").byValue(onshoreNew + offshoreNew),
    ]
  },

  priority(game) {
    if (!lawIsAccepted(game, "AusschreibungsverfahrenfuerWindkraftVervierfachen")) return 0
    const electricityRenewable =
      game.values.electricityWind +
      game.values.electricitySolar +
      game.values.electricityWater +
      game.values.electricityBiomass
    const percentage = (electricityRenewable / game.values.electricityDemand) * 100
    return linear(100, 0, percentage)
  },
})
