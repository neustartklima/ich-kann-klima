import { defineLaw } from "../Factory"
import { TsdPeople, TWh } from "../types"
import { changePercentBy, lawIsAccepted, linear } from "../lawTools"
import { Change, modify, WritableBaseParams } from "../params"

export default defineLaw({
  title: "Ausschreibungsverfahren für Windkraft vervierfachen",
  description: "Der jährlich ausgeschriebene Windstrom-Zubau wird auf 32,4TWh vervierfacht.",
  labels: ["WindkraftSubvention"],
  removeLawsWithLabels: ["WindkraftSubvention"],
  treatAfterLabels: ["WindkraftAbstandsregel"],

  effects(data, startYear, currentYear): Change[] {
    const onshoreNew: TWh = Math.min(27.6 as TWh, data.electricityWindOnshoreMaxNew)
    const offshoreNew: TWh = 4.8
    return [
      modify("popularity").byPercent(-2).if(startYear === currentYear),
      modify("unemployment").byValue(-100 as TsdPeople).if(startYear === currentYear),
      modify("electricityWind").byValue(onshoreNew + offshoreNew),
    ]
  },

  priority(game) {
    if (!lawIsAccepted(game, "AusschreibungsverfahrenfuerWindkraftVerdoppeln")) return 0
    const electricityRenewable =
      game.values.electricityWind +
      game.values.electricitySolar +
      game.values.electricityWater +
      game.values.electricityBiomass
    const percentage = (electricityRenewable / game.values.electricityDemand) * 100
    return linear(100, 40, percentage)
  },
})
