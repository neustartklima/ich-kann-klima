import { Event, Game } from "../types"
import { State } from "."

export const mutations = {
  setGameState(state: State, payload: { game: Game }) {
    state.game = payload.game
  },

  gameOver(state: State) {
    state.game = { ...(state.game as Game), over: true }
  },
}
