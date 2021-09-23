import { defineLaw } from "../Factory"
import { MrdEuro } from "../types"
import { linear } from "../lawTools"
import { Change, modify, transfer } from "../params"
import { markdown } from "../lib/utils"
import { bmvi2020OePNVFoerderungDesBundes, cite } from "../citations"

export default defineLaw({
  title: "Nahverkehr Ausbauen",
  description: "Der Ausbau des Nahverkehrs wird bundesweit stärker bezuschusst.",

  effects(game, startYear, currentYear): Change[] {
    const relCapacity = (game.values.publicLocalCapacity / game.values.publicLocalUsage) * 100

    const yearsActive = currentYear - startYear
    return [
      modify("stateDebt").byValue(3 as MrdEuro),
      modify("publicLocalCapacity").byPercent(1),
      transfer("publicLocalUsage", "carUsage")
        .byPercent(1)
        .if(relCapacity >= 105),
      modify("popularity")
        .byValue(2)
        .if(yearsActive >= 5),
    ]
  },

  priority(game) {
    const mobilityPercentage = (game.values.co2emissionsMobility / game.values.co2emissions) * 100
    return linear(20, 35, mobilityPercentage)
  },
  citations: [bmvi2020OePNVFoerderungDesBundes],
  details: markdown`

  `,
  internals: markdown`
    # Happy Path 18

    # Folgen

    - Der Staatshaushalt wird jährlich mit 3 Mrd € mehr belastet. (${cite(bmvi2020OePNVFoerderungDesBundes)})
    - Nahverkehr Kapazität steigt jährlich um 1%
    - (Umstieg von individual Verkehr auf ÖPNV wird vereinfacht)
        - (Geringere Verkehrsbelastung in städtischen Gebieten / auf Kurzstrecken)
        - Nahverkehr Nutzung steigt jährlich um 1%, sobald die relative Kapazität 105% erreicht hat.
        - PKW Nutzung sinkt um denselben Wert.
    - Langfristig: 5 Jahre nach Inkrafttreten:
        - (CO2 Emissionen des Mobilitätssektors sinken um 2 Mio t pro Jahr.) (Indirekt)
        - Beliebtheit steigt um 2% pro Jahr.

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität:

    - 0 bei 20% Anteil an den CO2 Emissionen. (Zu Beginn: knapp 25%)
    - 100 bei 35% Anteil
    - linear interpoliert
  `,
})
