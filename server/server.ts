import express from "express"
import lawController from "./laws"
import SimulationController from "./SimulationController"
import APIServer from "./lib/APIServer"
import { connectRoutes } from "./router"
import Model from "./Model"

const port = +(process.env.PORT || 3000)
const app = express()
const simulationController = SimulationController(Model)

const server = APIServer(app)
server.logAPICalls()
server.connectStaticPaths()
connectRoutes(app, lawController, simulationController)
server.connectErrorHandlers()
server.listenOnPort(port)
