import { GetterTree } from "vuex"
import { Law } from "../types"
import { State } from "./state"

export const getters = {
  proposedLaws(state: State): Law[] {
    if (!state.game) {
      return []
    }
    return state.game.proposedLaws
      .map((lawId) => {
        const law = state.allLaws.find((law) => law.id === lawId)
        if (!law) {
          console.error(`Inconsistency: Proposed law #${lawId} not found`)
        }
        return law as Law
      })
      .filter((a) => a)
  },
}
