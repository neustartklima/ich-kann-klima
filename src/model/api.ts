import { EventId } from "../events"
import { Game, GameId } from "../game"
import { LawId } from "../laws"
import { FetchQueue } from "./FetchQueue"

export type API = ReturnType<typeof APIFactory>

export default function APIFactory(fetchQueue: FetchQueue) {
  return {
    createGame(game: Game): Promise<Game> {
      return fetchQueue.add("post", "/games", game) as Promise<Game>
    },

    loadGame(id: GameId): Promise<Game> {
      return fetchQueue.add("get", "/games/" + id, undefined, 0) as Promise<Game>
    },

    saveGame(game: Game): Promise<Game> {
      fetchQueue.remove("put", "/games/" + game.id)
      return fetchQueue.add("put", "/games/" + game.id, game) as Promise<Game>
    },

    decisionMade(gameId: GameId, lawId: LawId | "sitOut", accepted: boolean): Promise<void> {
      return fetchQueue.add("post", "/games/" + gameId + "/decisions/" + lawId, { accepted }) as Promise<void>
    },

    eventOccurred(gameId: GameId, eventId: EventId): Promise<void> {
      return fetchQueue.add("post", "/games/" + gameId + "/events/" + eventId) as Promise<void>
    },
  }
}
