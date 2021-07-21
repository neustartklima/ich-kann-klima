import { defineLaw } from "../Factory"
import { MrdEuro } from "../types"
import { createChange, linear, modify } from "../lawTools"
import { WritableBaseParams } from "../params"

export default defineLaw({
  title: "Dämmung von Wohngebäuden sehr stark fördern",
  description:
    "Die nachträgliche Dämmung von Wohngebäuden wird mit 50% der Kosten bezuschusst. Gleichzeitig werden Ausbildungsplätze im Handwerk geschaffen durch einen Zuschuss von 500€ pro Monat, damit der zu erwartende Bauboom bewältigt werden kann.",

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    const applyChange = createChange(data)
    const costsPerYear: MrdEuro = 3
    const yearsActive = currentYear - startYear
    return applyChange([
      modify("stateDebt", costsPerYear),
      modify("buildingsSourceBio", -4).onlyIf(yearsActive >= 2),
      modify("buildingsSourceOil", -4).onlyIf(yearsActive >= 2),
      modify("buildingsSourceTele", -4).onlyIf(yearsActive >= 2),
      modify("buildingsPrivateDemand", -4).onlyIf(yearsActive >= 2),
      modify("popularity", 10).onlyIf(yearsActive === 1),
      modify("popularity", 15).onlyIf(yearsActive >= 2),
    ])
  },

  priority(game) {
    const buildingsPercentage = (game.values.co2emissionsBuildings / game.values.co2emissions) * 100
    return linear(15, 25, buildingsPercentage)
  },
})
