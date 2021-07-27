import { defineLaw } from "../Factory"
import { changeMioPsgrKmBy, linear } from "../lawTools"
import { welt2018BundKassiertMineraloelsteuer } from "../sources"
import { MrdEuro, Percent } from "../types"
import { Change, modify } from "../params"
import { markdown } from "../lib/utils"

export default defineLaw({
  title: "Abschaffung der Mineralölsteuer",
  description: "Die Steuer auf sämtliche erdölbasierten Treibstoffe wird abgeschafft.",

  effects(data, startYear, currentYear): Change[] {
    const localChange = changeMioPsgrKmBy(data.publicLocalUsage, -0.2 * data.publicLocalUsage)
    const longChange = changeMioPsgrKmBy(data.publicNationalUsage, -0.2 * data.publicNationalUsage)

    return [
      modify("stateDebt").byValue(41 as MrdEuro),
      modify("popularity").byPercent(5).if(startYear === currentYear),
      modify("popularity").byPercent(-3).if(startYear < currentYear),
      modify("carUsage").byValue(-localChange - longChange).if(startYear === currentYear),
      modify("publicLocalUsage").byValue(localChange).if(startYear === currentYear),
      modify("publicNationalUsage").byValue(longChange).if(startYear === currentYear),
    ]
  },

  priority(game) {
    const v = game.values
    const carNonRenewableUsage = v.carUsage * (1 - v.carRenewablePercentage / 100)
    const relCarPercentage: Percent = (carNonRenewableUsage / v.passengerTransportUsage) * 100
    return linear(60, 100, relCarPercentage)
  },
  sources: [welt2018BundKassiertMineraloelsteuer],
  details: /*html*/ ``,
  internals: markdown`
    # Folgen

    Staatsschulden steigen um 41 Mrd € pro Jahr [welt2018BundKassiertMineraloelsteuer]
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
