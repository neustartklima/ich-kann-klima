import { defineLaw } from "../Factory"
import { linearPopChange } from "../lawTools"
import { Change, modify } from "../params"
import { markdown } from "../lib/utils"
import { ucl2021EconomicCostSixTimesHigher } from "../citations"
import { Percent } from "../types"

export default defineLaw({
  title: "Voller CO2 Preis",
  description: "Eine Tonne CO2 kostet ab jetzt 3000 Euro. Das deckt die derzeit prognostizierten Klimafolgekosten.",
  labels: ["CO2Preis"],
  removeLawsWithLabels: ["CO2Preis"],

  effects(game, startYear, currentYear): Change[] {
    const electricityRenewable =
      game.values.electricityWind +
      game.values.electricitySolar +
      game.values.electricityWater +
      game.values.electricityBiomass
    const electricityRenewablePercentage = (electricityRenewable / game.values.electricityDemand) * 100
    const electricityPopChange = linearPopChange(90, 50, electricityRenewablePercentage, -10)

    const carPopChange = linearPopChange(90, 50, game.values.carRenewablePercentage, -10)

    const relReduction: Percent = -5

    const brownModifier = modify("electricityBrownCoal").byPercent(relReduction)
    const hardModifier = modify("electricityHardCoal").byPercent(relReduction)
    const coalChange = brownModifier.getChange(game.values) + hardModifier.getChange(game.values)

    const buildingsOilModifier = modify("buildingsSourceOil").byPercent(relReduction)
    const buildingsOilChange = buildingsOilModifier.getChange(game.values)

    const carModifier = modify("carUsage").byPercent(relReduction)
    const carChange = carModifier.getChange(game.values)

    return [
      modify("stateDebt").byValue(-3000 * 1000000 * game.values.co2emissions),

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
  citations: [ucl2021EconomicCostSixTimesHigher],
  details: markdown`

  `,
  internals: markdown`
    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen werden.

    ## Staatsschulden

    sinken um die eingenommene CO2-Steuer von 150€ pro Tonne CO2.

    ## Popularität

    - [x] Popularität sinkt jährlich abhängig vom Anteil der Erneuerbaren an der Stromerzeugung.
    - [x] Popularität sinkt jährlich abhängig vom Anteil der Erneuerbaren am Straßenverkehr.

    Abhängigkeit vom jeweiligen Anteil der Erneuerbaren wie folgt:

    - Anteil >= 90%: Popularität sinkt nicht.
    - Anteil = 70%: Popularität sinkt um 5% pro Jahr.
    - Anteil = 50%: Popularität sinkt um 10% pro Jahr.
    - Anteil = 10%: Pooularität sinkt um 20% pro Jahr.
      (dazwischen linear interpoliert.)

    ## Fossile

    - [x] Nutzungen, die fossile Energieträger verwenden, reduzieren sich jährlich um 5%.

    - Es werden 5% von allen CO2 Emissionen bzw. emittierenden Größen abgezogen.
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
