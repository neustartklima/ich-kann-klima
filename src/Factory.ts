import { EventDefinition } from "./events/EventsTypes"
import { Law } from "./laws"
import { LawDefinition } from "./laws/LawsTypes"

export function defineLaw(law: LawDefinition): LawDefinition {
  return law
}

export function prepareModuleList<T>(modules: Record<string, T>) {
  return Object.entries(modules).map(([name, module]) => ({ ...module, id: name.replace(/\W/g, "_") }))
}

export function lawList(modules: Record<string, LawDefinition>): Law[] {
  return prepareModuleList(modules) as Law[]
}

export function defineEvent(event: EventDefinition): EventDefinition {
  return event
}
