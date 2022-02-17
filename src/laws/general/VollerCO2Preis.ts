import { ucl2021EconomicCostSixTimesHigher } from "../../citations"
import { markdown } from "../../lib/utils"
import { defineLaw, monthsEffort } from "../LawsTypes"
import { co2PricingEffects, currentEventIsInList, lawIsAccepted, linearPopChange } from "../lawTools"

export default defineLaw({
  title: "Voller CO2 Preis",
  description: "Eine Tonne CO2 kostet ab jetzt 3000 Euro. Das deckt die derzeit prognostizierten Klimafolgekosten.",
  labels: ["CO2Preis"],
  removeLawsWithLabels: ["CO2Preis"],

  effort(game) {
    return monthsEffort(10)
  },

  effects(game, startYear, currentYear) {
    return [...co2PricingEffects(game, 3000, -5, linearPopChange({ value: 90, result: 0 }, { value: 50, result: -10 }))]
  },

  priority(game) {
    if (currentEventIsInList(game, ["EnergieStrategie"])) {
      return 100
    }
    if (!lawIsAccepted(game, "WirksamerCO2Preis")) return 0
    return 50
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

    - "WirksamerCO2Preis" wurde beschlossen.

    # Priorität

    - 50%
  `,
})
