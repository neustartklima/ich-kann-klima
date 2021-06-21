import { MioTons, Percent, TWh } from "./types"

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
export function changeBy<T extends number>(min: T | undefined, max: T | undefined): (val: T, by: T) => T {
  const minF: (val: T, by: T) => T =
    min === undefined ? (_val: T, by: T) => by : (val: T, by: T) => Math.max(by, min - val) as T
  const maxF: (val: T, by: T) => T =
    max === undefined ? (_val: T, by: T) => by : (val: T, by: T) => Math.min(by, max - val) as T

  return (val: T, by: T) => (by > 0 ? maxF(val, by) : minF(val, by))
}

/**
 * Function to be used in laws to define changes in percentages.
 *
 * It can then be used within the return value of a law as follows:
 * ```
 * return {
 *   popularity: changePercentBy(data.popularity, -10),
 * }
 * ```
 *
 * @param val The value to be changed.
 * @param by The value by which to change `val`.
 * @returns The value be which to change `val` corrected.
 */
export const changePercentBy = changeBy<Percent>(0, 100)

/**
 * Function to be used in laws to define changes in emission values.
 *
 * It can then be used within the return value of a law as follows:
 * ```
 * return {
 *   co2emissionsBuildings: changeEmissionsBy(data.co2emissionsBuildings, -2),
 * }
 * ```
 *
 * @param val The value to be changed.
 * @param by The value by which to change `val`.
 * @returns The value be which to change `val` corrected.
 */
export const changeEmissionsBy = changeBy<MioTons>(0, undefined)

/**
 * Function to be used in laws to define changes in electricity production values.
 *
 * It can then be used within the return value of a law as follows:
 * ```
 * return {
 *   electricityHardCoal: changeTWhBy(data.electricityHardCoal, -0.1 * defaultValues.electricityHardCoal),
 * }
 * ```
 *
 * @param val The value to be changed.
 * @param by The value by which to change `val`.
 * @returns The value be which to change `val` corrected.
 */
export const changeTWhBy = changeBy<TWh>(0, undefined)

/**
 * Linear interpolation returning a percentage to be used in priority-funkctions in laws.
 * @param zero Value for which to return 0%.
 * @param hundret Value for which to return 100%.
 * @param actual The actual value for which to calculate the percentage.
 * @returns Calculated percentage.
 */
export function linear<T extends number>(zero: T, hundret: T, actual: T): Percent {
  const shifted = actual - zero
  const shiftedH = hundret - zero
  if (shiftedH === 0)
    throw new Error("Linear interpolation requested with the same value for zero and hundred: " + zero)
  return (shifted / shiftedH) * 100
}
