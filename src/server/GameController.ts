import { Request } from "express"
import { v4 as uuid } from "uuid"
import { Models } from "./models"
import { Store } from "./models/EventStore"

export default function({ eventStore, models }: { eventStore: Store; models: Models }) {
  return {
    loadGame(req: Request) {
      const game = models.game.getById(req.params.gameId)
      if (game) {
        return game
      }
      throw { httpStatus: 404, message: "Game not found" }
    },

    createGame(req: Request) {
      const game = { ...req.body, id: uuid() }
      eventStore.emit(models.game.events.gameCreated(game))
      return game
    },

    saveGame(req: Request) {
      const game = req.body
      eventStore.emit(models.game.events.gameSaved(game))
      return game
    },
  }
}
