import { ActionTree } from "vuex"
import { LawId, GameId, Game, LawReference, AcceptedLaw, Event, BaseParams, Law } from "../types"
import { createCommand, Command } from "."
import { gameUpdated, showEvent } from "./mutations"
import { State } from "./state"
import router from "../router"
import RepositoryFactory, { createGame } from "../repository"
import * as Calculator from "../Calculator"
import { allLaws } from "../laws"
import { fillUpLawProposals, getAcceptedLaw, replaceLawProposal } from "../LawProposer"

const repository = RepositoryFactory()

function persistGame(game: Game) {
  repository.saveGame(game)
  return gameUpdated(game)
}

export const actions: ActionTree<State, State> = {
  startGame() {
    const game = createGame()
    game.acceptedLaws = allLaws
      .filter((law) => law.labels?.includes("initial"))
      .map<LawReference>((law) => {
        return {
          lawId: law.id,
          effectiveSince: game.currentYear,
        }
      })
    fillUpLawProposals(game, allLaws)
    repository.saveGame(game)
    router.push("/games/" + game.id)
  },

  loadGame(context, payload: { gameId: GameId }) {
    context.commit(persistGame(repository.loadGame(payload.gameId)))
  },

  acceptLaw(context, payload: { lawId: LawId }) {
    const game = { ...(context.state.game as Game) }
    const newLawRef = { lawId: payload.lawId, effectiveSince: game.currentYear + 1 }
    game.acceptedLaws = [...game.acceptedLaws, newLawRef]
    replaceLawProposal(game, payload.lawId)
    context.commit(persistGame(game))
  },

  rejectLaw(context, payload: { lawId: LawId }) {
    const game = { ...(context.state.game as Game) }
    game.rejectedLaws = [...game.rejectedLaws, payload.lawId]
    replaceLawProposal(game, payload.lawId)
    context.commit(persistGame(game))
  },

  advanceYear(context) {
    const game = { ...(context.state.game as Game) }
    const laws = game.acceptedLaws.map(getAcceptedLaw)
    game.currentYear++
    game.values = Calculator.calculateNextYear(game.values, laws, game.currentYear)
    context.commit(persistGame(game))
  },

  applyEvent(context, payload: { event: Event }) {
    const game = { ...(context.state.game as Game) }
    payload.event.apply(game)
    context.commit(showEvent(payload.event))
    context.commit(persistGame(game))
  },

  eventAcknowledged(context) {
    context.commit(showEvent(null))
  },
}

export const startGame = (): Command => createCommand("startGame", {})
export const loadGame = (gameId: GameId): Command => createCommand("loadGame", { gameId })
export const acceptLaw = (lawId: LawId): Command => createCommand("acceptLaw", { lawId })
export const rejectLaw = (lawId: LawId): Command => createCommand("rejectLaw", { lawId })
export const advanceYear = (): Command => createCommand("advanceYear", {})
export const applyEvent = (event: Event): Command => createCommand("applyEvent", { event })
export const eventAcknowledged = (): Command => createCommand("eventAcknowledged", {})
