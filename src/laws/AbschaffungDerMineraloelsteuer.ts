import { defineLaw } from "../Factory"
import { changeMioPsgrKmBy, changePercentBy, linear } from "../lawTools"
import { welt2018BundKassiertMineraloelsteuer } from "../sources"
import { MrdEuro, Percent } from "../types"
import { WritableBaseParams } from "../params"
import { markdown } from "../lib/utils"

export default defineLaw({
  title: "Abschaffung der Mineralölsteuer",
  description: "Die Steuer auf sämtliche erdölbasierten Treibstoffe wird abgeschafft.",

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    const yearly = {
      stateDebt: 41 as MrdEuro,
      popularity: changePercentBy(data.popularity, startYear === currentYear ? 5 : -3),
    }
    const localChange = changeMioPsgrKmBy(data.publicLocalUsage, -0.2 * data.publicLocalUsage)
    const longChange = changeMioPsgrKmBy(data.publicNationalUsage, -0.2 * data.publicNationalUsage)

    if (currentYear === startYear) {
      return {
        ...yearly,
        carUsage: -localChange - longChange,
        publicLocalUsage: localChange,
        publicNationalUsage: longChange,
      }
    }
    return yearly
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
