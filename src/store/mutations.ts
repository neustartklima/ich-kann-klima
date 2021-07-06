import { Game } from "../types"
import { State } from "."

export const mutations = {
  setGameState(state: State, payload: { game: Game }) {
    state.game = payload.game
  },

  gameOver(state: State) {
    state.game = { ...(state.game as Game), over: true }
  },

  error(state: State, payload: { error: Error }) {
    console.error(payload.error)
    alert(payload.error.message)
  },
}
