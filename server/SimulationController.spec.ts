import "mocha"
import "should-sinon"
import Sinon from "sinon"
import should from "should"
import SimulationController from "./SimulationController"

describe("SimulationController", () => {
  let model

  beforeEach(() => {
    model = {
      SimulationModel: {
        initialValues: Sinon.stub(),
        getById: Sinon.stub(),
        save: Sinon.stub(),
      },
    }
  
    model.SimulationModel.initialValues.returns({ name: "__initial__" })
    model.SimulationModel.getById.withArgs("4711").returns({ year: 2022, laws: [] })
    model.SimulationModel.getById.withArgs("4712").throws({ message: "not found" })
    model.SimulationModel.getById.withArgs("4713").returns({ year: 2023, laws: [{ lawId: 7, effectiveSince: "2023" }] })
    model.SimulationModel.save.returnsArg(0)
  })

  it("create should save initial values", () => {
    const controller = SimulationController(model)
    controller.create()
    model.SimulationModel.initialValues.should.be.called()
    model.SimulationModel.save.should.be.calledWith({ name: "__initial__" })
  })

  it("should load an existing simulation", () => {
    const controller = SimulationController(model)
    controller.getById("4711").should.deepEqual({ year: 2022, laws: [] })
  })

  it("should throw an error if the user tries to load an non-existing simulation", () => {
    const controller = SimulationController(model)
    should(() => controller.getById("4712")).throw({ httpStatus: 404, message: "not found" })
  })

  it("should apply a law to a simulation", () => {
    const controller = SimulationController(model)
    const simulation = controller.acceptLaw("4711", 4)
    simulation.laws.length.should.equal(1)
    const ref = simulation.laws[0].should.deepEqual({ lawId: 4, effectiveSince: 2022 })
  })

  it("should not apply a low which is already accepted", () => {
    const controller = SimulationController(model)
    should(() => controller.acceptLaw("4713", 7)).throw({ httpStatus: 409, message: "Law is already in effect" })
  })

  it("should advance the year of a simulation", () => {
    const controller = SimulationController(model)
    controller.advanceYear("4711").year.should.equal(2023)
  })

  // Temporarily disabled until laws can be injected into the simulation
  it.skip("should apply laws when advancing the year", () => {
    const controller = SimulationController(model)
    controller.advanceYear("4711").currentValues.should.deepEqual({
      co2Emmissions: 805,
      stateDebt: 1899,
      unemployment: 2695,
      gdp: 3332,
      electrictyDemandTotal: 2300    
    })
  })
})
