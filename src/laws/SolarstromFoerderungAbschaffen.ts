import { defineLaw } from "../Factory"
import { markdown } from "../lib/utils"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Solarstrom Förderung einstellen",
  description: "Mittlere bis große Solaranlagen sollten sich selbst tragen. Die Förderung wird abgeschafft.",
  labels: ["SolarFoerderung"],
  removeLawsWithLabels: ["SolarFoerderung"],
  treatAfterLabels: [],

  effects(): Change[] {
    return [modify("electricitySolar").byValue(2)]
  },

  priority(game) {
    return Math.random()
  },

  details: markdown`

  `,
})
