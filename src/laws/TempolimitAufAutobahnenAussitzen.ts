import { defineLaw } from "../Factory"
import { changePercentBy, linear } from "../lawTools"
import { Percent, WritableBaseParams } from "../types"

export default defineLaw({
  title: "Generelles Tempolimit nicht umsetzen",
  description: "Die EU hat das generelle Tempolkmit zwar beschlossen, wir setzen es aber nicht um. Das könnte zwar Strafen oder gar Zwangsmaßnahmen bewirken, aber das Risiko der gefährdeten Wiederwahl ist zu groß.",
  labels: ["TempolimitAutobahn"],
  removeLawsWithLabels: ["TempolimitAutobahn"],

  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    return {
      stateDebt: -10,     // Strafen der EU
      popularity: changePercentBy(data.popularity, -2),   // Befürworter des generellen Tempolimits
    }
  },

  priority(game) {
    const v = game.values
    const relCarPercentage: Percent = (v.carUsage / v.passengerTransportUsage) * 100
    return linear(10, 60, relCarPercentage)
  },
})
