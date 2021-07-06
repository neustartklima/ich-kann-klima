import { Game, GameDefinition, GameId, Law, Event } from "../types"
import { API } from "./api"
import { initGame, initialGame } from "."
import { fillUpLawProposals } from "../LawProposer"

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
      const game = initGame(initialData)
      game.acceptedLaws = allLaws
        .filter((law) => law.labels?.includes("initial"))
        .map((law) => ({ lawId: law.id, effectiveSince: game.currentYear }))
      fillUpLawProposals(game, allLaws)

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
          return initGame(storedGame, id)
        }
      }

      const storedGame = await api.loadGame(id)
      return initGame(storedGame, id)
    },

    async saveGame(game: Game): Promise<void> {
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

    async decisionMade(game: Game, law: Law, accepted: boolean): Promise<void> {
      api.decisionMade(game.id, law.id, accepted)
    },

    async eventOccurred(game: Game, event: Event): Promise<void> {
      api.eventOccurred(game.id, event.id)
    },
  }
}
