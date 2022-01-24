import { cite, duh2020Dienstwagenprivileg, welt2016SteuervorteileKosten18Mrd } from "../../citations"
import { markdown } from "../../lib/utils"
import { Change, modify, transfer } from "../../params"
import { MrdEuro, Percent } from "../../types"
import { defineLaw, monthsEffort } from "../LawsTypes"
import { linear } from "../lawTools"

export default defineLaw({
  title: "Dienstwagen Privileg abgeschaffen",
  description: "Steuererleichterungen für Dienstwagen werden abgeschafft.",

  effort(game) {
    return monthsEffort(6)
  },

  effects(game, startYear, currentYear): Change[] {
    return [
      modify("stateDebt").byValue(-18 as MrdEuro),
      modify("popularity")
        .byValue(-1)
        .if(startYear === currentYear),
      transfer("carUsage", "publicLocalUsage").byPercent(-0.05),
    ]
  },

  priority(game) {
    const v = game.values
    const carNonRenewableUsage = v.carUsage * (1 - v.carRenewablePercentage / 100)
    const relCarPercentage: Percent = (carNonRenewableUsage / v.passengerTransportUsage) * 100
    return linear(50, 100, relCarPercentage)
  },
  citations: [welt2016SteuervorteileKosten18Mrd, duh2020Dienstwagenprivileg],
  details: markdown`

  `,
  internals: markdown`
    # Happy Path 20

    Zunächst sollte Nah- und Fernverkehr attraktiver gemacht werden.
    TODO: Folgen sollten davon abhängen, ob es attraktive Alternativen gibt.

    # Folgen

    - Steuermehreinnahmen: 18 mrd€ / Jahr (${cite(welt2016SteuervorteileKosten18Mrd)})
    - -0.05% Fahleistung pro Jahr (Anreiz für Auto fällt weg Gebrauchte Wagen werden teuerer).
        - ${cite(duh2020Dienstwagenprivileg)} sagt es gibt keine echte Schätzung dafür.
    - Entsprechend mehr Nahverkehrnutzung
    - Zufriedenheit sinkt einmalig um 1%

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 50%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `,
})
