import express from "express-serve-static-core"
import { LawController } from "./laws/index"
import { json } from "./lib/APIServer"
import { SimulationController } from "./SimulationController"

function router(router: express.Router, lawController: LawController, simulationController: SimulationController): void {
  function getAllLaws() {
    return json(() => lawController.getAll())
  }

  function createSimulation() {
    return json(() => simulationController.create())
  }

  function getSimulation() {
    return json((req) => simulationController.getById(req.params.simId))
  }

  function acceptLaw() {
    return json((req) => simulationController.acceptLaw(req.params.simId, +req.params.lawId))
  }

  function advanceYear() {
    return json((req) => simulationController.advanceYear(req.params.simId))
  }

  router.get("/laws", getAllLaws())
  router.post("/simulations", createSimulation())
  router.get("/simulations/:simId", getSimulation())
  router.post("/simulations/:simId/proposals/:lawId", acceptLaw())
  router.post("/simulations/:simId/years", advanceYear())
}

export default router
export type Router = typeof router
