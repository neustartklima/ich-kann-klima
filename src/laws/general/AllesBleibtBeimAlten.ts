import { random } from "../../lib/random"
import { defineLaw, monthsEffort } from "../LawsTypes"

export default defineLaw({
  title: "Alles bleibt wie es ist",
  description: "Die vorhandenen Gesetze haben sich lange bewährt. Wir lassen sie so, wie sie sind.",

  effort(game) {
    return monthsEffort(3, "Wie aussitzen: {months}.")
  },

  effects() {
    return []
  },

  priority(game) {
    return random()
  },
})
