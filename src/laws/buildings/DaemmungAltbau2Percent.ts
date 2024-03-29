import { Change, modify } from "../../params"
import { MrdEuro } from "../../types"
import { defineLaw, monthsEffort } from "../LawsTypes"
import { linear } from "../lawTools"

export default defineLaw({
  title: "Dämmung von Wohngebäuden fördern",
  description:
    "Die nachträgliche Dämmung von Wohngebäuden wird mit einem zinslosen Kredit und einem Zuschuss von 20% der Kosten gefördert.",

  effort(game) {
    return monthsEffort(5)
  },

  effects(game, startYear, currentYear): Change[] {
    const costsPerYear: MrdEuro = 1
    const inEffect = currentYear - startYear > 2
    return [
      modify("stateDebt").byValue(costsPerYear),
      modify("buildingsSourceBio").byPercent(-2).if(inEffect),
      modify("buildingsSourceOil").byPercent(-2).if(inEffect),
      modify("buildingsSourceTele").byPercent(-2).if(inEffect),
      modify("buildingsPrivateDemand").byPercent(-2).if(inEffect),
      modify("popularity").byValue(5).if(inEffect),
    ]
  },

  priority(game) {
    const buildingsPercentage = (game.values.co2emissionsBuildings / game.values.co2emissions) * 100
    return linear(15, 40, buildingsPercentage)
  },
})
