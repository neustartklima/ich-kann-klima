import { EventDefinition, LawDefinition } from "./types"

export function defineLaw(law: LawDefinition): LawDefinition {
  return law
}

export function defineEvent(event: EventDefinition): EventDefinition {
  return event
}

export function prepareModuleList(modules: Record<string, Record<string, unknown>>): unknown[] {
  return Object.entries(modules).map(([name, module]) => ({ ...module, id: name.replace(/\W/g, "_") }))
}
