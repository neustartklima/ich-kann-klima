import { defineLaw } from "./LawsTypes"
import { lawIsAccepted, linear, renewablePercentage } from "./lawTools"
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
    if (lawIsAccepted(game, "SolarstromFoerderungWieZuBeginn")) {
      return linear(0, 100, renewablePercentage(game))
    }
    return 0
  },

  details: markdown`

  `,
})
