import { Game, GameDefinition, GameId, Law, Event } from "../types"
import { API } from "./api"
import { v1 as getUUID } from "uuid"
import { createBaseValues, initialGame } from "."
import { fillUpLawProposals } from "../LawProposer"

export function initGame(game: GameDefinition = initialGame, id = getUUID()): Game {
  return {
    id,
    currentYear: game.currentYear,
    acceptedLaws: game.acceptedLaws,
    proposedLaws: game.proposedLaws,
    rejectedLaws: game.rejectedLaws,
    values: createBaseValues(game.values),
    events: [],
    over: false,
  }
}

interface Logger {
  warn: (msg: string, details?: unknown) => void
}

interface Storage {
  setItem: (name: string, value: string) => void
  getItem: (name: string) => string | null
}

export default function({
  api,
  logger = console,
  storage = localStorage,
}: {
  api: API
  logger?: Logger
  storage?: Storage
}) {
  return {
    async createGame(allLaws: Law[], initialData: GameDefinition = initialGame): Promise<Game> {
      const newGame = initGame(initialData)
      newGame.acceptedLaws = allLaws
        .filter((law) => law.labels?.includes("initial"))
        .map((law) => ({
          lawId: law.id,
          effectiveSince: newGame.currentYear,
        }))
      fillUpLawProposals(newGame, allLaws)

      try {
        const game = await api.createGame(newGame)
        return game
      } catch (error) {
        logger.warn("Cannot save new game - trying again later", error)
        return newGame
      }
    },

    async loadGame(id: GameId): Promise<Game> {
      const storedItem = storage.getItem("game")
      if (storedItem) {
        const storedGame = JSON.parse(storedItem)
        if (storedGame.id === id) {
          return initGame(storedGame, id)
        }
      }

      try {
        const storedGame = await api.loadGame(id)
        return initGame(storedGame, id)
      } catch (error) {
        logger.warn(
          "No game found in localStorage, but the id cannot be found on server either... so no chance to load it."
        )
      }
      throw Error("Game not found")
    },

    async saveGame(game: Game): Promise<Game> {
      storage.setItem("game", JSON.stringify(game))
      try {
        await api.saveGame(game)
      } catch (error) {
        logger.warn(
          "save on server failed - at least the game is saved in localStorage, so you can save it maybe next time"
        )
      }
      return game
    },

    async decisionMade(game: Game, law: Law, accepted: boolean): Promise<void> {
      api.decisionMade(game.id, law.id, accepted)
      this.saveGame(game)
    },

    async eventOccurred(game: Game, event: Event): Promise<void> {
      api.eventOccurred(game.id, event.id)
      this.saveGame(game)
    },
  }
}
