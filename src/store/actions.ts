import { Context, store } from "."
import { GameId, Game } from "../game"
import API from "../model/api"
import RepositoryFactory from "../model/Repository"
import * as Calculator from "../Calculator"
import { fillUpLawProposals, getAcceptedLaw, getLaw } from "../LawProposer"
import { singleton as getEventMachine } from "../EventMachine"
import { allEvents, Event } from "../events"
import router from "../router"
import FetchQueueFactory from "../model/FetchQueue"
import RequestFactory from "../model/Request"
import { LawId } from "../laws"
import { BaseParams, Change, applyEffects } from "../params"
import { steps } from "../tourSteps"

const backendURL = import.meta.env.PROD ? "https://api.ich-kann-klima.de/api" : "/api"
const request = RequestFactory(backendURL, fetch)
const fetchQueue = FetchQueueFactory(request)
const api = API(fetchQueue)
const repository = RepositoryFactory({ api })

export const actions = {
  async startGame(context: Context) {
    const game = await repository.createGame()
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
    const game = { ...(context.state.game as Game) }
    game.events.unshift(payload.event)
    await repository.eventOccurred(game, payload.event)
    if (payload.event.laws?.length) {
      game.proposedLaws = payload.event.laws.map((law) => law.id)
    }
    context.commit("setGameState", { game })
    payload.event.apply(context)
  },

  acknowledgeEvent(context: Context, event: Event) {
    const game = { ...(context.state.game as Game) }
    game.events.find((e) => e.id === event.id)!.acknowledged = true
    context.commit("setGameState", { game })
  },

  applyEffects(context: Context, changes: Change[]) {
    const values = applyEffects({ ...(context.state.game?.values as BaseParams) }, changes)
    const game = { ...context.state.game, values } as Game
    context.commit("setGameState", { game })
  },

  setupTour(context: Context) {
    const tourState = localStorage.getItem("tour") || steps[0].id
    const step = steps.find((step) => tourState === step.id)
    if (step) {
      context.commit("setTour", { step: step.id, active: true })
    } else {
      actions.stopTour(context)
    }
  },

  nextTourStep(context: Context) {
    const index = steps.findIndex((step) => context.state.tour.step === step.id)
    if (index < 0 || index == steps.length - 1) {
      actions.stopTour(context)
    } else {
      const step = steps[index + 1]
      context.commit("setTour", { step: step.id, active: true })
      localStorage.setItem("tour", step.id)
    }
  },

  stopTour(context: Context) {
    context.commit("setTour", { step: "", active: false })
    localStorage.setItem("tour", "completed")
    getEventMachine(store, allEvents).start()
  },

  async error(context: Context, payload: { error: Error }) {
    context.commit("error", payload)
  },
}
