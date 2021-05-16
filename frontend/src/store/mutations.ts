import { Event, Game } from "../types"
import { State } from "."

export const mutations = {
  gameLoaded(state: State, payload: { game: Game }) {
    state.game = payload.game
  },

  showEvent(state: State, payload: { event: Event }) {
    state.visibleEvent = payload.event
  },

  hideEvent(state: State) {
    state.visibleEvent = null
  },
}
