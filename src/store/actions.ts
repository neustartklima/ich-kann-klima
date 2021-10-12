import { Context } from "."
import { GameId, Game, prepareNextStep, newGame } from "../game"
import { Repository } from "../model/Repository"
import * as Calculator from "../Calculator"
import { getAcceptedLaw } from "../laws"
import { Event } from "../events"
import { LawId } from "../laws"
import { Change, applyEffects, createBaseValues } from "../params"
import { steps } from "../tourSteps"
import { seedWithGame } from "../lib/random"

interface Router {
  push: (path: string) => void
}

export function ActionFactory(router: Router, repository: Repository) {
  return {
    async startGame(context: Context) {
      const game = newGame()
      await repository.createGame(game)
      seedWithGame(game)
      const event = prepareNextStep(game)
      context.commit("setGameState", { game })
      context.dispatch("applyEvent", { event })
      router.push("/games/" + game.id)
    },

    async loadGame(context: Context, payload: { gameId: GameId }) {
      try {
        const game = await repository.loadGame(payload.gameId)
        await repository.saveGame(game)
        seedWithGame(game)
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
      const event = prepareNextStep(game)
      await repository.saveGame(game)
      context.commit("setGameState", { game })
      context.dispatch("applyEvent", { event })
      await repository.decisionMade(game, newLaw.id, true)
    },

    async rejectLaw(context: Context, payload: { lawId: LawId }) {
      const game = { ...(context.state.game as Game) }
      game.rejectedLaws = [...game.rejectedLaws, payload.lawId]
      await repository.decisionMade(game, payload.lawId, false)
      await repository.saveGame(game)
      context.commit("setGameState", { game })
    },

    async sitOut(context: Context) {
      const game = { ...(context.state.game as Game) }
      await repository.decisionMade(game, "sitOut", true)
      const event = prepareNextStep(game)
      await repository.saveGame(game)
      context.commit("setGameState", { game })
      context.dispatch("applyEvent", { event })
    },

    async advanceYear(context: Context) {
      const game = { ...(context.state.game as Game) }
      const laws = game.acceptedLaws.map(getAcceptedLaw)
      game.currentYear++
      game.values = Calculator.calculateNextYear(game, laws, game.currentYear)
      await repository.saveGame(game)
      context.commit("setGameState", { game })
    },

    async applyEvent(context: Context, payload: { event: Event | undefined }) {
      if (!payload.event) return
      const game = { ...(context.state.game as Game) }
      await repository.eventOccurred(game, payload.event)
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
      const affectedContext = { dispatch: context.dispatch, values: createBaseValues(context.state.game!.values) }
      applyEffects(affectedContext, payload.changes)
      const game = { ...context.state.game, values: affectedContext.values } as Game
      repository.saveGame(game)
      context.commit("setGameState", { game })
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

    async error(context: Context, payload: { error: Error }) {
      context.commit("error", payload)
    },
  }
}
