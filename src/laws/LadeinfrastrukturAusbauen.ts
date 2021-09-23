import { defineLaw } from "../Factory"
import { MrdEuro } from "../types"
import { linear } from "../lawTools"
import { Change, modify } from "../params"
import { markdown } from "../lib/utils"
import { vdvDatenFakten } from "../citations"

export default defineLaw({
  title: "Ladeinfrastruktur ausbauen",
  description: "Ausbau der Ladeinfrastruktur wird mit Steuermitteln stark gefördert.",

  effects(game, startYear, currentYear): Change[] {
    return [
      modify("stateDebt").byValue(5 as MrdEuro),
      modify("carRenewablePercentage").byValue(1),
      modify("popularity")
        .byValue(2)
        .if(startYear === currentYear),
    ]
  },

  priority(game) {
    const mobilityPercentage = (game.values.co2emissionsMobility / game.values.co2emissions) * 100
    return linear(0, 10, mobilityPercentage)
  },
  citations: [vdvDatenFakten],
  details: markdown`

  `,
  internals: markdown`
    # Happy Path 10.5

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Der Staatshaushalt wird jährlich mit 5 Mrd € stärker belastet.
    - Anteil erneuerbar betrieber PKW steigt um 1% pro Jahr.
    - Popularität steigt im ersten Jah um 2%

    # Vorbedingungen:

    - Priorität über 0%.

    # Priorität

    - 0 bei 0% Anteil an den CO2 Emissionen. (Zu Beginn: knapp 25%)
    - 100 bei 10% Anteil
    - linear interpoliert
  `,
})