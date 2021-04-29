import { ActionTree } from "vuex"
import { LawId, LawReference, GameId, Game } from "../types"
import { createCommand, Command } from "."
import { gameLoaded, lawAccepted } from "./mutations"
import { State } from "./state"
import { v4 as uuid } from "uuid"
import router from "../router"

const defaultValues = {
  co2Emmissions: 805, // in 2019, source https://www.bundesregierung.de/breg-de/aktuelles/bilanz-umweltbundesamt-1730880
  stateDebt: 1899, // in 2019, source https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands
  unemployment: 2695, // in 2020, source https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre
  gdp: 3332, // in 2020, source http://www.statistikportal.de/de/bruttoinlandsprodukt-vgr
  electrictyDemandTotal: 2300, // TODO source?
}

export const actions: ActionTree<State, State> = {
  startGame(context) {
    const game: Game = {
      id: uuid(),
      values: { ...defaultValues },
    }
    localStorage.setItem("game", JSON.stringify(game))
    localStorage.setItem("acceptedLaws", JSON.stringify([]))
    router.push("/games/" + game.id)
  },

  loadGame(context, payload: { gameId: GameId }) {
    const storedItem = localStorage.getItem("game")
    if (!storedItem) {
      throw Error("Game not found")
    }
    context.commit(gameLoaded(JSON.parse(storedItem) as Game))
    const acceptedLaws = localStorage.getItem("acceptedLaws")
    if (!acceptedLaws) {
      throw Error("Inconsistent storage: no accepted laws in local cache")
    }
    JSON.parse(acceptedLaws).forEach((lawRef: LawReference) => {
      context.commit(lawAccepted(lawRef.lawId))
    })
  },

  acceptLaw(context, payload: { lawId: LawId }) {
    context.commit(lawAccepted(payload.lawId))
    localStorage.setItem("acceptedLaws", JSON.stringify(context.state.acceptedLaws))
  },
}

export const startGame = (): Command => createCommand("startGame", {})
export const loadGame = (gameId: GameId): Command => createCommand("loadGame", { gameId })
export const acceptLaw = (lawId: LawId): Command => createCommand("acceptLaw", { lawId })
