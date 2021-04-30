import { MutationTree } from "vuex"
import { createMutation } from "."
import { Game } from "../types"
import { State } from "./state"

export const mutations: MutationTree<State> = {
  gameLoaded(state, payload: { game: Game }) {
    state.game = payload.game
  },
}

export const gameUpdated = (game: Game) => createMutation("gameLoaded", { game })
