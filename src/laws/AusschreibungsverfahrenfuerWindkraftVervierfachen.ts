import { defineLaw } from "../Factory"
import { TsdPeople, TWh, WritableBaseParams } from "../types"
import { changePercentBy, lawIsAccepted, linear } from "../lawTools"

export default defineLaw({
  title: "Ausschreibungsverfahren für Windkraft vervierfachen",
  description: "Der jährlich ausgeschriebene Windstrom-Zubau wird auf 32,4TWh vervierfacht.",
  labels: ["WindkraftSubvention"],
  removeLawsWithLabels: ["WindkraftSubvention"],
  treatAfterLabels: ["WindkraftAbstandsregel"],

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    const onshoreNew: TWh = Math.min(27.6 as TWh, data.electricityWindOnshoreMaxNew)
    const offshoreNew: TWh = 4.8
    return {
      popularity: startYear === currentYear ? changePercentBy(data.popularity, -2) : 0,
      unemployment: startYear === currentYear ? (-100 as TsdPeople) : 0,
      electricityWind: onshoreNew + offshoreNew,
    }
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
