import { wdr2021KlimaschutzMitCO2Preis } from "../../citations"
import { markdown } from "../../lib/utils"
import { defineLaw, monthsEffort } from "../LawsTypes"
import { co2PricingEffects, lawIsAccepted, linearPopChange } from "../lawTools"

export default defineLaw({
  title: "Wirksamer CO2 Preis",
  description: "Eine Tonne CO2 kostet ab jetzt 150 Euro.",
  labels: ["CO2Preis"],
  removeLawsWithLabels: ["CO2Preis"],

  effort(game) {
    return monthsEffort(8)
  },

  effects(game, startYear, currentYear) {
    return [...co2PricingEffects(game, 150, -2, linearPopChange({ value: 80, result: 0 }, { value: 50, result: -3 }))]
  },

  priority(game) {
    if (!lawIsAccepted(game, "CO2PreisErhoehen")) return 0
    return 50
  },
  citations: [wdr2021KlimaschutzMitCO2Preis],
  details: markdown`

  `,
  internals: markdown`
    # Happy Path 5.5

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen werden.

    ## Staatsschulden

    sinken um die zusätzlich eingenommene CO2-Steuer von 125€ pro Tonne CO2.

    ## Popularität

    - [x] Popularität sinkt jährlich abhängig vom Anteil der Erneuerbaren an der Stromerzeugung.
    - [x] Popularität sinkt jährlich abhängig vom Anteil der Erneuerbaren am Straßenverkehr.

    Abhängigkeit vom jeweiligen Anteil der Erneuerbaren wie folgt:

    - Anteil >= 80%: Popularität sinkt nicht.
    - Anteil = 65%: Popularität sinkt um 1,5% pro Jahr.
    - Anteil = 50%: Popularität sinkt um 3% pro Jahr.
    - Anteil = 20%: Pooularität sinkt um 6% pro Jahr.
      (dazwischen linear interpoliert.)

    ## Fossile

    - [x] Nutzungen, die fossile Energieträger verwenden, reduzieren sich jährlich um 2%.

    - Es werden 2% von allen CO2 Emissionen bzw. emittierenden Größen abgezogen.
    - Nicht mehr erzeugter Kohlestrom wird zu 70% aus Windkraft udn 30% Solar erzeugt.
    - Erdöl wird ersetzt durch biologische Quellen.
    - KFZ wird je zur Hälfte durch Fernverkehr und Nahverkehr ersetzt.

    TODO #78: Dies ist ein sehr grobes Modell.

    # Voraussetzungen

    - "CO2PreisErhoehen" wurde beschlossen.

    # Priorität

    - 50%
  `,
})
