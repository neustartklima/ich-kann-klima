import { BaseParams, AcceptedLaw, Game } from "./types"
import "should"
import { defaultValues } from "./repository"

export function calculateNextYear(currentValues: BaseParams, laws: AcceptedLaw[], year: number): BaseParams {
  const values = { ...currentValues }
  laws.forEach((law) => {
    const effects = law.effects(currentValues, law.effectiveSince, year)
    const effectedProperties = Object.keys(effects) as Array<keyof BaseParams>
    effectedProperties.forEach((property) => {
      values[property] += effects[property] || 0
    })
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
  // the year's budget should be only a small part of the remaining total budget
  const yearBudget = game.values.co2budget * defaultValues.co2emissions / defaultValues.co2budget
  // the ratio of actual emissions to the yearly budget: < 1 is bad, > 1 is good
  const ratio = yearBudget / game.values.co2emissions
  return clampToPercent(ratio * 50)
}

export function financeRating(game: Game): number {
  const ratio = game.values.stateDebt / defaultValues.stateDebt
  return clampToPercent(100 - ratio * 50)
}
