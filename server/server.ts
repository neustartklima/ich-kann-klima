import express from "express"
import laws from "./laws/index"
import { startSimulation, getCurrentValues, acceptLaw, completeYear } from "./Simulator"

const port = process.env.PORT || 3000
const app = express()

function jsonResponse(func: (req: express.Request) => unknown) {
  return function (req: express.Request, res: express.Response): void {
    try {
      res.json(func(req))
    } catch (error) {
      res.send(error.httpStatus || 500).json({ error })
    }
  }
}

app.post("/simulations", jsonResponse(startSimulation))
app.get("/laws", jsonResponse(laws.getAll))
app.get(
  "/simulations/:simulationId",
  jsonResponse((req) => getCurrentValues(req.params.simulationId))
)
app.post(
  "/simulations/:simulationId/proposal/:lawId/",
  jsonResponse((req) => acceptLaw(req.params.simulationId, +req.params.lawId))
)
app.post(
  "/simulations/:simulationId/years",
  jsonResponse((req) => completeYear(req.params.simulationId))
)

app.listen(port, () => {
  console.log(`Listening on http://localhost/${port}`)
})
