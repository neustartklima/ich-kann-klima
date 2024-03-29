import { markdown } from "../../lib/utils"
import { Change, modify } from "../../params"
import { MrdEuro } from "../../types"
import { defineLaw, monthsEffort } from "../LawsTypes"
import { linear } from "../lawTools"

export default defineLaw({
  title: "Dämmung von Wohngebäuden sehr stark fördern",
  description:
    "Die nachträgliche Dämmung von Wohngebäuden wird mit 50% der Kosten bezuschusst. Gleichzeitig werden Ausbildungsplätze im Handwerk geschaffen durch einen Zuschuss von 500€ pro Monat, damit der zu erwartende Bauboom bewältigt werden kann.",

  effort(game) {
    return monthsEffort(7)
  },

  effects(game, startYear, currentYear): Change[] {
    const costsPerYear: MrdEuro = 3
    const yearsActive = currentYear - startYear
    const inEffect = yearsActive >= 2
    return [
      modify("stateDebt").byValue(costsPerYear),
      modify("buildingsSourceBio").byPercent(-4).if(inEffect),
      modify("buildingsSourceOil").byPercent(-4).if(inEffect),
      modify("buildingsSourceTele").byPercent(-4).if(inEffect),
      modify("buildingsPrivateDemand").byPercent(-4).if(inEffect),
      modify("popularity")
        .byValue(10)
        .if(yearsActive === 1),
      modify("popularity").byValue(5).if(inEffect),
    ]
  },

  priority(game) {
    const buildingsPercentage = (game.values.co2emissionsBuildings / game.values.co2emissions) * 100
    return linear(15, 40, buildingsPercentage)
  },
  citations: [],
  details: markdown`

  `,
  internals: markdown`
    # Happy Path 6

    # Folgen

    # Vorbedingungen

    # Priorität
  `,
})
