import { Context } from "."
import { GameId, Game, prepareNextStep, newGame, acceptLaw, sitOut } from "../game"
import { Repository } from "../model/Repository"
import * as Calculator from "../Calculator"
import { getAcceptedLaw } from "../laws"
import { Event } from "../events"
import { LawId } from "../laws"
import { Change, applyEffects, createBaseValues } from "../params"
import { steps } from "../tourSteps"

interface Router {
  push: (path: string) => void
}

export function ActionFactory(router: Router, repository: Repository) {
  return {
    startGame(context: Context) {
      const game = newGame()
      const event = prepareNextStep(game)
      repository.createGame(game)
      context.commit("setGameState", { game })
      context.dispatch("applyEvent", { event })
      router.push("/games/" + game.id)
    },

    async loadGame(context: Context, payload: { gameId: GameId }) {
      if (context.state.game?.id === payload.gameId) return
      try {
        const game = await repository.loadGame(payload.gameId)
        repository.saveGame(game)
        router.push("/games/" + game.id)
        context.commit("setGameState", { game })
      } catch (error) {
        // Game cannot be found locally, and the API doesn't know about that game or could not be reached, game cannot be started
        context.dispatch("error", { error })
      }
    },

    gameOver(context: Context) {
      context.commit("gameOver", undefined)
    },

    acceptLaw(context: Context, payload: { lawId: LawId }) {
      const game = { ...(context.state.game as Game) }
      const event = acceptLaw(payload.lawId, game)
      repository.saveGame(game)
      context.commit("setGameState", { game })
      context.dispatch("applyEvent", { event })
      repository.decisionMade(game, payload.lawId, true)
    },

    rejectLaw(context: Context, payload: { lawId: LawId }) {
      const game = { ...(context.state.game as Game) }
      game.rejectedLaws = [...game.rejectedLaws, payload.lawId]
      repository.decisionMade(game, payload.lawId, false)
      repository.saveGame(game)
      context.commit("setGameState", { game })
    },

    sitOut(context: Context) {
      const game = { ...(context.state.game as Game) }
      repository.decisionMade(game, "sitOut", true)
      const event = sitOut(game)
      repository.saveGame(game)
      context.commit("setGameState", { game })
      context.dispatch("applyEvent", { event })
    },

    advanceYear(context: Context) {
      const game = { ...(context.state.game as Game) }
      const laws = game.acceptedLaws.map(getAcceptedLaw)
      game.currentYear++
      game.values = Calculator.calculateNextYear(game, laws, game.currentYear)
      repository.saveGame(game)
      context.commit("setGameState", { game })
    },

    applyEvent(context: Context, payload: { event: Event | undefined }) {
      if (!payload.event) return
      const game = { ...(context.state.game as Game) }
      repository.eventOccurred(game, payload.event)
      const changes = payload.event.apply(game)
      context.dispatch("applyEffects", { changes })
    },

    acknowledgeEvent(context: Context, event: Event) {
      const game = { ...(context.state.game as Game) }
      game.events.find((e) => e.id === event.id)!.acknowledged = true
      repository.saveGame(game)
      context.commit("setGameState", { game })
    },

    applyEffects(context: Context, payload: { changes: Change[] }) {
      // First do only the `modify()` changes and commit state change: (see #180)
      const contextForModify = { dispatch: () => undefined, values: createBaseValues(context.state.game!.values) }
      applyEffects(contextForModify, payload.changes)
      const game = { ...context.state.game, values: contextForModify.values } as Game
      repository.saveGame(game)
      context.commit("setGameState", { game })

      // Then do only the `dispatch()` changes, which might do their own state changes:
      const contextForDispatch = { dispatch: context.dispatch }
      applyEffects(contextForDispatch, payload.changes)
    },

    setupTour(context: Context) {
      const tourState = localStorage.getItem("tour") || steps[0].id
      const step = steps.find((step) => tourState === step.id)
      if (step) {
        context.commit("setTour", { step: step.id, active: true })
      } else {
        context.dispatch("stopTour")
      }
    },

    nextTourStep(context: Context) {
      const index = steps.findIndex((step) => context.state.tour.step === step.id)
      if (index < 0 || index == steps.length - 1) {
        context.dispatch("stopTour")
      } else {
        const step = steps[index + 1]
        context.commit("setTour", { step: step.id, active: true })
        localStorage.setItem("tour", step.id)
      }
    },

    stopTour(context: Context) {
      context.commit("setTour", { step: "", active: false })
      localStorage.setItem("tour", "completed")
    },

    error(context: Context, payload: { error: Error }) {
      context.commit("error", payload)
    },

    changeRoom(context: Context, activeRoom: string) {
      context.commit("setRoom", { activeRoom })
    },
  }
}
