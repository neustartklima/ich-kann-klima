import { BaseParams, Change, createBaseValues, modifyParams, paramList } from "../params"
import { Game } from "../game"
import { Law } from "../laws"

function genCompare(a: number | string, b: number | string) {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

export type LawSortCols = "state" | "id" | "priority"

export type ValueRow = {
  id: keyof BaseParams
  unit: string
  value: string
  effect: string
  class: "writable" | "calculated"
}

export function getSortedValues(values: BaseParams, effects: Change[]): ValueRow[] {
  const nextValues = createBaseValues(values)
  modifyParams(nextValues, effects)

  function valueStr(key: keyof BaseParams): string {
    return values[key].toFixed(2)
  }
  function formatEffect(effect: number) {
    return (effect > 0 ? "+" : "") + effect.toFixed(2)
  }

  function getEffect(key: keyof BaseParams): number {
    const effect = effects.find(e => e.name === key)
    return effect ? effect.value : 0
  }

  function effectStr(key: keyof BaseParams): string {
    const effect = getEffect(key)
    const valDiff = nextValues[key] - values[key]
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
  id: string
  priority: string
  state: string
}

export function getSortedLaws(game: Game, sortCol: LawSortCols, sortDir: number, allLaws: Law[]): LawRow[] {
  const proposed = game.proposedLaws
  const accepted = game.acceptedLaws.map((lawRef) => lawRef.lawId)
  const rejected = game.rejectedLaws
  function findState(lawId: string) {
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
    .sort((a, b) => genCompare(a[sortCol], b[sortCol]) * sortDir)
    .map((law) => ({ ...law, priority: law.priority.toFixed(2) }))
}
