import { defineLaw } from "../Factory"
import { MrdEuro, WritableBaseParams } from "../types"
import { changeEmissionsBy } from "../lawTools"

export default defineLaw({
  title: "Dämmung von Wohngebäuden fördern",
  description: "Die nachträgliche Dämmung von Wohngebäuden wird mit günstigen Krediten gefördert.",
  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    const costsPerYear: MrdEuro = 1
    const yearsActive = currentYear - startYear
    if (yearsActive >= 2) {
      return {
        stateDebt: costsPerYear,
        co2emissionsBuildings: changeEmissionsBy(data.co2emissionsBuildings, -2),
      }
    } else {
      return {
        stateDebt: costsPerYear,
      }
    }
  },
  priority(game) {
    const buildingsFraction = game.values.co2emissionsBuildings / game.values.co2emissions
    return 1000 * (buildingsFraction - 0.15)
  },
})
