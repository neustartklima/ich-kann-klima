import { Context, store } from "."
import { LawId, GameId, Game, LawReference, Event, AcceptedLaw } from "../types"
import router from "../router"
import API from "../model/api"
import RepositoryFactory from "../model/Repository"
import * as Calculator from "../Calculator"
import { fillUpLawProposals, getAcceptedLaw, getLaw } from "../LawProposer"
import EventMachine from "../EventMachine"
import { allEvents } from "../events"

let eventMachine: ReturnType<typeof EventMachine>

function getEventMachine() {
  return eventMachine || (eventMachine = EventMachine(store, allEvents))
}

const backendURL = import.meta.env.PROD ? "https://api.ich-kann-klima.de/api" : "/api"
const api = API(backendURL, fetch)
const repository = RepositoryFactory({ api })

export const actions = {
  async startGame(context: Context) {
    const game = await repository.createGame(context.state.allLaws)
    getEventMachine().start()
    router.push("/games/" + game.id)
  },

  async loadGame(context: Context, payload: { gameId: GameId }) {
    const game = await repository.loadGame(payload.gameId)
    repository.saveGame(game)
    getEventMachine().start()
    context.commit("setGameState", { game })
  },

  gameOver(context: Context) {
    context.commit("gameOver", undefined)
    router.push("/games/" + context.state.game?.id + "/over")
  },

  acceptLaw(context: Context, payload: { lawId: LawId }) {
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
    repository.saveGame(game)
    context.commit("setGameState", { game })
    repository.decisionMade(game, newLaw, true)
  },

  rejectLaw(context: Context, payload: { lawId: LawId }) {
    const game = { ...(context.state.game as Game) }
    game.rejectedLaws = [...game.rejectedLaws, payload.lawId]
    fillUpLawProposals(game)
    repository.decisionMade(game, getLaw(payload.lawId), false)
    context.commit("setGameState", { game })
  },

  advanceYear(context: Context) {
    const game = { ...(context.state.game as Game) }
    const laws = game.acceptedLaws.map(getAcceptedLaw)
    game.currentYear++
    game.values = Calculator.calculateNextYear(game.values, laws, game.currentYear)
    fillUpLawProposals(game)
    repository.saveGame(game)
    context.commit("setGameState", { game })
    getEventMachine().start()
  },

  applyEvent(context: Context, payload: { event: Event }) {
    payload.event.apply(context)
    const game = { ...(context.state.game as Game) }
    game.events.unshift(payload.event)
    repository.eventOccurred(game, payload.event)
    context.commit("setGameState", { game })
  },
}
