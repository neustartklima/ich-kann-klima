import { BaseParams, AcceptedLaw, Game } from "./types"
import "should"

const remainingBudget = {
  2021: 5000,
  2022: 4300,
  2023: 3700,
  2024: 3200,
  2025: 2800,
  2026: 2600,
  2027: 2500,
}

export const defaultValues = {
  co2budget: 5000,
  stateDebt: 1899, // in 2019, source https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands
  popularity: 50, // 50% of all people accept you as your chancellor
  
  // hidden
  co2emissions: 805, // in 2019, source https://www.bundesregierung.de/breg-de/aktuelles/bilanz-umweltbundesamt-1730880
  unemployment: 2695, // in 2020, source https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre
  gdp: 3332, // in 2020, source http://www.statistikportal.de/de/bruttoinlandsprodukt-vgr
  electricityDemand: 2300, // TODO source?
}

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

export function co2Rating(game: Game): number {
  if (game.values.co2emissions === 0) {
    return 100 // nothing is better than no emissions!
  }
  // the year's budget should be only a small part of the remaining total budget
  const yearBudget = game.values.co2budget * 0.15
  // the ratio of actual emissions to the yearly budget: < 1 is bad, > 1 is good
  const ratio = yearBudget / game.values.co2emissions
  return Math.max(0, Math.min(100, ratio * 50))
}
