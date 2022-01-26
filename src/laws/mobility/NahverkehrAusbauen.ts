import { bmvi2020OePNVFoerderungDesBundes, cite } from "../../citations"
import { markdown } from "../../lib/utils"
import { Change, modify, transfer } from "../../params"
import { MrdEuro, Percent } from "../../types"
import { defineLaw, monthsEffort } from "../LawsTypes"
import { linear } from "../lawTools"

export default defineLaw({
  title: "Nahverkehr Ausbauen",
  description: "Der Ausbau des Nahverkehrs wird bundesweit stärker bezuschusst.",

  effort(game) {
    return monthsEffort(5, "Komplexe Verhandlungen mit den Bundesländern dauern {months}.")
  },

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
    const relCapacity: Percent = (game.values.publicLocalCapacity / game.values.publicLocalUsage) * 100
    return linear(150, 80, relCapacity)
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

    Sollte erst vorgeschlagen werden, wenn genügend Nachfrage da ist.

    - 0 bei 150% relativer Kapazität. (Zu Beginn: 100%)
    - 100 bei 80% relativer Kapazität.
    - linear interpoliert
  `,
})
