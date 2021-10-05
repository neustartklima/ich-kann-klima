import { defineLaw } from "../Factory"
import { MrdEuro } from "../types"
import { lawIsAccepted, linear } from "../lawTools"
import { Change, modify } from "../params"
import { markdown } from "../lib/utils"

export default defineLaw({
  title: "Elektromobilität Fördern",
  description: "Höhere Kaufprämien, Steuerbefreiung, günstiges Laden für E-Autos.",

  effects(game, startYear, currentYear): Change[] {
    if (lawIsAccepted(game, "LadeinfrastrukturAusbauen")) {
      return [
        modify("stateDebt").byValue(5 as MrdEuro),
        modify("carRenewablePercentage").byValue(1),
        modify("popularity")
          .byValue(4)
          .if(startYear === currentYear),
      ]
    }
    return []
  },

  priority(game) {
    if (!lawIsAccepted(game, "LadeinfrastrukturAusbauen")) return 0
    const mobilityPercentage = (game.values.co2emissionsMobility / game.values.co2emissions) * 100
    return linear(0, 25, mobilityPercentage)
  },
  citations: [],
  details: markdown`

  `,
  internals: markdown`
    # Happy Path 20.5

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    Nur wenn "LadeinfrastrukturAusbauen" beschlossen wurde:

    - Der Staatshaushalt wird jährlich mit 5 Mrd € stärker belastet.
    - Anteil erneuerbar betrieber PKW steigt um 1% pro Jahr.
    - Popularität steigt im ersten Jah um 4%

    # Vorbedingungen:

    - "LadeinfrastrukturAusbauen" ist beschlossen.
    - Priorität über 0%.

    # Priorität

    - 0 bei 0% Anteil an den CO2 Emissionen. (Zu Beginn: knapp 25%)
    - 100 bei 25% Anteil
    - linear interpoliert
  `,
})
