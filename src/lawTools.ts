import { allLaws, LawId, LawReference } from "./laws"
import { Game } from "./game"
import { Percent } from "./types"

/**
 * Create a function, which may be used in laws to check change values to obey boundaries.
 *
 * Example: For a given type `Percent`, a useful function may be generated with
 * ```
 * const changePercentBy = changeBy<Percent>(0, 100)
 * ```
 * It can then be used within the return value of a law as follows:
 * ```
 * return {
 *   popularity: changePercentBy(data.popularity, -10),
 * }
 * ```
 *
 * @param min The minimum the changed value has to obey or undefined, if none.
 * @param max The maximum the changed value has to obey or undefined, if none.
 * @returns Function to be used in laws.
 */
export function changeBy<T extends number>(min?: T, max?: T): (val: T, by: T) => T {
  const minF: (val: T, by: T) => T =
    min === undefined ? (_val: T, by: T) => by : (val: T, by: T) => Math.max(by, min - val) as T
  const maxF: (val: T, by: T) => T =
    max === undefined ? (_val: T, by: T) => by : (val: T, by: T) => Math.min(by, max - val) as T

  return (val: T, by: T) => (by > 0 ? maxF(val, by) : minF(val, by))
}

/**
 * Linear interpolation returning a percentage to be used in priority-functions in laws.
 * @param zero Value for which to return 0%.
 * @param hundred Value for which to return 100%.
 * @param actual The actual value for which to calculate the percentage.
 * @returns Calculated percentage.
 */
export function linear<T extends number>(zero: T, hundred: T, actual: T): Percent {
  const shifted = actual - zero
  const shiftedH = hundred - zero
  if (shiftedH === 0)
    throw new Error("Linear interpolation requested with the same value for zero and hundred: " + zero)
  return (shifted / shiftedH) * 100
}

/**
 * Linear interpolation returning a popularity change.
 *
 * In contrast to {@link linear} values beyond `noChangeVal` will return zero.
 *
 * @param noChangeVal Value for which no popularity change is returned.
 * @param fullChangeVal Value for which {@link fullPopChange} is returned.
 * @param actualVal The actural value for which to calculate the change.
 * @param fullPopChange Return value, if `actualVal == fullChangeVal`.
 * @return Calculated popularity change.
 *
 */
export function linearPopChange<T extends number>(
  noChangeVal: T,
  fullChangeVal: T,
  actualVal: T,
  fullPopChange: Percent
): Percent {
  const frustrationOrPraise: Percent = Math.max(0, linear(noChangeVal, fullChangeVal, actualVal))
  return (frustrationOrPraise / 100) * fullPopChange
}

/**
 * Check if a law is accepted in a given game.
 * @param game Game to inspect.
 * @param lawId Law ID to search.
 * @returns True if law was accepted, false otherwise
 * @throws Error if no law with the given ID is defined.
 */
export function lawIsAccepted(game: Game, lawId: LawId): boolean {
  if (!allLaws.map((l) => l.id).includes(lawId)) throw new Error("Unknown law ID " + lawId + " used in a law.")
  return game.acceptedLaws.some((l) => l.lawId === lawId && l.effectiveSince <= game.currentYear)
}

export function getActiveLaw(lawRefs: LawReference[], matcher: RegExp): LawId | undefined {
  const lawRef = lawRefs
    .sort((law1, law2) => law2.effectiveSince - law1.effectiveSince)
    .find((law) => matcher.test(law.lawId))
  return lawRef?.lawId
}
