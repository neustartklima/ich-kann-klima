import { v4 as uuid } from "uuid"
import { LawId } from "../server/laws/index"

export type SimulationId = string

export type Simulation = {
  id: SimulationId
  laws: LawReference[],
  currentYear: number
}

type LawReference = {
  lawId: LawId,
  effectiveSince: number
}

export function startSimulation() {
  const simulation: Simulation = {
    id: uuid(),
    laws: [],
    currentYear: 2021,
  }

  return getCurrentValues(simulation.id)
}

export function getCurrentValues(simulationId: SimulationId) {
  return {
    simulationId,
    co2Emmissions: 805, // in mio t co2 equivalents in 2019, source https://www.bundesregierung.de/breg-de/aktuelles/bilanz-umweltbundesamt-1730880
    stateDebt: 1899,   // in 10^9€ in 2019, source https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands
    unemployment: 2695, // in thousands in 2020, source https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre
    gdp: 3332, // in 10^9€ in 2020, source http://www.statistikportal.de/de/bruttoinlandsprodukt-vgr
  }
}

export function acceptLaw(simulationId: SimulationId, lawId: LawId) {

}

export function completeYear(simulationId: SimulationId) {

}