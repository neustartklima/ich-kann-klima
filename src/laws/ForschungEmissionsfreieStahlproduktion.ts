import { defineLaw } from "../Factory"
import { lawIsAccepted, linear, renewablePercentage } from "../lawTools"
import { Percent } from "../types"
import { Change, modify } from "../params"
import { markdown } from "../lib/utils"

export default defineLaw({
  title: "Forschung zur emissionsfreien Stahlproduktion fördern",
  description:
    "Forschung und Entwicklung von Technologien zur Produktion von Stahl mit stark reduzierten CO2-Emissionen wird stark gefördert. 10 Mrd € über 5 Jahre.",

  effects(game, startYear, currentYear): Change[] {
    const inGrantPeriod = currentYear < startYear + 5
    const effective = currentYear >= startYear + 3
    // TODO: #139 Use a better measure for reduction of emissions by hydrogen availability.
    const hydrogenReduction = lawIsAccepted(game, "WasserstofftechnologieFoerdern", 3)
      ? renewablePercentage(game) - 70
      : 0
    const economicPressure = lawIsAccepted(game, "WirksamerCO2Preis")
    return [
      modify("stateDebt").byValue(2).if(inGrantPeriod),
      modify("co2emissionsIndustry").byValue(-2).if(effective),
      modify("co2emissionsIndustry").byValue(-2).if(economicPressure),
      modify("co2emissionsIndustry")
        .byValue(-hydrogenReduction)
        .if(hydrogenReduction > 0),
    ]
  },

  priority(game) {
    const v = game.values
    const industryPercentage: Percent = (v.co2emissionsIndustry / v.co2emissions) * 100
    return linear(0, 80, industryPercentage)
  },
  citations: [],
  details: markdown`

  `,
  internals: markdown`
    # Happy Path 12

    # Folgen

    Diese Folgen sind völlig aus der Luft gegriffen.
    TODO #78: Tatsächliche Folgen recherchieren, korrigieren und belegen werden.

    Derzeit identisch zu \`ForschungEmissionsfreieZementproduktion\`, weil Emissionen Beider in
    \`co2emissionsIndustry\` zusammengefasst sind.

    - [x] Konsten: 2 Mrd Euro pro Jahr für die ersten 5 Jahre
    - [x] Nach 3 Jahren zahlt es sich aus und die Industrieemissionen werden um 2 MioTons pro Jahr reduziert.
    - [x] Ein wirksamer CO2-Preis erzeugt ökonomischen Druck, der eine Reduktion um weitere 2 MioTons bewirkt.
    - [x] Falls "WasserstofftechnologieFoerdern" vor 3 oder mehr Jahren beschlossen wurde und
          mehr als 70% der Stromproduktion erneuerbar sind, kann genügend Wasserstoff erzeugt werden und
          pro weiteres Prozent werden die Industrieemmissionen um 1 MioTons pro Jahr reduziert.

    # Voraussetzungen

    - Priorität > 0

    # Priorität

    Je höher der Anteil der Industrieemmissionen ist, desto höher die Priorität: (24% zu Beginn.)

    - 0% bei einem Anteil von von 0%.
    - 100% bei einem Anteil von 80%.
    - linear interpoliert
  `,
})
