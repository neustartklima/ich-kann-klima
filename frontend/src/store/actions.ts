import { ActionTree } from "vuex"
import { LawId } from "../types"
import { createCommand, Command } from "."
import { lawAccepted } from "./mutations"
import { State } from "./state"

export const actions: ActionTree<State, State> = {
  acceptLaw(context, payload: { lawId: LawId }) {
    context.commit(lawAccepted(payload.lawId))
  },
}

export const acceptLaw = (lawId: LawId): Command => createCommand("acceptLaw", { lawId })
