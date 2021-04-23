import laws, { LawId } from "../server/laws/index"
import { initialValues, ModelValues } from "./Model"
import { getById, save, Simulation, SimulationId } from "./Simulation"

type ModelKey = keyof ModelValues

export function acceptLaw(simulationId: SimulationId, lawId: LawId): Simulation {
  const simulation = getById(simulationId)
  if (simulation.laws.some((lawRef) => lawRef.lawId === lawId)) {
    throw { httpStatus: 409, message: "Law is already in effect" }
  }
  simulation.laws.push({ lawId, effectiveSince: simulation.year })
  save(simulation)
  return simulation
}

function calculateValues(simulation: Simulation) {
  //  calcluate values for current year
  simulation.currentValues = initialValues()
  simulation.laws.forEach((lawRef) => {
    const law = laws.getById(lawRef.lawId)
    if (law) {
      (Object.keys(law.effectOn) as ModelKey[]).forEach((name) => {
        simulation.currentValues[name] += law.effectOn[name]! // eslint-disable-line @typescript-eslint/no-non-null-assertion
      })
    }
  })
}

export function advanceYear(simulationId: SimulationId): Simulation {
  const simulation = getById(simulationId)
  simulation.year++
  calculateValues(simulation)
  save(simulation)
  return simulation
}
