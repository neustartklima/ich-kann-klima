import { Event, Law, LawDefinition } from "./types"

export function createLaw(url: string, law: LawDefinition): Law {
  const id = url
    .replace(/\.ts\?.*/, "")
    .split(/[\\/]/)
    .pop() as string
  return { ...law, id: id }
}

export function createEvent(event: Event): Event {
  return event
}
