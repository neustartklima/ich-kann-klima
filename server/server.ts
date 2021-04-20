import express from "express"
import laws from "./laws/index"
import * as Simulation from "./Simulation"
import * as Simulator from "./Simulator"

const port = process.env.PORT || 3000
const app = express()

function json(func: (req: express.Request) => unknown) {
  return function (req: express.Request, res: express.Response): void {
    try {
      res.json(func(req))
    } catch (error) {
      console.error(error)
      res.status(error.httpStatus || 500).json({ error })
    }
  }
}

const getAllLawProposals = json(laws.getAll)
const startNewSimulation = json(Simulation.create)
const getSimulation = json((req) => Simulation.getById(req.params.simId))
const acceptLawProposal = json((req) => Simulator.acceptLaw(req.params.simId, +req.params.lawId))
const advanceYear = json((req) => Simulator.advanceYear(req.params.simId))

app.get("/laws", getAllLawProposals)
app.post("/simulations", startNewSimulation)
app.get("/simulations/:simId", getSimulation)
app.post("/simulations/:simId/proposals/:lawId/", acceptLawProposal)
app.post("/simulations/:simId/years", advanceYear)

app.listen(port, () => {
  console.log(`Listening on http://localhost/${port}`)
})
