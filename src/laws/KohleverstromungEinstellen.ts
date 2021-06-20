import { defineLaw } from "../Factory"
import { WritableBaseParams, MrdEuro, TsdPeople } from "../types"

export default defineLaw({
  title: "Kohleverstromung einstellen",
  description: "Die Verbrennung von Kohle zur Erzeugung von Strom wird verboten.",

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    const yearsActive = currentYear - startYear

    const compensation: MrdEuro = yearsActive < 18 ? 4.3 / 18 : 0
    const subventions: MrdEuro = 2.5

    const directJobsInvolved: TsdPeople = 20
    const indirectJobsInvolved: TsdPeople = 60
    const settlingFactor = (10 - yearsActive) / 55 // 10 + 9 + ... + 1 = 55
    const jobs = Math.max((directJobsInvolved + indirectJobsInvolved / 2) * settlingFactor, 0)

    return {
      electricityHardCoal: -data.electricityHardCoal,
      electricityBrownCoal: -data.electricityBrownCoal,
      stateDebt: -compensation + subventions,
      unemployment: jobs,
    }
  },

  priority(game) {
    if (game.values.electricityCoal / game.values.electricityDemand <= 0.1) {
      return 0
    }
    return 10000 - game.values.unemployment / 100 // Not allowed if unemployment over 10 000 000
  },
})
