import { allLaws, LawId, LawReference } from "."
import { Game, GameYear } from "../game"
import { Change, modify } from "../params"
import { Percent, TWh } from "../types"

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
 * @param minActiveYears Number of years the law is active. Default: 0
 * @returns True if law was accepted, false otherwise
 * @throws Error if no law with the given ID is defined.
 */
export function lawIsAccepted(game: Game, lawId: LawId, minActiveYears: number = 0): boolean {
  if (!allLaws.map((l) => l.id).includes(lawId)) throw new Error("Unknown law ID " + lawId + " used in a law.")
  return game.acceptedLaws.some((l) => l.lawId === lawId && l.effectiveSince <= game.currentYear + minActiveYears)
}

export function getActiveLaw(lawRefs: LawReference[], matcher: RegExp): LawId | undefined {
  const lawRef = lawRefs
    .sort((law1, law2) => law2.effectiveSince - law1.effectiveSince)
    .find((law) => matcher.test(law.lawId))
  return lawRef?.lawId
}

/** Amount of electrical power produced by wind relative to total demand.
 *
 * @param game The game.
 * @returns Percentage of electrical power.
 */
export function windPercentage(game: Game): Percent {
  const v = game.values
  return (v.electricityWindUsable / v.electricityDemand) * 100
}

/** Amount of electrical power produced with renewable sources relative to total demand.
 *
 * @param game The game.
 * @returns Percentage of electrical power.
 */
export function renewablePercentage(game: Game): Percent {
  const electricityRenewable =
    game.values.electricityWindUsable +
    game.values.electricitySolar +
    game.values.electricityWater +
    game.values.electricityBiomass
  return (electricityRenewable / game.values.electricityDemand) * 100
}

/** Changes due to wind power expansion.
 *
 * @param game The game.
 * @param onshoreNewMax Maximum new onshore wind power per year [TWh].
 * @param offshoreNew new offshore wind power per year [TWh].
 * @param startYear Start year of the law - used for delayed effect.
 * @returns The changes to return by the law.
 */
export function windPowerExpansion(game: Game, onshoreNewMax: TWh, offshoreNew: TWh, startYear: GameYear): Change[] {
  const delay = lawIsAccepted(game, "WindkraftVereinfachen") ? 0 : 5
  const onshoreNew: TWh = Math.min(onshoreNewMax, game.values.electricityWindOnshoreMaxNew)
  return [
    modify("electricityWind")
      .byValue(((onshoreNew + offshoreNew) * game.values.electricityWindEfficiency) / 100)
      .if(game.currentYear >= startYear + delay),
  ]
}
