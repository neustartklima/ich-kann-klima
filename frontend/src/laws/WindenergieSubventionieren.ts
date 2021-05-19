import { createLaw } from "../Factory"

export default createLaw(import.meta.url, {
  title: "Windkraft fördern",
  description: "Garantierte Einspeisevergütung für neue und erneuterte Windanlagen",

  effects(data, startYear, currentYear) {
    return {
      co2emmissions: -100,
      stateDebt: -1000,
    }
  },

  priority(game) {
    const electricityNonRenewable =
      game.values.electricityDemand -
      game.values.electricityWind -
      game.values.electricitySolar -
      game.values.electricityWater -
      game.values.electricityBiomass
    const ratio = electricityNonRenewable / game.values.electricityDemand
    return 100 * ratio
  },
})
