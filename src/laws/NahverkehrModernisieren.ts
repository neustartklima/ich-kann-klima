import { vdvDatenFakten } from "../citations"
import { markdown } from "../lib/utils"
import { Change, modify, transfer } from "../params"
import { MrdEuro } from "../types"
import { defineLaw, monthsEffort } from "./LawsTypes"
import { lawIsAccepted, linear } from "./lawTools"

export default defineLaw({
  title: "Nahverkehr Modernisieren",
  description: "Anschaffung Moderner, bequemer, emissionsfreier Fahrzeuge für den Nahverkehr wird gefördert.",

  effort(game) {
    return monthsEffort(4)
  },

  effects(game, startYear, currentYear): Change[] {
    return [
      modify("stateDebt").byValue(3 as MrdEuro),
      modify("publicLocalCapacity").byPercent(1),
      transfer("publicLocalUsage", "carUsage").byPercent(1),
      modify("popularity").byValue(3),
    ]
  },

  priority(game) {
    if (!lawIsAccepted(game, "FernverkehrModernisieren")) return 0
    const mobilityPercentage = (game.values.co2emissionsMobility / game.values.co2emissions) * 100
    return linear(0, 24, mobilityPercentage)
  },
  citations: [vdvDatenFakten],
  details: markdown`

  `,
  internals: markdown`
    # Happy Path 16

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Der Staatshaushalt wird jährlich mit 3 Mrd € stärker belastet.
    - Die "Kapazität" des Nahverkehrs steigt jährlich um 1%.
    - Umstieg von individual Verkehr auf Nahverkehr ist attraktiver:
      - Nahverkehr Nutzung steigt 1% jährlich.
      - Auto Nutzung sinkt entsprechend.
    - Popularität steigt jährlich um 3%.

    # Vorbedingungen:

    - "FernverkehrModernisieren" wurde beschlossen. (Damit nicht zu viele ähnliche Vorschläge gleichzeitig da sind.)
    - Priorität über 0%.

    # Priorität

    - 0 bei 0% Anteil an den CO2 Emissionen. (Zu Beginn: knapp 25%)
    - 100 bei 24% Anteil
    - linear interpoliert
  `,
})
