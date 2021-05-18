import { createLaw } from "../Factory"

export default createLaw(import.meta.url, {
  title: "Energiemix regelt der Markt",
  description: "Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",

  effects(data, startYear, currentYear) {
    return {
      co2emmissions: -100,
      stateDebt: -1000,
    }
  },
})
