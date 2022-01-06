import { EventId } from "../events"
import { GameDefinition, GameId } from "../game"
import { LawId } from "../laws"
import { FetchQueue } from "./FetchQueue"

export type API = ReturnType<typeof APIFactory>

export default function APIFactory(fetchQueue: FetchQueue) {
  return {
    createGame(game: GameDefinition): Promise<void> {
      return fetchQueue.add("post", "/games", game) as Promise<void>
    },

    loadGame(id: GameId): Promise<GameDefinition> {
      return fetchQueue.add("get", "/games/" + id, undefined, 0) as Promise<GameDefinition>
    },

    saveGame(game: GameDefinition): Promise<void> {
      fetchQueue.remove("put", "/games/" + game.id)
      return fetchQueue.add("put", "/games/" + game.id, game) as Promise<void>
    },

    decisionMade(gameId: GameId, lawId: LawId | "sitOut", accepted: boolean): Promise<void> {
      return fetchQueue.add("post", "/games/" + gameId + "/decisions/" + lawId, { accepted }) as Promise<void>
    },

    eventOccurred(gameId: GameId, eventId: EventId): Promise<void> {
      return fetchQueue.add("post", "/games/" + gameId + "/events/" + eventId) as Promise<void>
    },
  }
}
