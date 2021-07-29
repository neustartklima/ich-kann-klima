import { defineLaw } from "../Factory"
import { linear } from "../lawTools"
import { welt2018BundKassiertMineraloelsteuer } from "../citations"
import { MrdEuro, Percent } from "../types"
import { Change, modify } from "../params"
import { markdown } from "../lib/utils"

export default defineLaw({
  title: "Abschaffung der Mineralölsteuer",
  description: "Die Steuer auf sämtliche erdölbasierten Treibstoffe wird abgeschafft.",

  effects(data, startYear, currentYear): Change[] {
    const localModifier = modify("publicLocalUsage").byPercent(-20).if(startYear === currentYear)
    const longModifier = modify("publicNationalUsage").byPercent(-20).if(startYear === currentYear)
    const localChange = localModifier.getChange(data)
    const longChange = longModifier.getChange(data)

    return [
      modify("stateDebt").byValue(41 as MrdEuro),
      modify("popularity").byValue(5).if(startYear === currentYear),
      modify("popularity").byValue(-3).if(startYear < currentYear),
      modify("carUsage").byValue(-localChange - longChange).if(startYear === currentYear),
      localModifier,
      longModifier,
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

    Staatsschulden steigen um 41 Mrd € pro Jahr [welt2018BundKassiertMineraloelsteuer]
    Im ersten Jahr steigen 20% der Nutzer von öffentlichen Verkehrsmitteln aufs Auto um.
    Popularität steigt im ersten Jahr um 5% und sinkt danach um 3% pro Jahr.
    
    Das ist ein test-Vorschlag für eine Änderung.

    # Vorbedingungen

    - Priorität über 0%.

    # Priorität

    - 0% bei einem Anteil von nichterneuerbaren PKW von 60%.
    - 100% bei einem Anteil von nichterneuerbaren PKW von 100%. (Zu Beginn: 78%)
    - linear interpoliert
    `,
})
