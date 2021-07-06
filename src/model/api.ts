import { EventId, Game, GameId, LawId } from "../types"

export type API = ReturnType<typeof APIFactory>

type FetchFunction = (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>

export default function APIFactory(baseUrl: string, fetch: FetchFunction) {
  async function request(method: string, path: string, data?: Record<string, unknown>) {
    const options = { method } as RequestInit
    if (["post", "put", "patch"].includes(method)) {
      options.body = JSON.stringify(data)
      options.headers = { ["content-type"]: "application/json" }
    }
    const response = await fetch(baseUrl + path, options)
    const result = response.headers.get("Content-Type")?.match(/json/) ? await response.json() : await response.text()
    if (response.ok) {
      return result
    }
    console.error(result)
    throw Error(result.message || result)
  }

  return {
    createGame(game: Game): Promise<Game> {
      return request("post", "/games", game)
    },

    loadGame(id: GameId): Promise<Game> {
      return request("get", "/games/" + id)
    },

    saveGame(game: Game): Promise<Game> {
      return request("put", "/games/" + game.id, game)
    },

    decisionMade(gameId: GameId, lawId: LawId, accepted: boolean): Promise<void> {
      return request("post", "/games/" + gameId + "/decisions/" + lawId, { accepted })
    },

    eventOccurred(gameId: GameId, eventId: EventId): Promise<void> {
      return request("post", "/games/" + gameId + "/events/" + eventId)
    },
  }
}
