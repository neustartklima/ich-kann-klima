import { Converter } from "showdown"

const converter = new Converter()

function numSequence(amount: number): number[] {
  if (amount > 0) {
    return [...Array(amount)].map((_, i) => i)
  } else {
    return []
  }
}

export function getZIndexes(numPlaces: number, centerPos: number): number[] {
  const descending = numPlaces - centerPos - 1
  return [...numSequence(centerPos), Math.max(centerPos, descending), ...numSequence(descending).reverse()]
}

export function markdown(fragments: TemplateStringsArray, ...variables: string[]): string {
  let strings = fragments
    .map((fragment, i) => fragment + (variables[i] || ""))
    .join("")
    .split("\n")
  if (strings[0].length === 0) {
    strings.shift()
  }
  const indent = strings[0].match(/^(\s+)/)
  if (indent && !strings.filter((s) => s.trim()).some((s) => !s.startsWith(indent[1]))) {
    strings = strings.map((s) => s.replace(indent[1], ""))
  }

  return converter.makeHtml(strings.join("\n"))
}

export function not<T>(func: (a: T) => boolean) {
  return (a: T) => !func(a)
}

type ObjOfObj<K extends string, T extends Object> = string extends K ? never : Record<K, T>

export function objectToArrayWithId<K extends string, T extends Object>(modules: ObjOfObj<K, T>): (T & { id: K })[] {
  return (Object.entries<T>(modules) as [K, T][]).map(([key, value]) => ({
    ...value,
    id: key,
  }))
}

export type RefPoint = { value: number; result: number }

/** Linear function connecting two points.
 *
 * Implementation:
 * - If `value == a.value`, `bTerm` is zero and `aTerm == a.result`.
 * - If `value == b.value`, `aTerm` is zero and `bTerm == - b.result`.
 *
 * @param a First point.
 * @param b Second point.
 * @returns Function.
 */
export function linearFunction(a: RefPoint, b: RefPoint): (value: number) => number {
  const divisor = a.value - b.value
  return (value: number) => {
    const aTerm = (a.result * (value - b.value)) / divisor
    const bTerm = (b.result * (value - a.value)) / divisor
    return aTerm - bTerm
  }
}
