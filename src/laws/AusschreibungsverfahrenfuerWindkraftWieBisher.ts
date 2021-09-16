import { defineLaw } from "../Factory"
import { TWh } from "../types"
import { linear } from "../lawTools"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Ausschreibungsverfahren für Windkraft wie bisher",
  description:
    "Windkraft Betreiber können sich mehrmals im Jahr auf ein eine bestimte Leistung von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag. Insgesamt werden 8,1 TWh pro Jahr ausgeschrieben.",
  labels: ["initial", "hidden", "WindkraftSubvention"],
  removeLawsWithLabels: ["WindkraftSubvention"],
  treatAfterLabels: ["WindkraftAbstandsregel"],

  effects(game): Change[] {
    const onshoreNew: TWh = Math.min(6.9 as TWh, game.values.electricityWindOnshoreMaxNew)
    const offshoreNew: TWh = 1.2
    return [modify("electricityWind").byValue(onshoreNew + offshoreNew)]
  },

  priority(game) {
    const electricityRenewable =
      game.values.electricityWind +
      game.values.electricitySolar +
      game.values.electricityWater +
      game.values.electricityBiomass
    const percentage = (electricityRenewable / game.values.electricityDemand) * 100
    return linear(100, 30, percentage)
  },
})
