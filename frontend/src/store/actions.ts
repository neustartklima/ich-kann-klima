import { ActionTree } from "vuex"
import { LawId, GameId, Game } from "../types"
import { createCommand, Command } from "."
import { gameLoaded, lawAccepted } from "./mutations"
import { State } from "./state"
import { v4 as uuid } from "uuid"

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
    context.commit(gameLoaded(game))
  },

  loadGame(context, payload: { gameId: GameId }) {
    const game: Game = {
      id: payload.gameId,
      values: { ...defaultValues },
    }
    context.commit(gameLoaded(game))
  },
  acceptLaw(context, payload: { lawId: LawId }) {
    context.commit(lawAccepted(payload.lawId))
  },
}

export const startGame = (): Command => createCommand("startGame", {})
export const loadGame = (gameId: GameId): Command => createCommand("loadGame", { gameId })
export const acceptLaw = (lawId: LawId): Command => createCommand("acceptLaw", { lawId })
