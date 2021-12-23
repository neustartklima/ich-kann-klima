import { wdr2021KlimaschutzMitCO2Preis } from "../citations"
import { markdown } from "../lib/utils"
import { defineLaw, monthsEffort } from "./LawsTypes"
import { co2PricingEffects, lawIsAccepted, linearPopChange } from "./lawTools"

export default defineLaw({
  title: "CO2 Preis Erhöhen",
  description:
    "Die Preise werden schneller erhöht, als bisher geplant. Eine Tonne CO2 kostet in 2 Jahren 70 Euro und in 4 Jahren 100 Euro.",
  labels: ["CO2Preis"],
  removeLawsWithLabels: ["CO2Preis"],

  effort(game) {
    return monthsEffort(6)
  },

  effects(game, startYear, currentYear) {
    const price = currentYear >= startYear + 2 ? (currentYear >= startYear + 4 ? 100 : 70) : 0
    return [
      ...co2PricingEffects(game, price, -0.5, linearPopChange({ value: 50, result: 0 }, { value: 0, result: -1 })),
    ]
  },

  priority(game) {
    if (lawIsAccepted(game, "VollerCO2Preis") || lawIsAccepted(game, "WirksamerCO2Preis")) return 0
    return 50
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

    - Kein anderes CO2 Preis Gesetz wurde bisher beschlossen.

    # Priorität

    - 50%
  `,
})
