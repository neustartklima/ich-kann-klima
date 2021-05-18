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
})
