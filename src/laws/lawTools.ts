import { allLaws, LawId, LawReference } from "."
import { Game, GameYear } from "../game"
import { linearFunction, RefPoint } from "../lib/utils"
import { BaseParams, Change, modify, transfer, WritableParamKey } from "../params"
import { paramDefinitions } from "../params/Params"
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
 * Linear function starting at a point suitable for determining popularity changes.
 *
 * In contrast to {@link linearFunction} values beyond `basePoint` will not
 * use linear interpolation, but return `basePoint.result`. Beyond `refPoint`
 * the linear function continues as usual.
 *
 * Example:
 *
 * `linearPopChange({ value: 50, result: 0 }, { value: 0, result: -1 })` is a function
 * which will
 * - return 0 for 50 and greater,
 * - return -1 for 0, and
 * - otherwise will return a linear interpolation.
 *
 * E.g. 25 will return -0.5 and -50 will return .2.
 *
 * @param basePoint First value and result.
 * @param refPoint Second value and result.
 * @return Linear function connecting the two.
 *
 */
export function linearPopChange(basePoint: RefPoint, refPoint: RefPoint) {
  const dir = refPoint.value - basePoint.value
  const sign = dir / Math.abs(dir)
  const comp = sign * basePoint.value
  return (value: number) => {
    if (dir === 0 || sign * value <= comp) return basePoint.result
    return linearFunction(basePoint, refPoint)(value)
  }
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
  return (v.electricityWind / v.electricityDemand) * 100
}

/** Amount of electrical power produced with renewable sources relative to total demand.
 *
 * @param game The game.
 * @returns Percentage of electrical power.
 */
export function renewablePercentage(game: Game): Percent {
  const electricityRenewable =
    game.values.electricityWind +
    game.values.electricitySolar +
    game.values.electricityWater +
    game.values.electricityBiomass
  return (electricityRenewable / game.values.electricityDemand) * 100
}

export function maxDueToGridQuality(game: Game, paramKey: WritableParamKey): TWh {
  const values: BaseParams = game.values
  const baseVal = paramDefinitions[paramKey].initialValue
  const quality = values.electricityGridQuality
  const maxVal = values.electricityDemand

  return linearFunction({ value: 50, result: baseVal }, { value: 100, result: maxVal })(quality)
}

/** Transfer electricity from gas and coal to another param.
 *
 * @param  {Game} game The game.
 * @param  {WritableParamKey} toParam Param key to transfer the amount to.
 * @param  {TWh} amount Amount to transfer.
 * @returns The changes to return by the law.
 */
export function powerTransfer(game: Game, toParam: WritableParamKey, amount: TWh): Change[] {
  const values: BaseParams = game.values

  const coalGas = values.electricityCoal + values.electricityGas
  if (coalGas <= 0) return []

  const hardCoalFraction = values.electricityHardCoal / coalGas
  const brownCoalFraction = values.electricityBrownCoal / coalGas
  const gasFraction = values.electricityGas / coalGas
  return [
    transfer(toParam, "electricityHardCoal")
      .if(hardCoalFraction > 0)
      .byValue(hardCoalFraction * amount),
    transfer(toParam, "electricityBrownCoal")
      .if(brownCoalFraction > 0)
      .byValue(brownCoalFraction * amount),
    modify(toParam)
      .if(gasFraction > 0)
      .byValue(gasFraction * amount),
  ]
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
  if (game.currentYear < startYear + delay) return []

  const values: BaseParams = game.values

  const onshoreNew: TWh = Math.min(onshoreNewMax, values.electricityWindOnshoreMaxNew)
  const maxIncrease = ((onshoreNew + offshoreNew) * values.electricityWindEfficiency) / 100
  const old = values.electricityWind
  const maxNew = Math.min(old + maxIncrease, maxDueToGridQuality(game, "electricityWind")) - old

  return powerTransfer(game, "electricityWind", maxNew)
}

/** Changes due to change in CO2 pricing.
 *
 * @param game The game.
 * @param price Price for one ton CO2e [EUR].
 * @param relReduction Relative reduction of fossile energy sources.
 * @param popChangeFunc: A function applied to two percentage of renewable
 * sources (car, electricity). The result is added/deduced to/from the popularity.
 * @returns The changes to return by the law.
 */
export function co2PricingEffects(
  game: Game,
  price: number,
  relReduction: Percent,
  popChangeFunc: (value: number) => number
): Change[] {
  const electricityPopChange = popChangeFunc(renewablePercentage(game))

  const carPopChange = popChangeFunc(game.values.carRenewablePercentage)

  return [
    modify("stateDebt").byValue(((25 - price) / 1000) * game.values.co2emissions),

    modify("popularity").byValue(electricityPopChange + carPopChange),

    modify("co2emissionsIndustry").byPercent(relReduction),
    modify("co2emissionsAgriculture").byPercent(relReduction),
    modify("co2emissionsOthers").byPercent(relReduction),

    transfer("electricityBrownCoal", "electricityWind").byPercent(0.7 * relReduction),
    transfer("electricityHardCoal", "electricityWind").byPercent(0.7 * relReduction),
    transfer("electricityBrownCoal", "electricitySolar").byPercent(0.3 * relReduction),
    transfer("electricityHardCoal", "electricitySolar").byPercent(0.3 * relReduction),

    transfer("buildingsSourceOil", "buildingsSourceBio").byPercent(relReduction), // TODO #78: What about other regernative sources?

    transfer("carUsage", "publicNationalUsage").byPercent(0.5 * relReduction),
    transfer("carUsage", "publicLocalUsage").byPercent(0.5 * relReduction),
  ]
}
