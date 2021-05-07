import { Event, Law, LawDefinition } from "./types"

let index = 0
export function createLaw(law: LawDefinition): Law {
  return { ...law, id: "" + ++index }
}

export function createEvent(event: Event): Event {
  return event
}
