import { State } from "."
import { idsToLaws, Law } from "../laws"

export const getters = {
  proposedLaws(state: State): Law[] {
    if (!state.game || !state.game.proposedLaws) {
      return []
    }
    return idsToLaws(state.game.proposedLaws)
  },
}
