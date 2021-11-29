import { defineLaw } from "./LawsTypes"
import { MrdEuro } from "../types"
import { linear } from "./lawTools"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Dämmung von Wohngebäuden fördern",
  description: "Die nachträgliche Dämmung von Wohngebäuden wird mit vergünstigten Krediten gefördert.",

  effects(game, startYear, currentYear): Change[] {
    const costsPerYear: MrdEuro = 0.5
    const inEffect = currentYear - startYear > 2
    return [
      modify("stateDebt").byValue(costsPerYear),
      modify("buildingsSourceBio").byPercent(-1).if(inEffect),
      modify("buildingsSourceOil").byPercent(-1).if(inEffect),
      modify("buildingsSourceTele").byPercent(-1).if(inEffect),
      modify("buildingsPrivateDemand").byPercent(-1).if(inEffect),
    ]
  },

  priority(game) {
    const buildingsPercentage = (game.values.co2emissionsBuildings / game.values.co2emissions) * 100
    return linear(15, 40, buildingsPercentage)
  },
})
