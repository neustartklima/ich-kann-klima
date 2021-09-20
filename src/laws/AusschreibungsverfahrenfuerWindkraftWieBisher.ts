import { defineLaw } from "../Factory"
import { TWh } from "../types"
import { lawIsAccepted, linear, renewablePercentage } from "../lawTools"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Ausschreibungsverfahren für Windkraft wie zu Beginn",
  description:
    "Windkraft Betreiber können sich mehrmals im Jahr auf ein eine bestimte Leistung von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag. Insgesamt werden 8,1 TWh pro Jahr ausgeschrieben.",
  labels: ["initial", "hidden", "WindkraftSubvention"],
  removeLawsWithLabels: ["WindkraftSubvention"],
  treatAfterLabels: ["WindkraftAbstandsregel"],

  effects(game, startYear, currentYear): Change[] {
    const delay = lawIsAccepted(game, "WindkraftVereinfachen") ? 0 : 5

    const onshoreNew: TWh = Math.min(6.9 as TWh, game.values.electricityWindOnshoreMaxNew)
    const offshoreNew: TWh = 1.2
    return [
      modify("electricityWind")
        .byValue(onshoreNew + offshoreNew)
        .if(currentYear >= startYear + delay),
    ]
  },

  priority(game) {
    if (lawIsAccepted(game, "AusschreibungsverfahrenfuerWindkraftVerdoppeln")) {
      return linear(60, 100, renewablePercentage(game))
    }
    return 0
  },
})
