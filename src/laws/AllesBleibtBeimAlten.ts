import { defineLaw } from "../Factory"
import { WritableBaseParams } from "../params"

export default defineLaw({
  title: "Alles bleibt wie es ist",
  description: "Die vorhandenen Gesetze haben sich lange bewährt. Wir lassen sie so, wie sind sind.",

  effects(): Partial<WritableBaseParams> {
    return {}
  },

  priority(game) {
    return Math.random()
  },
})
