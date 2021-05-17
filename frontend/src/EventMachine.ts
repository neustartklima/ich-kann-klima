import { Store } from "./store"
import { Event } from "./types"

export function getAnEvent(store: Store, allEvents: Event[]): Event | null {
  const priorizedEvents = allEvents
    .map((event) => ({ ...event, priority: event.probability(store) * Math.random() }))
    .filter((event) => event.priority)
    .sort((a, b) => b.priority - a.priority)
  return  priorizedEvents.length ? priorizedEvents[0] : null
}
