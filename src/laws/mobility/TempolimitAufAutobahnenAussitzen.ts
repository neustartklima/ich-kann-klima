import { Change, modify } from "../../params"
import { Percent } from "../../types"
import { defineLaw, monthsEffort } from "../LawsTypes"
import { lawIsAccepted, linear } from "../lawTools"

export default defineLaw({
  title: "Generelles Tempolimit nicht umsetzen",
  description:
    "Die EU hat das generelle Tempolkmit zwar beschlossen, wir setzen es aber nicht um. Das könnte zwar Strafen oder gar Zwangsmaßnahmen bewirken, aber das Risiko der gefährdeten Wiederwahl ist zu groß.",
  labels: ["TempolimitAutobahn"],
  removeLawsWithLabels: ["TempolimitAutobahn"],

  effort(game) {
    return monthsEffort(3, "Wie aussitzen: {months}.")
  },

  effects(): Change[] {
    return [
      modify("stateDebt").byValue(-10), // Strafen der EU
      modify("popularity").byValue(-2), // Befürworter des generellen Tempolimits
    ]
  },

  priority(game) {
    if (
      lawIsAccepted(game, "Tempolimit100AufAutobahnen") ||
      lawIsAccepted(game, "Tempolimit120AufAutobahnen") ||
      lawIsAccepted(game, "Tempolimit130AufAutobahnen")
    )
      return 0
    const v = game.values
    const relCarPercentage: Percent = (v.carUsage / v.passengerTransportUsage) * 100
    return linear(10, 100, relCarPercentage)
  },
})
