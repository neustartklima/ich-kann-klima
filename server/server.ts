import express from "express"
import lawController from "./laws"
import SimulationController from "./SimulationController"
import createAPIServer, { APIServer } from "./lib/APIServer"
import router, { Router } from "./router"
import Model from "./Model"

export function setupServer(server: APIServer, port: number, router: Router): void {
  server.logAPICalls()
  server.connectStaticPaths()
  router(server.app, lawController, SimulationController(Model))
  server.connectErrorHandlers()
  server.listenOnPort(port)
}

setupServer(createAPIServer(express()), +(process.env.PORT || 3001), router)
