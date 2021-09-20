import { defineLaw } from "../Factory"
import { linearPopChange, renewablePercentage } from "../lawTools"
import { Change, modify } from "../params"
import { markdown } from "../lib/utils"
import { wdr2021KlimaschutzMitCO2Preis } from "../citations"
import { Percent } from "../types"

export default defineLaw({
  title: "CO2 Preis Erhöhen",
  description:
    "Die Preise werden schneller erhöht, als bisher geplant. Eine Tonne CO2 kostet in 2 Jahren 70 Euro und in 4 Jahren 100 Euro.",
  labels: ["CO2Preis"],
  removeLawsWithLabels: ["CO2Preis"],

  effects(game, startYear, currentYear): Change[] {
    const electricityPopChange = linearPopChange(50, 0, renewablePercentage(game), -1)

    const carPopChange = linearPopChange(50, 0, game.values.carRenewablePercentage, -1)

    const relReduction: Percent = -0.5

    const brownModifier = modify("electricityBrownCoal").byPercent(relReduction)
    const hardModifier = modify("electricityHardCoal").byPercent(relReduction)
    const coalChange = brownModifier.getChange(game.values) + hardModifier.getChange(game.values)

    const buildingsOilModifier = modify("buildingsSourceOil").byPercent(relReduction)
    const buildingsOilChange = buildingsOilModifier.getChange(game.values)

    const carModifier = modify("carUsage").byPercent(relReduction)
    const carChange = carModifier.getChange(game.values)

    return [
      modify("stateDebt")
        .byValue(-45 * 1000000 * game.values.co2emissions)
        .if(currentYear >= startYear + 2),
      modify("stateDebt")
        .byValue(-30 * 1000000 * game.values.co2emissions)
        .if(currentYear >= startYear + 4),

      modify("popularity").byValue(electricityPopChange + carPopChange),

      modify("co2emissionsIndustry").byPercent(relReduction),
      modify("co2emissionsAgriculture").byPercent(relReduction),
      modify("co2emissionsOthers").byPercent(relReduction),

      brownModifier,
      hardModifier,
      modify("electricityWind").byValue(0.7 * -coalChange),
      modify("electricitySolar").byValue(0.3 * -coalChange),

      buildingsOilModifier,
      modify("buildingsSourceBio").byValue(-buildingsOilChange), // TODO #78: What about other regernative sources?

      carModifier,
      modify("publicNationalUsage").byValue(0.5 * -carChange),
      modify("publicLocalUsage").byValue(0.5 * -carChange),
    ]
  },

  priority(game) {
    return 100
  },
  citations: [wdr2021KlimaschutzMitCO2Preis],
  details: markdown`

  `,
  internals: markdown`
    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen werden.

    ## Staatsschulden

    sinken um die zusätzlich eingenommene CO2-Steuer: Nach 2 Jahren um 45€, nach 4 Jahren um 75€ pro emittierter Tonne CO2.

    ## Popularität

    - [x] Popularität sinkt jährlich abhängig vom Anteil der Erneuerbaren an der Stromerzeugung.
    - [x] Popularität sinkt jährlich abhängig vom Anteil der Erneuerbaren am Straßenverkehr.

    Abhängigkeit vom jeweiligen Anteil der Erneuerbaren wie folgt:

    - Anteil >= 50%: Popularität sinkt nicht.
    - Anteil = 25%: Popularität sinkt um 0.5% pro Jahr.
    - Anteil = 0%: Pooularität sinkt um 1% pro Jahr.
      (dazwischen linear interpoliert.)

    ## Fossile

    - [x] Nutzungen, die fossile Energieträger verwenden, reduzieren sich jährlich um 0,5%.

    - Es werden 0,5% von allen CO2 Emissionen bzw. emittierenden Größen abgezogen.
    - Nicht mehr erzeugter Kohlestrom wird zu 70% aus Windkraft udn 30% Solar erzeugt.
    - Erdöl wird ersetzt durch biologische Quellen.
    - KFZ wird je zur Hälfte durch Fernverkehr und Nahverkehr ersetzt.

    TODO #78: Dies ist ein sehr grobes Modell.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    - 100%
  `,
})
