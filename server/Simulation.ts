import fs from "fs"
import path from "path"
import { v4 as uuid } from "uuid"
import { LawId } from "./laws"
import { ModelValues, initialValues } from "./Model"

export type SimulationId = string

type LawReference = {
  lawId: LawId
  effectiveSince: number
}

export type Simulation = {
  simulationId: SimulationId
  year: number
  laws: LawReference[]
  currentValues: ModelValues
}

function getFileNameAndPath(id: SimulationId): string {
  return path.resolve(__dirname, "..", "data", id + ".json")
}

export function create(): Simulation {
  return save({
    simulationId: uuid(),
    year: 2021,
    currentValues: initialValues(),
    laws: [],
  })
}

export function getById(simulationId: SimulationId): Simulation {
  const fileName = getFileNameAndPath(simulationId)
  if (!fs.existsSync(fileName)) {
    throw { httpStatus: 404, message: "Cannot find this simulation"}
  }
  return JSON.parse(fs.readFileSync(fileName).toString())
}

export function save(simulation: Simulation): Simulation {
  fs.writeFileSync(getFileNameAndPath(simulation.simulationId), JSON.stringify(simulation, null, 2))
  return simulation
}
