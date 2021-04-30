import { ActionTree } from "vuex"
import { LawId, GameId, Game } from "../types"
import { createCommand, Command } from "."
import { gameUpdated } from "./mutations"
import { State } from "./state"
import { v4 as uuid } from "uuid"
import router from "../router"
import RepositoryFactory from "../repository"

const repository = RepositoryFactory()

const defaultValues = {
  co2Emmissions: 805, // in 2019, source https://www.bundesregierung.de/breg-de/aktuelles/bilanz-umweltbundesamt-1730880
  stateDebt: 1899, // in 2019, source https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands
  unemployment: 2695, // in 2020, source https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre
  gdp: 3332, // in 2020, source http://www.statistikportal.de/de/bruttoinlandsprodukt-vgr
  electrictyDemandTotal: 2300, // TODO source?
}

function persistGame(game: Game) {
  repository.saveGame(game)
  return gameUpdated(game)
}

export const actions: ActionTree<State, State> = {
  startGame() {
    const game: Game = {
      id: uuid(),
      currentYear: 2021,
      values: { ...defaultValues },
      acceptedLaws: [],
    }
    repository.saveGame(game)
    router.push("/games/" + game.id)
  },

  loadGame(context, payload: { gameId: GameId }) {
    context.commit(persistGame(repository.loadGame(payload.gameId)))
  },

  acceptLaw(context, payload: { lawId: LawId }) {
    const game = context.state.game as Game
    const newLawRef = { lawId: payload.lawId, effectiveSince: game.currentYear + 1 }
    context.commit(persistGame({ ...game, acceptedLaws: [...game.acceptedLaws, newLawRef] }))
  },

  advanceYear(context) {
    const game = context.state.game as Game
    context.commit(persistGame({ ...game, currentYear: game.currentYear + 1 }))
  },
}

export const startGame = (): Command => createCommand("startGame", {})
export const loadGame = (gameId: GameId): Command => createCommand("loadGame", { gameId })
export const acceptLaw = (lawId: LawId): Command => createCommand("acceptLaw", { lawId })
export const advanceYear = (): Command => createCommand("advanceYear", {})
