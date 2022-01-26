import { markdown } from "../../lib/utils"
import { Change, modify } from "../../params"
import { MrdEuro } from "../../types"
import { defineLaw, monthsEffort } from "../LawsTypes"
import { lawIsAccepted, linear } from "../lawTools"

export default defineLaw({
  title: "Wasserstoffmobilität fördern",
  description: "Wasserstoffbasierte Fahrzeuge werden gefördert.",

  effort(game) {
    return monthsEffort(2)
  },

  effects(game, startYear, currentYear): Change[] {
    if (lawIsAccepted(game, "WasserstofftechnologieFoerdern")) {
      return [
        modify("stateDebt").byValue(3 as MrdEuro),
        modify("carRenewablePercentage").byValue(1),
        modify("popularity")
          .byValue(1)
          .if(startYear === currentYear),
      ]
    }
    return []
  },

  priority(game) {
    const mobilityPercentage = (game.values.co2emissionsMobility / game.values.co2emissions) * 100
    return linear(0, 26, mobilityPercentage)
  },
  citations: [],
  details: markdown`

  `,
  internals: markdown`
    # Happy Path 21

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    Nur wenn "WasserstofftechnologieFoerdern" beschlossen wurde:

    - Der Staatshaushalt wird jährlich mit 3 Mrd € stärker belastet.
    - Anteil erneuerbar betrieber PKW steigt um 1% pro Jahr.
    - Popularität steigt im ersten Jah um 1%

    # Vorbedingungen:

    - Priorität über 0%.

    # Priorität

    - 0 bei 0% Anteil an den CO2 Emissionen. (Zu Beginn: knapp 25%)
    - 100 bei 26% Anteil
    - linear interpoliert
  `,
})
