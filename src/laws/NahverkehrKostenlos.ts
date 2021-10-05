import { defineLaw } from "../Factory"
import { MrdEuro, Percent, TsdPeople } from "../types"
import { lawIsAccepted, linear } from "../lawTools"
import { Change, modify, transfer } from "../params"
import { markdown } from "../lib/utils"
import { cite, vdvDatenFakten } from "../citations"

export default defineLaw({
  title: "Nahverkehr Kostenlos",
  description:
    "Die Kosten für den Nahverkehr werden bundesweit bezuschusst, so dass keine Tickets mehr benötigt werden.",

  effects(game, startYear, currentYear): Change[] {
    const percentage = startYear === currentYear ? 10 : 1

    return [
      modify("stateDebt").byValue(10 as MrdEuro),
      transfer("publicLocalUsage", "carUsage").byPercent(percentage),
      modify("popularity")
        .byValue(10)
        .if(startYear === currentYear),
      modify("unemployment")
        .byValue(20 as TsdPeople)
        .if(startYear === currentYear), // 80 Tsd Beschäftigte im ÖPNV, geschätzt 1/4 für Ticketverkauf, -kontrolle und -abrechnung.
    ]
  },

  priority(game) {
    const relCapacity: Percent = (game.values.publicLocalCapacity / game.values.publicLocalUsage) * 100
    return linear(90, 120, relCapacity)
  },
  citations: [vdvDatenFakten],
  details: markdown`

  `,
  internals: markdown`
    # Happy Path 19

    # Folgen

    - Der Staatshaushalt wird jährlich mit 10 Mrd € stärker belastet.
        - 13.3 Mrd € Ticketeinnahmen pro Jahr (${cite(vdvDatenFakten)})
        - Annahme: Einsparung durch Ticketverkauf und Personal.
    - (CO2 Emissionen für Mobilität singenk jährlich um 2 MioTonnen) (indirekt)
    - Umstieg von individual Verkehr auf ÖPNV lohnt sich mehr
        - Geringere Verkehrsbelastung in gut angeschlossenen Gebieten.
        - CO2 Emissionen werden indirekt verbessert.
        - Nahverkehr Nutzung steigt im ersten Jahr um 10%, danach um 1% jährlich.
        - Auto Nutzung sinkt entsprechend.
    - Arbeitslosigkeit steigt im ersten Jahr um 20 000 Menschen.
    - Popularität steigt im ersten Jah um 10%
        - (Sozial benachteiligte Personen profitieren)

    # Vorbedingungen:

    - Priorität über 0%.

    # Priorität

    Sollte erst vorgeschlagen werden, wenn genügend Kapazität da ist.

    - 0 bei 90% relativer Kapazität. (Zu Beginn: 100%)
    - 100 bei 120% relativer Kapazität.
    - linear interpoliert
  `,
})
