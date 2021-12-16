import { defineLaw, monthsEffort } from "./LawsTypes"
import { MrdEuro } from "../types"
import { linear } from "./lawTools"
import { Change, modify, transfer } from "../params"
import { markdown } from "../lib/utils"

export default defineLaw({
  title: "Fernverkehr Modernisieren",
  description: "Moderne, bequeme und weniger anfällige Züge werden für den Fernverkehr angeschafft.",

  effort(game) {
    return monthsEffort(4)
  },

  effects(game, startYear, currentYear): Change[] {
    return [
      modify("stateDebt").byValue(3 as MrdEuro),
      modify("publicNationalCapacity").byPercent(1),
      transfer("publicNationalUsage", "carUsage").byPercent(1),
      modify("popularity").byValue(3),
    ]
  },

  priority(game) {
    const mobilityPercentage = (game.values.co2emissionsMobility / game.values.co2emissions) * 100
    return linear(0, 24, mobilityPercentage)
  },
  citations: [],
  details: markdown`

  `,
  internals: markdown`
    # Happy Path 15

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Der Staatshaushalt wird jährlich mit 3 Mrd € stärker belastet.
    - Die "Kapazität" des Fernverkehrs steigt jährlich um 1%.
    - Umstieg von individual Verkehr auf Fernverkehr ist attraktiver:
      - Fernverkehr Nutzung steigt 1% jährlich.
      - Auto Nutzung sinkt entsprechend.
    - Popularität steigt jährlich um 3%.

    # Vorbedingungen:

    - Priorität über 0%.

    # Priorität

    - 0 bei 0% Anteil an den CO2 Emissionen. (Zu Beginn: knapp 25%)
    - 100 bei 24% Anteil
    - linear interpoliert
  `,
})
