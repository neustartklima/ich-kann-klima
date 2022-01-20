import { Event } from "../events"
import { Game, GameDefinition, GameId, getGameDefinition, initGame } from "../game"
import { LawId } from "../laws"
import { API } from "./api"

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
    createGame(game: Game): void {
      const gameDef = getGameDefinition(game)
      storage.setItem("game", JSON.stringify(gameDef))

      // We don't await here - creating the game on the server is done in the background
      api.createGame(gameDef).catch((reason) => {
        // If the API finally errors, no message to the users are sent, they can play nevertheless.
        logger.warn("Cannot save new game - trying again later", reason)
      })
    },

    async loadGame(id: GameId): Promise<Game> {
      const storedItem = storage.getItem("game")
      if (storedItem) {
        const storedGame: GameDefinition = JSON.parse(storedItem)
        if (storedGame.id === id) {
          return initGame(storedGame, id)
        }
      }

      const storedGame: GameDefinition = await api.loadGame(id)
      return initGame(storedGame, id)
    },

    saveGame(game: Game): void {
      const gameDef = getGameDefinition(game)
      storage.setItem("game", JSON.stringify(gameDef))

      // We don't await here, b/c saving could take place in the background and can even be retried later
      api.saveGame(gameDef).catch((reason) => {
        // Errors, however, cannot be shown to the user other than in the log
        logger.warn(
          "save on server failed - at least the game is saved in localStorage, so you can save it maybe next time",
          reason
        )
      })
    },

    decisionMade(game: Game, lawId: LawId | "sitOut", accepted: boolean): void {
      api.decisionMade(game.id, lawId, accepted)
    },

    eventOccurred(game: Game, event: Event): void {
      api.eventOccurred(game.id, event.id)
    },
  }
}
