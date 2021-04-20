import APIServer from "./lib/APIServer"
import laws from "./laws/index"
import { create, getById } from "./Simulation"
import { acceptLaw, advanceYear } from "./Simulator"

APIServer(+process.env.PORT || 3000, (server) => {
  server.get("/laws", () => laws.getAll())
  server.post("/simulations", () => create())
  server.get("/simulations/:simId", (req) => getById(req.params.simId))
  server.post("/simulations/:simId/proposals/:lawId/", (req) => acceptLaw(req.params.simId, +req.params.lawId))
  server.post("/simulations/:simId/years", (req) => advanceYear(req.params.simId))  
})
