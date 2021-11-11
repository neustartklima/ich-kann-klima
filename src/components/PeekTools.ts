import { BaseParams, Change, createBaseValues, applyEffects, paramList, modify } from "../params"
import { Game } from "../game"
import { Law, LawId } from "../laws"
import { Event, EventId } from "../events"

type Row<ColKey extends string> = { [P in ColKey]: number | string }
function rowCompare<ColKey extends string>(a: Row<ColKey>, b: Row<ColKey>, ...cols: ColKey[]) {
  for (const col of cols) {
    if (a[col] < b[col]) return -1
    if (a[col] > b[col]) return 1
  }
  return 0
}

export type ValueRow = {
  id: keyof BaseParams
  unit: string
  value: string
  effect: string
  class: "writable" | "calculated"
}

export function getSortedValues(values: BaseParams, diffs: BaseParams | undefined, effects: Change[]): ValueRow[] {
  function valueStr(key: keyof BaseParams): string {
    return values[key].toFixed(2)
  }
  function formatEffect(effect: number) {
    return (effect > 0 ? "+" : "") + effect.toFixed(2)
  }

  function getEffect(key: keyof BaseParams): number {
    const effect = effects.find(
      (e) => e.type === "modify" && (e as ReturnType<typeof modify>).name === key
    ) as ReturnType<typeof modify>
    return effect && effect.condition ? effect.value : 0
  }

  function effectStr(key: keyof BaseParams): string {
    const effect = getEffect(key)
    const valDiff = diffs ? diffs[key] : 0
    if (effect && Math.abs(effect - valDiff) < 0.001) return formatEffect(effect)
    if (effect) return formatEffect(effect) + " / " + formatEffect(valDiff)
    if (valDiff != 0) return formatEffect(valDiff)
    return ""
  }

  const result: ValueRow[] = paramList.map((pd) => ({
    id: pd.name,
    unit: pd.unit,
    value: valueStr(pd.name),
    effect: effectStr(pd.name),
    class: pd.writable ? "writable" : "calculated",
  }))
  return result
}

export type LawRow = {
  id: LawId
  priority: string
  state: string
}

export type LawCol = keyof LawRow

export function getSortedLaws(game: Game, sortCol: LawCol, sortDir: number, allLaws: Law[]): LawRow[] {
  const proposed = game.proposedLaws
  const accepted = game.acceptedLaws.map((lawRef) => lawRef.lawId)
  const rejected = game.rejectedLaws
  function findState(lawId: LawId) {
    if (accepted.includes(lawId)) return "a"
    if (proposed.includes(lawId)) return "p"
    if (rejected.includes(lawId)) return "r"
    return "x"
  }
  return allLaws
    .map((law) => ({
      id: law.id,
      priority: law.priority(game),
      state: findState(law.id),
    }))
    .sort((a, b) => rowCompare(a, b, sortCol, "id") * sortDir)
    .map((law) => ({ ...law, priority: law.priority.toFixed(2) }))
}

export type EventRow = {
  id: EventId
  probability: string
}

export type EventCol = keyof EventRow

export function getSortedEvents(game: Game, sortCol: EventCol, sortDir: number, allEvents: Event[]): EventRow[] {
  return allEvents
    .map((event) => ({ id: event.id, probability: event.probability(game) }))
    .sort((a, b) => rowCompare(a, b, sortCol, "id") * sortDir)
    .map((row) => ({ ...row, probability: (row.probability * 100).toFixed(2) }))
}
