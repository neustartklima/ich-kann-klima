import { Store } from "./store"
import { Event } from "./types"

export default function EventMachine(store: Store, allEvents: Event[], random = Math.random) {
  let timer: unknown // to work with both, NodeJS and browser

  function getPriorizedEvents(): Event[] {
    return allEvents
      .map((event) => ({ ...event, priority: event.probability(store) * random() }))
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
      // Create an event after about 10 seconds
      this.pause()
      timer = setTimeout(initiateEvent, random() * 10000 + 5000)
    },

    pause() {
      timer && clearTimeout(timer as number)
      timer = undefined
    },

    initiateEvent,
  }
}

let instance: ReturnType<typeof EventMachine>

export function singleton(store: Store, allEvents: Event[]): ReturnType<typeof EventMachine> {
  return instance || (instance = EventMachine(store, allEvents))
}
