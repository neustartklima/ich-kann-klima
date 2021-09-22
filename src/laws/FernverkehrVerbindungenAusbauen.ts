import { defineLaw } from "../Factory"
import { linear } from "../lawTools"
import { MrdEuro, Percent } from "../types"
import { Change, modify } from "../params"
import { markdown } from "../lib/utils"

export default defineLaw({
  title: "Fernverkehr Verbindungen ausbauen",
  description: "Der Ausbau des öffentlichen Fernverkehrs wird bundesweit stärker Bezuschusst und Vorangetrieben",

  effects(game): Change[] {
    const relCapacity = (game.values.publicNationalCapacity / game.values.publicNationalUsage) * 100

    // Need to use carModifier with byValue() here, to ensure it does not fall below zero:
    const carModifier = modify("carUsage")
      .byValue(0.015 * game.values.publicNationalUsage)
      .if(relCapacity >= 105)
    const carChange = carModifier.getChange(game.values)

    return [
      modify("stateDebt").byValue(6 as MrdEuro),
      modify("publicNationalCapacity").byPercent(1),
      carModifier,
      modify("publicNationalUsage").byValue(0.667 * -carChange),
      modify("publicLocalUsage").byValue(0.333 * -carChange),
      modify("popularity")
        .byValue(2)
        .if(relCapacity >= 105),
    ]
  },

  priority(game) {
    const relCapacity: Percent = (game.values.publicNationalCapacity / game.values.publicNationalUsage) * 100
    return linear(150, 80, relCapacity)
  },
  citations: [],
  details: markdown`

  `,
  internals: markdown`
    # Happy Path 17

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen.

    - Der Staatshaushalt wird jährlich mit 6 Mrd € mehr belastet. (Analog zu Nahverkehr)
    - Fernverkehr Kapazität steigt jährlich um 1%
    - Sobald die Kapazität um 5% gestiegen ist (relative Kapazität >= 105%):
      - Fernverkehr Nutzung steigt jährlich um 1%.
      - Nahverkehr Nutzung steigt jährlich um die Hälfte der Steigerung des Fernverkehrs.
      - PKW Nutzung sinkt entsprechend um die Summe der Steigerungen von Fern- und Nahverkehr
      - Die Popularität steigt um 2% pro Jahr.

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität:

    - 0 bei 150% relativer Kapazität. (Zu Beginn: 100%)
    - 100 bei 80% relativer Kapazität.
    - linear interpoliert
  `,
})
