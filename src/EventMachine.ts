import { Store } from "./store"
import { Event } from "./types"

export default function(store: Store, allEvents: Event[]) {
  let timer: number

  function getPriorizedEvents(): Event[] {
    return allEvents
      .map((event) => ({ ...event, priority: event.probability(store) * Math.random() }))
      .filter((event) => event.priority)
      .sort((a, b) => b.priority - a.priority)
  }

  function initiateEvent() {
    const game = store.state.game
    if (game) {
      const events = getPriorizedEvents()
      if (events.length) {
        store.dispatch("applyEvent", { event: events[0] })
      }
    }
  }

  return {
    start() {
      // Check for events once in a minute
      this.pause()
      timer = setTimeout(initiateEvent, Math.random() * 60000)
    },

    pause() {
      timer && clearTimeout(timer)
      timer = 0
    },

    initiateEvent,
  }
}
