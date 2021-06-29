import { defineLaw } from "../Factory"
import { TsdPeople, TWh, WritableBaseParams } from "../types"
import { changePercentBy, lawIsAccepted, linear } from "../lawTools"

export default defineLaw({
  title: "Ausschreibungsverfahren für Windkraft verdoppeln",
  description: "Der jährlich ausgeschriebene Windstrom-Zubau wird auf 16,2TWh verdoppelt.",
  labels: ["WindkraftSubvention"],
  removeLawsWithLabels: ["WindkraftSubvention"],
  treatAfterLabels: ["WindkraftAbstandsregel"],

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    const onshoreNew: TWh = Math.min(13.8 as TWh, data.electricityWindOnshoreMaxNew)
    const offshoreNew: TWh = 2.4
    return {
      popularity: startYear === currentYear ? changePercentBy(data.popularity, -1) : 0,
      unemployment: startYear === currentYear ? (-20 as TsdPeople) : 0,
      electricityWind: onshoreNew + offshoreNew,
    }
  },

  priority(game) {
    if (!lawIsAccepted(game, "AusschreibungsverfahrenfuerWindkraftWieBisher")) return 0
    const electricityRenewable =
      game.values.electricityWind +
      game.values.electricitySolar +
      game.values.electricityWater +
      game.values.electricityBiomass
    const percentage = (electricityRenewable / game.values.electricityDemand) * 100
    return linear(100, 50, percentage)
  },
})
