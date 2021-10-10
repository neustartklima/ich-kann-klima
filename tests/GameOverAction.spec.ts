import { Context, State } from "../src/store"
import { actions } from "../src/store/actions"
import "should"
import { Router } from "vue-router"

describe("GameOverAction", () => {
  it("should show the GameOver page", async () => {
    const state = { game: { over: false } } as State
    const events = [] as { type: string; payload: unknown }[]
    const commit = async (type: string, payload: unknown) => {
      events.push({ type, payload })
    }
    const paths = [] as string[]
    const router = {
      push: (path: string) => paths.push(path),
    } as unknown as Router
    actions.gameOver({ state, dispatch: commit } as Context)
    events.should.equal([{ event: "gameOver", payload: undefined }])
  })

  it("should not allow users to go the GamePage")
})
