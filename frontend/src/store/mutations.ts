import { MutationTree } from "vuex"
import { createMutation } from "."
import { Game, LawId } from "../types"
import { State } from "./state"

export const mutations: MutationTree<State> = {
  gameLoaded(state, payload: { game: Game }) {
    state.game = payload.game
  },

  lawAccepted(state, payload: { lawId: LawId }) {
    state.acceptedLaws.push(payload.lawId)
  },
}

export const gameLoaded = (game: Game) => createMutation("gameLoaded", { game })
export const lawAccepted = (lawId: LawId) => createMutation("lawAccepted", { lawId })
