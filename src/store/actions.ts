import { Context, store } from "."
import { LawId, GameId, Game, LawReference, Event, AcceptedLaw } from "../types"
import router from "../router"
import RepositoryFactory, { createGame } from "../repository"
import * as Calculator from "../Calculator"
import { fillUpLawProposals, getAcceptedLaw, replaceLawProposal } from "../LawProposer"
import EventMachine from "../EventMachine"
import { allEvents } from "../events"

const repository = RepositoryFactory()
let eventMachine: ReturnType<typeof EventMachine>

function getEventMachine() {
  return eventMachine || (eventMachine = EventMachine(store, allEvents))
}

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
    getEventMachine().start()
    router.push("/games/" + game.id)
  },

  loadGame(context: Context, payload: { gameId: GameId }) {
    const game = repository.loadGame(payload.gameId)
    repository.saveGame(game)
    getEventMachine().start()
    context.commit("gameLoaded", { game })
  },

  gameOver(context: Context) {
    
  },

  acceptLaw(context: Context, payload: { lawId: LawId }) {
    const game = { ...(context.state.game as Game) }
    const newLawRef = { lawId: payload.lawId, effectiveSince: game.currentYear + 1 }
    const newLaw = getAcceptedLaw(newLawRef)
    const removeLawsWithLabels = newLaw.removeLawsWithLabels
    const filteredLawRefs = game.acceptedLaws
      .map(getAcceptedLaw)
      .filter(
        (lawToCheck: AcceptedLaw) =>
          !removeLawsWithLabels?.some((labelToRemove) => lawToCheck.labels?.includes(labelToRemove))
      )
      .map((law) => ({ lawId: law.id, effectiveSince: law.effectiveSince }))
    game.acceptedLaws = [...filteredLawRefs, newLawRef]
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
    getEventMachine().start()
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
    getEventMachine().start()
  },
}
