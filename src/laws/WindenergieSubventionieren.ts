import { defineLaw } from "../Factory"
import { MrdEuro, TWh, WritableBaseParams } from "../types"
import { linear } from "../lawTools"

export default defineLaw({
  title: "Windenergie subventionieren",
  description: "Garantierte Einspeisevergütung für neue und erneuterte Windanlagen",

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    return {
      electricityWind: 20 as TWh,
      stateDebt: 1 as MrdEuro,
    }
  },

  priority(game) {
    const electricityNonRenewable =
      game.values.electricityDemand -
      game.values.electricityWind -
      game.values.electricitySolar -
      game.values.electricityWater -
      game.values.electricityBiomass
    const percentage = (electricityNonRenewable / game.values.electricityDemand) * 100
    return linear(0, 100, percentage)
  },
})
