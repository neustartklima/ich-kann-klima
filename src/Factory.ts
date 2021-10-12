import { EventDefinition } from "./events/EventsTypes"
import { Law } from "./laws"
import { LawDefinition } from "./laws/LawsTypes"
import { random } from "./lib/random"
import { Event, EventId } from "./events"

export function defineLaw(law: LawDefinition): LawDefinition {
  return law
}

export function defineEvent(event: EventDefinition): Event {
  return {
    ...event,
    probability: event.probability || random,
    id: event.title.replace(/\W/g, "_") as EventId,
  }
}

export function prepareModuleList(modules: Record<string, Record<string, unknown>>): unknown[] {
  return Object.entries(modules).map(([name, module]) => ({ ...module, id: name.replace(/\W/g, "_") }))
}

export function lawList(modules: Record<string, LawDefinition>): Law[] {
  return prepareModuleList(modules) as Law[]
}
