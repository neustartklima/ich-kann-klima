import { defineLaw } from "../Factory"

export default defineLaw({
  title: "Alles bleibt wie es ist",
  description: "Die vorhandenen Gesetze haben sich lange bewährt. Wir lassen sie so, wie sie sind.",

  effects() {
    return []
  },

  priority(game) {
    return Math.random()
  },
})
