import { defineLaw } from "../Factory"
import { TsdPeople, TWh } from "../types"
import { lawIsAccepted, linear } from "../lawTools"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Ausschreibungsverfahren für Windkraft verdoppeln",
  description: "Der jährlich ausgeschriebene Windstrom-Zubau wird auf 16,2TWh verdoppelt.",
  labels: ["WindkraftSubvention"],
  removeLawsWithLabels: ["WindkraftSubvention"],
  treatAfterLabels: ["WindkraftAbstandsregel"],

  effects(data, startYear, currentYear): Change[] {
    const onshoreNew: TWh = Math.min(13.8 as TWh, data.electricityWindOnshoreMaxNew)
    const offshoreNew: TWh = 2.4
    return [
      modify("popularity").byValue(-1).if(startYear === currentYear),
      modify("unemployment").byValue(-20 as TsdPeople).if(startYear === currentYear),
      modify("electricityWind").byValue(onshoreNew + offshoreNew),
    ]
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
