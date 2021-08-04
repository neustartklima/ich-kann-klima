import { State } from "."
import { allLaws, Law } from "../laws"

export const getters = {
  proposedLaws(state: State): Law[] {
    if (!state.game || !state.game.proposedLaws) {
      return []
    }
    return state.game.proposedLaws
      .map((lawId) => {
        const law = allLaws.find((law) => law.id === lawId)
        if (!law) {
          console.error(`Inconsistency: Proposed law #${lawId} not found`)
        }
        return law as Law
      })
      .filter((a) => a)
  },
}
