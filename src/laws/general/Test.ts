import { markdown } from "../../lib/utils"
import { Change, modify } from "../../params"
import { defineLaw, monthsEffort } from "../LawsTypes"

export default defineLaw({
  title: "Test",
  description: "Unsinniges Gesetz zum Testen.",

  effort(game) {
    return monthsEffort(6)
  },

  effects(game, startYear, currentYear): Change[] {
    return [
      modify("popularity")
        .byPercent(50)
        .if((currentYear - startYear) % 3 != 0),
      modify("popularity")
        .byPercent(-50)
        .if((currentYear - startYear) % 3 === 0),
      modify("stateDebt")
        .byPercent(-200)
        .if(currentYear === startYear),
      modify("stateDebt")
        .byPercent(50)
        .if((currentYear - startYear) % 3 != 0),
      modify("stateDebt")
        .byPercent(-50)
        .if((currentYear - startYear) % 3 === 0),
      modify("stateDebt")
        .byPercent(-200)
        .if(currentYear === startYear + 10),
    ]
  },

  priority(game) {
    return 0
  },
  citations: [],
  details: markdown`

  `,
  internals: markdown`

  `,
})
