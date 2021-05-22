import { Event, Law, LawDefinition } from "./types"

export function createLaw(id: string, law: LawDefinition): Law {
  return { ...law, id }
}

export function createEvent(event: Event): Event {
  return event
}
