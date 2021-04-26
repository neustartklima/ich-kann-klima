import "mocha"
import "should"
import sinon from "sinon"
import express from "express"
import supertest from "supertest"
import { connectRoutes } from "./router"
import { LawId, LawController } from "./laws"
import { Simulation, SimulationController, SimulationId } from "./SimulationController"
import APIServer from "./lib/APIServer"

const law = { id: 1, title: "test-law", effectOn: {} }
const lawsController: LawController = {
  getAll: () => [law],
  getById: (lawId: LawId) => (lawId === 1 ? law : undefined),
}

const testSimulation = { simulationId: "12345", year: 2021, laws: [], currentValues: {} } as Simulation

function getSimulationController(): SimulationController {
  return {
    create: () => testSimulation,
    getById(simulationId: SimulationId) {
      if (simulationId === "12345") {
        return { ...testSimulation, simulationId }
      } else {
        throw { httpStatus: 404 }
      }
    },
    save: sinon.spy(),
    acceptLaw: (simulationId: SimulationId, lawId: LawId) => ({
      ...testSimulation,
      simulationId,
      laws: [{ lawId, effectiveSince: testSimulation.year }],
    }),
    advanceYear: (simulationId: SimulationId) => ({ ...testSimulation, simulationId, year: testSimulation.year + 1 }),
  }
}

const logger = {
  debug: () => ({}),
  info: () => ({}),
  warn: () => ({}),
  error: () => ({}),
}

describe("Server", () => {
  let request: supertest.SuperTest<supertest.Test>

  beforeEach(() => {
    const app = express()
    connectRoutes(app, lawsController, getSimulationController())
    APIServer(app, logger).connectErrorHandlers()
    request = supertest(app)
  })

  describe("GET /laws", () => {
    it("should get all proposed laws", async () => {
      const response = await request.get("/laws")
      response.should.be.ok()
      response.body.should.deepEqual([law])
    })
  })

  describe("POST /simulations", () => {
    it("should create a new simulation", async () => {
      const response = await request.post("/simulations")
      response.should.be.ok()
      response.body.should.deepEqual(testSimulation)
    })
  })

  describe("GET /simulation/:simId", () => {
    it("should return data from the given simulation", async () => {
      const response = await request.get("/simulations/12345")
      response.ok.should.be.true()
      response.body.should.deepEqual(testSimulation)
    })
  
    it("should report non-existing simulations", async () => {
      const response = await request.get("/simulations/1")
      response.ok.should.be.false()
      response.status.should.equal(404)
      response.body.error.httpStatus.should.equal(404)
    })
  })

  describe("POST //simulations/:simId/proposals/:lawId", () => {
    it("should accept a law proposal", async () => {
      const response = await request.post("/simulations/12345/proposals/42")
      response.ok.should.be.true()
      response.body.should.deepEqual({ ...testSimulation, laws: [{ lawId: 42, effectiveSince: 2021 }] })
    })

    it("should report non-existing laws")
  })

  describe("POST /simulations/:simId/years", () => {
    it("should advance the year", async () => {
      const response = await request.post("/simulations/12345/years")
      response.ok.should.be.true()
      response.body.should.deepEqual({ ...testSimulation, year: 2022 })
    })
  })
})
