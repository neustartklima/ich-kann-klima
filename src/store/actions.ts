import { Context, store } from "."
import { LawId, GameId, Game, Event } from "../types"
import API from "../model/api"
import RepositoryFactory from "../model/Repository"
import * as Calculator from "../Calculator"
import { fillUpLawProposals, getAcceptedLaw, getLaw } from "../LawProposer"
import EventMachine from "../EventMachine"
import { singleton as getEventMachine } from "../EventMachine"
import { allEvents } from "../events"
import router from "../router"
import FetchQueueFactory from "../model/FetchQueue"
import RequestFactory from "../model/Request"

const backendURL = import.meta.env.PROD ? "https://api.ich-kann-klima.de/api" : "/api"
const request = RequestFactory(backendURL, fetch)
const fetchQueue = FetchQueueFactory(request)
const api = API(fetchQueue)
const repository = RepositoryFactory({ api })

export const actions = {
  async startGame(context: Context) {
    const game = await repository.createGame(context.state.allLaws)
    getEventMachine(store, allEvents).start()
    router.push("/games/" + game.id)
  },

  async loadGame(context: Context, payload: { gameId: GameId }) {
    try {
      const game = await repository.loadGame(payload.gameId)
      await repository.saveGame(game)
      router.push("/games/" + game.id)
      context.commit("setGameState", { game })
    } catch (error) {
      // Game cannot be found locally, and the API doesn't know about that game or could not be reached, game cannot be started
      context.dispatch("error", { error })
    }
  },

  gameOver(context: Context) {
    context.commit("gameOver", undefined)
    router.push("/games/" + context.state.game?.id + "/over")
  },

  async acceptLaw(context: Context, payload: { lawId: LawId }) {
    const game = { ...(context.state.game as Game) }
    const newLawRef = { lawId: payload.lawId, effectiveSince: game.currentYear + 1 }
    const newLaw = getAcceptedLaw(newLawRef)
    const removeLawsWithLabels = newLaw.removeLawsWithLabels
    const filteredLawRefs = game.acceptedLaws
      .map(getAcceptedLaw)
      .filter(
        (lawToCheck) => !removeLawsWithLabels?.some((labelToRemove) => lawToCheck.labels?.includes(labelToRemove))
      )
      .map((law) => ({ lawId: law.id, effectiveSince: law.effectiveSince }))
    game.acceptedLaws = [...filteredLawRefs, newLawRef]
    fillUpLawProposals(game)
    await repository.saveGame(game)
    context.commit("setGameState", { game })
    await repository.decisionMade(game, newLaw, true)
    getEventMachine(store, allEvents).start()
  },

  async rejectLaw(context: Context, payload: { lawId: LawId }) {
    const game = { ...(context.state.game as Game) }
    game.rejectedLaws = [...game.rejectedLaws, payload.lawId]
    fillUpLawProposals(game)
    await repository.decisionMade(game, getLaw(payload.lawId), false)
    context.commit("setGameState", { game })
    getEventMachine(store, allEvents).start()
  },

  async advanceYear(context: Context) {
    const game = { ...(context.state.game as Game) }
    const laws = game.acceptedLaws.map(getAcceptedLaw)
    game.currentYear++
    game.values = Calculator.calculateNextYear(game.values, laws, game.currentYear)
    fillUpLawProposals(game)
    await repository.saveGame(game)
    context.commit("setGameState", { game })
  },

  async applyEvent(context: Context, payload: { event: Event }) {
    payload.event.apply(context)
    const game = { ...(context.state.game as Game) }
    game.events.unshift(payload.event)
    await repository.eventOccurred(game, payload.event)
    if (payload.event.laws?.length) {
      game.proposedLaws = payload.event.laws.map(law => law.id)
    }
    context.commit("setGameState", { game })
  },

  acknowledgeEvent(context: Context, event: Event) {
    const game = { ...(context.state.game as Game) }
    game.events.find((e) => e.id === event.id)!.acknowledged = true
    context.commit("setGameState", { game })
  },

  async error(context: Context, payload: { error: Error }) {
    context.commit("error", payload)
  },
}
