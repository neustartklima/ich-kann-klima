import { defineLaw } from "../Factory"
import { MrdEuro } from "../types"
import { createChange, getActiveLaw, lawIsAccepted, linear, modify } from "../lawTools"

export default defineLaw({
  title: "Dämmung von Wohngebäuden abschaffen",
  description: "Wir geben den Bürgern die Freiheit zurück, selbst zu entscheiden, ob sie ihr Haus dämmen wollen und lassen die Förderung auslaufen",

  effects(data, startYear, currentYear) {
    const applyChange = createChange(data)
    return applyChange([
      modify("stateDebt", -0.5 as MrdEuro),
      modify("buildingsSourceBio", -0.5),
      modify("buildingsSourceOil", -0.5),
      modify("buildingsSourceTele", -0.5),
      modify("buildingsPrivateDemand", -0.5),
    ])
  },

  priority(game) {
    const currentActiveLawId = getActiveLaw(game.acceptedLaws, /^DaemmungAltbau/)
    if (!currentActiveLawId || currentActiveLawId === "DaemmmungAltbauAbschaffen") return 0
    const buildingsPercentage = (game.values.co2emissionsBuildings / game.values.co2emissions) * 100
    return linear(15, 25, buildingsPercentage)
  },
})
