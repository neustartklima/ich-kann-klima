import { Game } from "./game"
import { AcceptedLaw, getParamsOfLaws, ParamsOfLaws } from "./laws"
import { applyEffects, BaseParams, copyValues, createBaseValues, defaultValues } from "./params"

export function calculateNextYear(game: Game, laws: AcceptedLaw[], year: number): BaseParams {
  return calculateNextYearWithLaws(game, laws, year).values
}

export function calculateNextYearWithLaws(
  game: Game,
  laws: AcceptedLaw[],
  year: number
): { values: BaseParams; effectsOfLaws: ParamsOfLaws } {
  const values = createBaseValues(game.values)

  const orderedLaws = laws
    .sort((a, b) => {
      if (a.treatAfterLabels?.some((lbl) => b.labels?.includes(lbl))) return 1
      if (b.treatAfterLabels?.some((lbl) => a.labels?.includes(lbl))) return -1
      return 0
    })
    .filter((law) => law.effectiveSince <= year)

  const effectsOfLaws = getParamsOfLaws(
    orderedLaws,
    (law) => {
      const prevValues: BaseParams = copyValues(values)
      const effects = law.effects({ ...game, values }, law.effectiveSince, year)
      applyEffects({ dispatch: () => undefined, values }, effects)
      return prevValues
    },
    (law, prevValues, paramKey) => values[paramKey] - prevValues[paramKey]
  )

  // re-calculate remaining CO2 budget
  values.co2budget -= values.co2emissions

  return { values, effectsOfLaws }
}

function clampToPercent(value: number) {
  return Math.max(0, Math.min(100, value))
}

export function co2Rating(game: Game): number {
  if (game.values.co2emissions === 0) {
    return 100 // nothing is better than no emissions!
  }
  // the year's budget should be only a part of the remaining total budget
  const yearBudget = (game.values.co2budget * createBaseValues(defaultValues).co2emissions) / defaultValues.co2budget
  // the ratio of actual emissions to the yearly budget: < 1 is bad, > 1 is good
  const ratio = yearBudget / game.values.co2emissions
  return clampToPercent(ratio * 50)
}

export function co2BudgetRating(game: Game): number {
  const ratio = game.values.co2budget / defaultValues.co2budget
  return clampToPercent(ratio * 100)
}

export function financeRating(game: Game): number {
  const base = defaultValues.stateDebt
  const ratio = (game.values.stateDebt - base) / base
  if (ratio > 0) {
    // 20% additional debt will lead to 0%.
    return clampToPercent(50 - (ratio / 0.2) * 50)
  } else {
    // no debt at all will lead to 100%.
    return clampToPercent(50 - ratio * 50)
  }
}

export function popularityRating(game: Game): number {
  return clampToPercent(game.values.popularity)
}
