import { Change } from "../params"
import { defineLaw, monthsEffort } from "./LawsTypes"
import { lawIsAccepted, linear, renewablePercentage, windPowerExpansion } from "./lawTools"

export default defineLaw({
  title: "Ausschreibungsverfahren für Windkraft wie zu Beginn",
  description:
    "Windkraft Betreiber können sich mehrmals im Jahr auf ein eine bestimte Leistung von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstmöglichen Subventionierung umsetzen kann bekommt den Zuschlag. Insgesamt werden 8,1 TWh pro Jahr ausgeschrieben.",
  labels: ["initial", "hidden", "WindkraftSubvention"],
  removeLawsWithLabels: ["WindkraftSubvention"],
  treatAfterLabels: ["WindkraftAbstandsregel"],

  effort(game) {
    return monthsEffort(8)
  },

  effects(game, startYear, currentYear): Change[] {
    return [...windPowerExpansion(game, 6.9, 1.2, startYear)]
  },

  priority(game) {
    if (lawIsAccepted(game, "AusschreibungsverfahrenfuerWindkraftVerdoppeln")) {
      return linear(60, 100, renewablePercentage(game))
    }
    return 0
  },
})
