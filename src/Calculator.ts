import { BaseParams, createBaseValues, defaultValues, applyEffects } from "./params"
import { Game } from "./game"
import { AcceptedLaw } from "./laws"

export function calculateNextYear(game: Game, laws: AcceptedLaw[], year: number): BaseParams {
  const values = createBaseValues(game.values)
  laws
    .sort((a, b) => {
      if (a.treatAfterLabels?.some((lbl) => b.labels?.includes(lbl))) return 1
      if (b.treatAfterLabels?.some((lbl) => a.labels?.includes(lbl))) return -1
      return 0
    })
    .forEach((law) => {
      const effects = law.effects({...game, values}, law.effectiveSince, year)
      applyEffects(values, effects)
    })

  // re-calculate remaining CO2 budget
  values.co2budget -= values.co2emissions

  return values
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

export function financeRating(game: Game): number {
  const ratio = game.values.stateDebt / defaultValues.stateDebt
  return clampToPercent(100 - ratio * 50)
}
