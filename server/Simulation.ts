import fs from "fs"
import path from "path"
import { v4 as uuid } from "uuid"
import laws, { LawId } from "./laws"
import { ModelValues, initialValues } from "./Model"

export type SimulationId = string

type LawReference = {
  lawId: LawId
  effectiveSince: number
}

type ModelKey = keyof ModelValues

export type Simulation = {
  simulationId: SimulationId
  year: number
  laws: LawReference[]
  currentValues: ModelValues
}

export interface SimulationController {
  create(): Simulation
  getById(simulationId: SimulationId): Simulation
  save(simulation: Simulation): Simulation
  acceptLaw(simulationId: SimulationId, lawId: LawId): Simulation
  advanceYear(simulationId: SimulationId): Simulation
}

function getFileNameAndPath(id: SimulationId): string {
  return path.resolve(__dirname, "..", "data", id + ".json")
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

export default function (): SimulationController {
  return {
    create() {
      return this.save({
        simulationId: uuid(),
        year: 2021,
        currentValues: initialValues(),
        laws: [],
      })
    },

    getById(simulationId: SimulationId) {
      const fileName = getFileNameAndPath(simulationId)
      if (!fs.existsSync(fileName)) {
        throw { httpStatus: 404 }
      }
      return JSON.parse(fs.readFileSync(fileName).toString())
    },

    save(simulation: Simulation) {
      fs.writeFileSync(getFileNameAndPath(simulation.simulationId), JSON.stringify(simulation, null, 2))
      return simulation
    },

    acceptLaw(simulationId: SimulationId, lawId: LawId) {
      const simulation = this.getById(simulationId)
      if (simulation.laws.some((lawRef) => lawRef.lawId === lawId)) {
        throw { httpStatus: 409, message: "Law is already in effect" }
      }
      simulation.laws.push({ lawId, effectiveSince: simulation.year })
      this.save(simulation)
      return simulation
    },

    advanceYear(simulationId: SimulationId): Simulation {
      const simulation = this.getById(simulationId)
      simulation.year++
      calculateValues(simulation)
      this.save(simulation)
      return simulation
    },
  }
}
