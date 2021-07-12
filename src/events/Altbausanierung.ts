import { defineEvent, lawList } from "../Factory"
import DaemmungAltbauAbschaffen from "../laws/DaemmungAltbauAbschaffen"
import AllesBleibtBeimAlten from "../laws/AllesBleibtBeimAlten"
import DaemmungAltbau1Percent from "../laws/DaemmungAltbau1Percent"
import DaemmungAltbau2Percent from "../laws/DaemmungAltbau2Percent"
import DaemmungAltbau4Percent from "../laws/DaemmungAltbau4Percent"
import { Game } from "../types"
import { linear } from "../lawTools"

export default defineEvent({
  title: "Gesetzesinitiative zur Sanierung von Altbauten",
  description:
    "Zur Einhaltung der Pariser Klimaschutzvereinbarung halten Experten es für unausweichlich, dass in die Sanierung von Altbauten investiert werden muss. Die konkrete Ausgestaltung wird kontrovers diskutiert.",
  laws: lawList({
    DaemmungAltbauAbschaffen,
    AllesBleibtBeimAlten,
    DaemmungAltbau1Percent,
    DaemmungAltbau2Percent,
    DaemmungAltbau4Percent,
  }),

  apply() {},

  probability(store) {
    const game = store.state.game as Game
    const buildingsPercentage = (game.values.co2emissionsBuildings / game.values.co2emissions) * 100
    return linear(15, 25, buildingsPercentage)
  },
})
