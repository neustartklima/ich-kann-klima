import { Request } from "express"
import { allLaws } from "../laws"
import { Models } from "./models"
import { Store } from "./models/EventStore"

export default function({ eventStore, models }: { eventStore: Store; models: Models }) {
  return {
    decided(req: Request) {
      const { gameId, lawId } = req.params
      const { accepted } = req.body
      const game = models.game.getById(gameId)
      const law = allLaws.find(l => l.id === lawId)

      if (!law) {
        throw { httpStatus: 404, message: "Law not found" }
      }

      eventStore.emit(models.game.events.decisionMade(game, law, accepted === "accepted"))
      return {}
    },
  }
}
