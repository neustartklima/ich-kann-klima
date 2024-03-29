import { markdown } from "../../lib/utils"
import { Change, modify } from "../../params"
import { TsdPeople } from "../../types"
import { defineLaw, monthsEffort } from "../LawsTypes"
import { currentEventIsInList, lawIsAccepted, linear, renewablePercentage, windPowerExpansion } from "../lawTools"

export default defineLaw({
  title: "Ausschreibungsverfahren für Windkraft 32,4 TWh",
  description: "Der jährlich ausgeschriebene Windstrom-Zubau wird auf 32,4 TWh vervierfacht.",
  labels: ["WindkraftSubvention"],
  removeLawsWithLabels: ["WindkraftSubvention"],
  treatAfterLabels: ["WindkraftAbstandsregel"],

  effort(game) {
    if (lawIsAccepted(game, "AusschreibungsverfahrenfuerWindkraftVerdoppeln")) {
      return monthsEffort(4)
    }
    return monthsEffort(6)
  },

  effects(game, startYear, currentYear): Change[] {
    return [
      modify("stateDebt").byValue(4),
      modify("popularity")
        .byValue(-2)
        .if(startYear === currentYear),
      modify("unemployment")
        .byValue(-100 as TsdPeople)
        .if(startYear === currentYear),
      ...windPowerExpansion(game, 27.6, 4.8, startYear),
    ]
  },

  priority(game) {
    if (currentEventIsInList(game, ["WindkraftAusschreibung"])) {
      return 100
    }
    if (lawIsAccepted(game, "AusschreibungsverfahrenfuerWindkraftVerdoppeln")) {
      return linear(100, 50, renewablePercentage(game))
    }
    if (lawIsAccepted(game, "AusschreibungsverfahrenfuerWindkraftVerachtfachen")) {
      return linear(0, 100, renewablePercentage(game))
    }
    return 0
  },
  citations: [],
  details: markdown`
    Windkraft Betreiber können sich mehrmals im Jahr auf ein eine bestimte Leistung
    von Windkraft bewerben. Der Betreiber, der das Projekt mit der kleinstmöglichen
    Subventionierung umsetzen kann bekommt den Zuschlag.
  `,
  internals: markdown`
    # Happy Path 3

    # Folgen

    - [x] Schulden +-0 (Zur besseren Verständlichkeit 4 MrdEuro pro Jahr.)
    - [x] Popularität: -2%
    - [x] Arbeitsplätze: 500.000 also Arbeitslosigkeit -100 Tausend Menschen im ersten Jahr
    - [ ] Abhängigkeit, ob das Budget ausgeschöpft wird, ist schwierig.)
    - [x] CO2 Emissionen: Zubau Windkraftonshore +27,6 TWh (es sei den gedeckelt durch Abstandsregeln), Windkraftoffshore + 4,8 TWh.

    # Vorbedingungen

    - Nur wenn "verdoppeln" schon beschlossen wurde.
    - Priorität über 0%.

    # Priorität

    Wenn bisher "verdoppeln":

    - 0% bei einem Anteil der erneuerbaren Stromquellen von 100%. (Zu Beginn: 50%)
    - 100% bei einem Anteil der erneuerbaren Stromquellen von 40%.
      Wenn bisher "verachtfachen":
    - 0% bei einem Anteil der erneuerbaren Stromquellen von 0%. (Zu Beginn: 50%)
    - 100% bei einem Anteil der erneuerbaren Stromquellen von 100%.
    - linear interpoliert
  `,
})
