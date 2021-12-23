import { Change, modify } from "../params"
import { TsdPeople } from "../types"
import { defineLaw, monthsEffort } from "./LawsTypes"
import { lawIsAccepted, linear, renewablePercentage, windPowerExpansion } from "./lawTools"

export default defineLaw({
  title: "Ausschreibungsverfahren für Windkraft verdoppeln",
  description: "Der jährlich ausgeschriebene Windstrom-Zubau wird auf 16,2TWh verdoppelt.",
  labels: ["WindkraftSubvention"],
  removeLawsWithLabels: ["WindkraftSubvention"],
  treatAfterLabels: ["WindkraftAbstandsregel"],

  effort(game) {
    return monthsEffort(2)
  },

  effects(game, startYear, currentYear): Change[] {
    return [
      modify("popularity")
        .byValue(-1)
        .if(startYear === currentYear),
      modify("unemployment")
        .byValue(-20 as TsdPeople)
        .if(startYear === currentYear),
      ...windPowerExpansion(game, 13.8, 2.4, startYear),
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
