import { MutationTree } from "vuex"
import { createMutation } from "."
import { LawId } from "../types"
import { State } from "./state"

export const mutations: MutationTree<State> = {
  lawAccepted(state, payload: { lawId: LawId }) {
    state.acceptedLaws.push(payload.lawId)
  },
}

export const lawAccepted = (lawId: LawId) => createMutation("lawAccepted", { lawId })
