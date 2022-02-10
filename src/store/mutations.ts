import { Game } from "../game"
import { State } from "."

export const mutations = {
  setGameState(state: State, payload: { game: Game }) {
    state.game = payload.game
  },

  gameOver(state: State) {
    state.game = { ...(state.game as Game), over: true }
  },

  setTour(state: State, tour: { step: string; active: boolean }) {
    state.tour = tour
  },

  error(state: State, payload: { error: Error }) {
    console.error(payload.error)
    alert(payload.error.message)
  },

  setRoom(state: State, payload: { activeRoom: string }) {
    state.activeRoom = payload.activeRoom
  },
}
