import { Context } from "."
import { LawId, GameId, Game, LawReference, Event } from "../types"
import router from "../router"
import RepositoryFactory, { createGame } from "../repository"
import * as Calculator from "../Calculator"
import { fillUpLawProposals, getAcceptedLaw, replaceLawProposal } from "../LawProposer"

const repository = RepositoryFactory()

export const actions = {
  startGame(context: Context) {
    const game = createGame()
    game.acceptedLaws = context.state.allLaws
      .filter((law) => law.labels?.includes("initial"))
      .map<LawReference>((law) => {
        return {
          lawId: law.id,
          effectiveSince: game.currentYear,
        }
      })
    fillUpLawProposals(game, context.state.allLaws)
    repository.saveGame(game)
    router.push("/games/" + game.id)
  },

  loadGame(context: Context, payload: { gameId: GameId }) {
    const game = repository.loadGame(payload.gameId)
    repository.saveGame(game)
    context.commit("gameLoaded", { game })
  },

  acceptLaw(context: Context, payload: { lawId: LawId }) {
    const game = { ...(context.state.game as Game) }
    const newLawRef = { lawId: payload.lawId, effectiveSince: game.currentYear + 1 }
    game.acceptedLaws = [...game.acceptedLaws, newLawRef]
    replaceLawProposal(game, payload.lawId)
    repository.saveGame(game)
    context.commit("gameLoaded", { game })
  },

  rejectLaw(context: Context, payload: { lawId: LawId }) {
    const game = { ...(context.state.game as Game) }
    game.rejectedLaws = [...game.rejectedLaws, payload.lawId]
    replaceLawProposal(game, payload.lawId)
    repository.saveGame(game)
    context.commit("gameLoaded", { game })
  },

  advanceYear(context: Context) {
    const game = { ...(context.state.game as Game) }
    const laws = game.acceptedLaws.map(getAcceptedLaw)
    game.currentYear++
    game.values = Calculator.calculateNextYear(game.values, laws, game.currentYear)
    repository.saveGame(game)
    context.commit("gameLoaded", { game })
  },

  applyEvent(context: Context, payload: { event: Event }) {
    const game = { ...(context.state.game as Game) }
    payload.event.apply(context)
    context.commit("showEvent", payload)
    repository.saveGame(game)
    context.commit("gameLoaded", { game })
  },

  eventAcknowledged(context: Context) {
    context.commit("hideEvent", undefined)
  },
}
