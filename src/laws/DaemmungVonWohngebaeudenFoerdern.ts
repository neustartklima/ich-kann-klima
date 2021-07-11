import { defineLaw } from "../Factory"
import { MrdEuro } from "../types"
import { createChange, linear, modify } from "../lawTools"

export default defineLaw({
  title: "Dämmung von Wohngebäuden fördern",
  description: "Die nachträgliche Dämmung von Wohngebäuden wird mit günstigen Krediten gefördert.",

  effects(data, startYear, currentYear) {
    const applyChange = createChange(data)
    const costsPerYear: MrdEuro = 1
    const yearsActive = currentYear - startYear
    return applyChange([
      modify("stateDebt", costsPerYear),
      modify("buildingsSourceBio", -2).onlyIf(yearsActive >= 2),
      modify("buildingsSourceOil", -2).onlyIf(yearsActive >= 2),
      modify("buildingsSourceTele", -2).onlyIf(yearsActive >= 2),
      modify("buildingsPrivateDemand", -2).onlyIf(yearsActive >= 2),
    ])
  },

  priority(game) {
    const buildingsPercentage = (game.values.co2emissionsBuildings / game.values.co2emissions) * 100
    return linear(15, 25, buildingsPercentage)
  },
})
