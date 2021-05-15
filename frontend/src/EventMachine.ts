import { BaseParams, Event, Game } from "./types"

export function getAnEvent(game: Game, allEvents: Event[]): Event | null {
  const priorizedEvents = allEvents
    .map((event) => ({ ...event, priority: event.probability(game) * Math.random() }))
    .filter((event) => event.priority)
    .sort((a, b) => b.priority - a.priority)
  return  priorizedEvents.length ? priorizedEvents[0] : null
}

export function applyEffects(values: BaseParams, effects: Partial<BaseParams>) {
  const effectedProperties = Object.keys(effects) as Array<keyof BaseParams>
  effectedProperties.forEach((property) => {
    values[property] += effects[property] || 0
  })
  
  // re-calculate remaining CO2 budget
  values.co2budget -= values.co2emissions

  return values
}
