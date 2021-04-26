import fs from "fs"
import path from "path"
import { v4 as uuid } from "uuid"
import { Simulation, SimulationId } from "./SimulationController"

type MioTons = number
type MrdEuro = number
type TsdPeople = number
type GWh = number

export type ModelValues = {
  co2Emmissions: MioTons
  stateDebt: MrdEuro
  unemployment: TsdPeople
  gdp: MrdEuro

  electrictyDemandTotal: GWh
}

export function initialValues(): ModelValues {
  return {
    co2Emmissions: 805, // in 2019, source https://www.bundesregierung.de/breg-de/aktuelles/bilanz-umweltbundesamt-1730880
    stateDebt: 1899, // in 2019, source https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands
    unemployment: 2695, // in 2020, source https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre
    gdp: 3332, // in 2020, source http://www.statistikportal.de/de/bruttoinlandsprodukt-vgr

    electrictyDemandTotal: 2300 // TODO source?
  }
}

function getFileNameAndPath(id: SimulationId): string {
  return path.resolve(__dirname, "..", "data", id + ".json")
}

export const SimulationModel = {
  initialValues(): Simulation {
    return {
      simulationId: uuid(),
      year: 2021,
      currentValues: initialValues(),
      laws: [],
    }
  },

  getById(simulationId: SimulationId): Simulation {
    const fileName = getFileNameAndPath(simulationId)
    if (!fs.existsSync(fileName)) {
      throw { message: "simulation not found" }
    }
    return JSON.parse(fs.readFileSync(fileName).toString())
  },

  save(simulation: Simulation): Simulation {
    fs.writeFileSync(getFileNameAndPath(simulation.simulationId), JSON.stringify(simulation, null, 2))
    return simulation
  },
}

const Model = {
  SimulationModel,
}

export default Model
export type Model = typeof Model
