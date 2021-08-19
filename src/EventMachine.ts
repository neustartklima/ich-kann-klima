import { Context } from "./store"
import { Event } from "./events"
import { Game } from "./game"

export type PriorizedEvent = Event & { priority: number }

export default function EventMachine(context: Context | undefined, allEvents: Event[], random = Math.random) {
  let timer: unknown // to work with both, NodeJS and browser

  function getPriority(event: Event, game: Game): number {
    const probability = event.probability(game)
    return probability >= random() ? probability : 0
  }

  function getPriorizedEvents(game: Game): PriorizedEvent[] {
    return allEvents
      .map((event) => ({ ...event, priority: getPriority(event, game) }))
      .filter((event) => event.priority)
      .sort((a, b) => b.priority - a.priority)
  }

  function initiateEvent() {
    const game = context?.state.game
    if (game) {
      const events = getPriorizedEvents(game)
      if (events.length) {
        context?.dispatch("applyEvent", { event: events[0] })
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

    getPriorizedEvents,
  }
}

let instance: ReturnType<typeof EventMachine>

export function singleton(context: Context, allEvents: Event[]): ReturnType<typeof EventMachine> {
  return instance || (instance = EventMachine(context, allEvents))
}
