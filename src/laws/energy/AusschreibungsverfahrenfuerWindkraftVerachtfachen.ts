import { Change, modify } from "../../params"
import { TsdPeople } from "../../types"
import { defineLaw, monthsEffort } from "../LawsTypes"
import { currentEventIsInList, lawIsAccepted, linear, renewablePercentage, windPowerExpansion } from "../lawTools"

export default defineLaw({
  title: "Ausschreibungsverfahren für Windkraft 64,8 TWh",
  description: "Der jährlich ausgeschriebene Windstrom-Zubau wird auf 64,8 TWh verachtfacht.",
  labels: ["WindkraftSubvention"],
  removeLawsWithLabels: ["WindkraftSubvention"],
  treatAfterLabels: ["WindkraftAbstandsregel"],

  effort(game) {
    return monthsEffort(5)
  },

  effects(game, startYear, currentYear): Change[] {
    return [
      modify("popularity")
        .byValue(-20)
        .if(startYear === currentYear),
      modify("unemployment")
        .byValue(-100 as TsdPeople)
        .if(startYear === currentYear),
      ...windPowerExpansion(game, 55.2, 9.6, startYear),
    ]
  },

  priority(game) {
    if (currentEventIsInList(game, ["WindkraftAusschreibung"])) {
      return 100
    }
    if (lawIsAccepted(game, "AusschreibungsverfahrenfuerWindkraftVervierfachen")) {
      return linear(100, 50, renewablePercentage(game))
    }
    return 0
  },
})
