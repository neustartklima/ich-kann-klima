import { defineLaw } from "../Factory"
import { MrdEuro, TsdPeople } from "../types"
import { linear } from "../lawTools"
import { Change, modify } from "../params"
import { markdown } from "../lib/utils"

export default defineLaw({
  title: "Kohleverstromung einstellen",
  description: "Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",

  effects(game, startYear, currentYear): Change[] {
    const yearsActive = currentYear - startYear

    const compensation: MrdEuro = yearsActive < 18 ? 4.3 / 18 : 0
    const subventions: MrdEuro = 2.5

    const directJobsInvolved: TsdPeople = 20
    const indirectJobsInvolved: TsdPeople = 60
    const settlingFactor = (10 - yearsActive) / 55 // 10 + 9 + ... + 1 = 55
    const jobs = Math.max((directJobsInvolved + indirectJobsInvolved / 2) * settlingFactor, 0)

    return [
      modify("electricityHardCoal").setValue(0),
      modify("electricityBrownCoal").setValue(0),
      modify("stateDebt").byValue(-compensation + subventions),
      modify("unemployment").byValue(jobs),
    ]
  },

  priority(game) {
    if (game.values.electricityCoal / game.values.electricityDemand <= 0.1) {
      return 0
    }
    return linear(10000, 0, game.values.unemployment) // Not allowed if unemployment over 10 000 000
  },
  citations: [],
  details: markdown`

  `,
  internals: markdown`
    # Happy Path 5

    Muss nicht als erstes gewählt werden, weil es sich sofort auswirkt. Andere vorbereitende Maßnahmen sind ggf wichtiger.

    # Folgen

    - [x] Ab Inkrafttreten geht jährliche Braun- und Steinkohle Stromproduktion auf 0 TWh.
    - [ ] Ab dem Zeitpunkt, zu dem das Gesetz in Kraft tritt, werden pro Jahr 200 Mio t CO2 weniger ausgestoßen. (Das sollte sich indirekt ergeben.)
    - [x] Der fehlende Strom wird im Zweifel mit Gas erzeugt.
      - Wenn keine Alternative dann? (Gas oder doch Ausland?)
      - Abhängig vom Ausbau der erneuerbaren Energien wird durch Gas ersetzt oder durch mehr Strom aus dem Ausland kompensiert.
    - [x] Aufgrund der erteilten Lizenzen muss den Kraftwerksbetreibern eine Entschädigung von 4.3 Mrd € über 18 Jahre verteilt gezahlt werden.
    - [x] Kohlesubvention vn 2.5 Mrd € wird abgeschafft. (TODO #78: Quellen?)
    - [x] Über die nächsten 10 Jahre werden 50000 Arbeitsplätze abgebaut.
      - 20000 Arbeitsplätze in der Kohleindustrie
      - Die Hälfte von 60.000 indirekt betroffenen Arbeitsplätzen (TODO #78: (Quellen?)
    - [x] Beliebtheit unverändert
      - Aufteilen in Gruppen? Kaum Mehrkosten für Endverbraucher, Berücksichtigung der öffentlichen Diskussion, Freude bei Klimaaktivisten
    - [x] Versteckte Faktoren: Arbeitsplätze, Verärgerung der alten Industrie

    # Vorbedingungen

    - Kohle liefert mehr als 10% des Stroms.
    - Arbeitslosigkeit < 10 000 000.

    # Priorität

    - Arbeitslosigkeit 10 000 000 => 0%. (Aktuell 2 695 999 => 73%)
    - Arbeitslosigkeit 0 => 100%
    - linear dazwischen
  `,
})
