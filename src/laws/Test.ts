import { defineLaw } from "./LawsTypes"
import { linear } from "./lawTools"
import { MrdEuro, Percent } from "../types"
import { Change, modify, transfer } from "../params"
import { markdown } from "../lib/utils"

export default defineLaw({
  title: "Test",
  description: "Unsinniges Gesetz zum Testen.",

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
