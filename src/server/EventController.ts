import { Request } from "express"
import { allEvents } from "../events"
import { Models } from "./models"
import { Store } from "./models/EventStore"

export default function({ eventStore, models }: { eventStore: Store; models: Models }) {
  return {
    eventOccurred(req: Request) {
      const { gameId, eventId } = req.params
      const game = models.game.getById(gameId)
      const event = allEvents.find(e => e.id === eventId)

      if (!event) {
        throw { httpStatus: 404, message: "Event not found" }
      }

      eventStore.emit(models.game.events.eventOccured(game, event))
    },
  }
}
