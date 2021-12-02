import { defineLaw } from "./LawsTypes"
import { MrdEuro } from "../types"
import { getActiveLaw, linear } from "./lawTools"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Dämmung von Wohngebäuden abschaffen",
  description:
    "Wir geben den Bürgern die Freiheit zurück, selbst zu entscheiden, ob sie ihr Haus dämmen wollen und lassen die Förderung auslaufen",

  effects(): Change[] {
    return [
      modify("stateDebt").byValue(-0.5 as MrdEuro),
      modify("buildingsSourceBio").byPercent(-0.5),
      modify("buildingsSourceOil").byPercent(-0.5),
      modify("buildingsSourceTele").byPercent(-0.5),
      modify("buildingsPrivateDemand").byPercent(-0.5),
    ]
  },

  priority(game) {
    const currentActiveLawId = getActiveLaw(game.acceptedLaws, /^DaemmungAltbau/)
    if (!currentActiveLawId || currentActiveLawId === "DaemmungAltbauAbschaffen") return 0
    const buildingsPercentage = (game.values.co2emissionsBuildings / game.values.co2emissions) * 100
    return linear(15, 40, buildingsPercentage)
  },
})
