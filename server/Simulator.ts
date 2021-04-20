import laws, { LawId } from "../server/laws/index"
import { initialValues } from "./Model"
import { getById, save, Simulation, SimulationId } from "./Simulation"

export function acceptLaw(simulationId: SimulationId, lawId: LawId) {
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
    Object.keys(law.effectOn).forEach((name) => {
      simulation.currentValues[name] += law.effectOn[name]
    })
  })
}

export function advanceYear(simulationId: SimulationId) {
  const simulation = getById(simulationId)
  simulation.year++
  calculateValues(simulation)
  save(simulation)
  return simulation
}
