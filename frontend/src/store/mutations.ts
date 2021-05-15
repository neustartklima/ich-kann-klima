import { MutationTree } from "vuex"
import { createMutation } from "."
import { Event, Game } from "../types"
import { State } from "./state"

export const mutations: MutationTree<State> = {
  gameLoaded(state, payload: { game: Game }) {
    state.game = payload.game
  },

  showEvent(state, payload: { event?: Event }) {
    state.visibleEvent = payload.event
  },
}

export const gameUpdated = (game: Game) => createMutation("gameLoaded", { game })
export const showEvent = (event: Event | null) => createMutation("showEvent", { event })