import { createLaw } from "../Factory"

export default createLaw({
  title: "Kernenergienutzung verlängern",
  description: "Eigentlich bereits abgeschaltete Kernkraftwerke wieder in Betrieb nehmen und neue bauen.",

  effects(data, startYear, currentYear) {
    return {
      co2emmissions: -100,
      stateDebt: 1000,
    }
  },
})
