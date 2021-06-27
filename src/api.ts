import { Event, Game, GameId, Law } from "./types"

export interface API {
  loadGame: (id: GameId) => Promise<Game>
  createGame: (game: Game) => Promise<Game>
  saveGame: (game: Game) => Promise<Game>
  decisionMade: (game: Game, law: Law, accepted: boolean) => Promise<void>
  eventOccurred: (game: Game, event: Event) => Promise<void>
}

type FetchFunction = (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>

export default function(baseUrl: string, fetch: FetchFunction): API {
  async function request(method: string, path: string, data?: Record<string, unknown>) {
    const options = { method } as RequestInit
    if (["post", "put", "patch"].includes(method)) {
      options.body = JSON.stringify(data)
      options.headers = {["content-type"]: "application/json"}
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
    createGame(game) {
      return request("post", "/games", game)
    },

    loadGame(id) {
      return request("get", "/games/" + id)
    },

    saveGame(game) {
      return request("put", "/games/" + game.id, game)
    },

    decisionMade(game, law, accepted) {
      return request("post", "/games/" + game.id + "/decisions/" + law.id, { accepted })
    },

    eventOccurred(game, event) {
      return request("post", "/games/" + game.id + "/events/" + event.id)
    },
  }
}
