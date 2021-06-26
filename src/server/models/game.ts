import { Event, Game, GameId, Law } from "../../types"
import { assert, Store } from "./EventStore"

export default function({ eventStore }: { eventStore: Store }) {
  const events = {
    gameCreated(game: Game) {
      assert(game, "No game provided")
      return { type: "gameCreated", ...game }
    },

    gameSaved(game: Game) {
      assert(game, "No game provided")
      return { type: "gameSaved", ...game }
    },

    decisionMade(game: Game, law: Law, accepted: boolean) {
      assert(game, "No game provided")
      assert(law, "No law provided")
      return { type: "decisionMade", gameId: game.id, lawId: law.id, accepted }
    },

    eventOccured(game: Game, event: Event) {
      assert(game, "No game provided")
      assert(event, "No event provided")
      return { type: "eventOccured", gameId: game.id, eventId: event.id }
    },
  }

  const games = {} as Record<GameId, Game>

  eventStore
    .on(events.gameCreated, (event) => {
      const game = event as Game
      games[game.id] = game
    })
    .on(events.gameSaved, (event) => {
      const game = event as Game
      games[game.id] = game
    })

  return {
    events,

    getById(id: GameId) {
      const game = games[id]
      if (game) {
        return game
      }
      throw Error(`Game #${id} doesn't exist`)
    },

    reset() {
      for (const id in games) {
        if (Object.prototype.hasOwnProperty.call(games, id)) {
          delete games[id]
        }
      }
    },
  }
}
