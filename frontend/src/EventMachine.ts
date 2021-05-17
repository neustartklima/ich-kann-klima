import { BaseParams, Event, Game } from "./types"

export function getAnEvent(game: Game, allEvents: Event[]): Event | null {
  const priorizedEvents = allEvents
    .map((event) => ({ ...event, priority: event.probability(game) * Math.random() }))
    .filter((event) => event.priority)
    .sort((a, b) => b.priority - a.priority)
  return  priorizedEvents.length ? priorizedEvents[0] : null
}
