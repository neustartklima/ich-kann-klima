import { Law } from "../types"

export default {
  title: "Kohleverstromung einstellen",
  description: "Die Verstromung von Kohle zur Erzeugung von Strom wird verboten.",

  effects(data, startYear, currentYear) {
    const yearsActive = currentYear - startYear
    
    const compensation = yearsActive < 18 ? 0 : 1000   // Mio €

    const directJobsInvolved = 20 // Tsd people
    const indirectJobsInvolved = 60
    const jobs = Math.max((directJobsInvolved + indirectJobsInvolved / 2) * (10 - yearsActive) / 10, 0)

    return {
      co2emmissions: -200,
      stateDebt: -compensation,
      unemployment: jobs,
    }
  },
} as Law
