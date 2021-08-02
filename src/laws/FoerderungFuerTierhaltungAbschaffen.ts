import { defineLaw } from "../Factory"
import { linear } from "../lawTools"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Förderung für Tierhaltung abschaffen",
  description: "Subventionen für Tierhaltung werden ersatzlos gestrichen",

  effects(data, startYear, currentYear): Change[] {
    return [
      modify("stateDebt").byValue(-10),
      modify("co2emissionsAgriculture")
        .byValue(-10)
        .if(startYear === currentYear),
      modify("popularity")
        .byValue(-20)
        .if(startYear === currentYear),
    ]
  },

  priority(game) {
    return linear(10000, 0, game.values.unemployment)
  },
})
