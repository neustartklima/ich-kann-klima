import { State } from "."
import { idsToLaws, Law } from "../laws"
import { allEvents, Event } from "../events"

export const getters = {
  proposedLaws(state: State): Law[] {
    if (!state.game || !state.game.proposedLaws) {
      return []
    }
    return idsToLaws(state.game.proposedLaws)
  },

  eventToShow(state: State): Event | undefined {
    if (!state.game) return undefined
    const currDate = state.game.currentDate
    
    const er = state.game.events.filter((er) => er.occurredIn === currDate && !er.acknowledged)[0]
    return er && allEvents.find((e) => e.id === er.id)
  },
}
