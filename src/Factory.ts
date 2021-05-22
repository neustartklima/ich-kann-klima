import { Event, Law, LawDefinition } from "./types"

export function createLaw(url: string, law: LawDefinition): Law {
  const id = url
    .replace(/\.[tj]s(\?.*)?$/, "")
    .split(/[\\/]/)
    .pop() as string
  return { ...law, id }
}

export function createEvent(event: Event): Event {
  return event
}
