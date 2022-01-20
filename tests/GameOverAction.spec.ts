import { Context, State } from "../src/store"
import { ActionFactory } from "../src/store/actions"
import { Repository } from "../src/model/Repository"
import "should"

describe("GameOverAction", () => {
  it("should show the GameOver page if game is over", async () => {
    const state = { game: { id: "game-id", over: false } } as State
    const events = [] as { type: string; payload: unknown }[]
    const commit = async (type: string, payload: unknown) => {
      events.push({ type, payload })
    }
    const paths = [] as string[]
    const router = {
      push: (path: string) => paths.push(path),
    }
    const repository = {} as Repository
    ActionFactory(router, repository).gameOver({ state, commit } as Context)
    events.should.deepEqual([{ type: "gameOver", payload: undefined }])
  })
})
