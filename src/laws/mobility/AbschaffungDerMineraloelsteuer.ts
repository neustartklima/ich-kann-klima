import { cite, welt2018BundKassiertMineraloelsteuer } from "../../citations"
import { markdown } from "../../lib/utils"
import { Change, modify, transfer } from "../../params"
import { MrdEuro, Percent } from "../../types"
import { defineLaw, monthsEffort } from "../LawsTypes"
import { linear } from "../lawTools"

export default defineLaw({
  title: "Abschaffung der Mineralölsteuer",
  description: "Die Steuer auf sämtliche erdölbasierten Treibstoffe wird abgeschafft.",

  effort(game) {
    // At start of game yearsTillUp is 9 years.
    const yearsTillUp = Math.ceil(game.values.co2budget / game.values.co2emissions)
    if (yearsTillUp >= 15) {
      return monthsEffort(
        2,
        `Die derzeitigen CO2 Emissionen würden das Budget
        in ${yearsTillUp} Jahren verbrauchen.
        Nicht schlecht! Bei der Stimmung bekommst Dus in {months}n durch.`
      )
    } else {
      return monthsEffort(9, "Nicht beliebt! Sowas dauert {months}.")
    }
  },

  effects(game, startYear, currentYear): Change[] {
    return [
      modify("stateDebt").byValue(41 as MrdEuro),
      modify("popularity")
        .byValue(5)
        .if(startYear === currentYear),
      modify("popularity")
        .byValue(-3)
        .if(startYear < currentYear),
      transfer("publicLocalUsage", "carUsage")
        .byPercent(-20)
        .if(startYear === currentYear),
      transfer("publicNationalUsage", "carUsage")
        .byPercent(-20)
        .if(startYear === currentYear),
    ]
  },

  priority(game) {
    const v = game.values
    const carNonRenewableUsage = v.carUsage * (1 - v.carRenewablePercentage / 100)
    const relCarPercentage: Percent = (carNonRenewableUsage / v.passengerTransportUsage) * 100
    return linear(60, 100, relCarPercentage)
  },
  citations: [welt2018BundKassiertMineraloelsteuer],
  details: /*html*/ ``,
  internals: markdown`
    # Folgen

    Staatsschulden steigen um 41 Mrd € pro Jahr ${cite(welt2018BundKassiertMineraloelsteuer)}
    Im ersten Jahr steigen 20% der Nutzer von öffentlichen Verkehrsmitteln aufs Auto um.
    Popularität steigt im ersten Jahr um 5% und sinkt danach um 3% pro Jahr.

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 60%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
  `,
})
