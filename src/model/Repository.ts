import { Game, GameId, initGame } from "../game"
import { API } from "./api"
import { LawId } from "../laws"
import { Event } from "../events"
import { getState, seedWithGame } from "../lib/random"

interface Logger {
  warn: (msg: string, details?: unknown) => void
}

interface Storage {
  setItem: (name: string, value: string) => void
  getItem: (name: string) => string | null
}

export type Repository = ReturnType<typeof RepositoryFactory>

export default function RepositoryFactory({
  api,
  logger = console,
  storage = localStorage,
}: {
  api: API
  logger?: Logger
  storage?: Storage
}) {
  return {
    async createGame(game: Game): Promise<Game> {
      seedWithGame(game)
      storage.setItem("game", JSON.stringify(game))

      try {
        api.createGame(game) // We don't await here - creating the game on the server is done in the background
      } catch (error) {
        // If the API finally errors, no message to the users are sent, they can play nevertheless.
        logger.warn("Cannot save new game - trying again later", error)
      }

      return game
    },

    async loadGame(id: GameId): Promise<Game> {
      const storedItem = storage.getItem("game")
      if (storedItem) {
        const storedGame = JSON.parse(storedItem)
        if (storedGame.id === id) {
          seedWithGame(storedGame)
          return initGame(storedGame, id)
        }
      }

      const storedGame = await api.loadGame(id)
      seedWithGame(storedGame)
      return initGame(storedGame, id)
    },

    async saveGame(game: Game): Promise<void> {
      game.prngState = getState()
      storage.setItem("game", JSON.stringify(game))
      try {
        api.saveGame(game) // We don't await here, b/c saving could take place in the background and can even be retried later
      } catch (error) {
        // Errors, however, cannot be shown to the user other than in the log
        logger.warn(
          "save on server failed - at least the game is saved in localStorage, so you can save it maybe next time",
          error
        )
      }
    },

    async decisionMade(game: Game, lawId: LawId | "sitOut", accepted: boolean): Promise<void> {
      api.decisionMade(game.id, lawId, accepted)
    },

    async eventOccurred(game: Game, event: Event): Promise<void> {
      api.eventOccurred(game.id, event.id)
    },
  }
}
