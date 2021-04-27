import "mocha"
import "should"
import "should-sinon"
import Sinon from "sinon"
import { application } from "express"
import { setupServer } from "./server"

function createServer() {
  return {
    app: application,
    logAPICalls: Sinon.spy(),
    connectStaticPaths: Sinon.spy(),
    connectErrorHandlers: Sinon.spy(),
    listenOnPort: Sinon.spy(),
  }
}

describe("Server", () => {
  it("should setup logging", () => {
    const server = createServer()
    setupServer(server, 1234, Sinon.spy())
    server.logAPICalls.should.be.calledOnce()
  })

  it("should setup static routes for backend and frontend", () => {
    const server = createServer()
    setupServer(server, 1234, Sinon.spy())
    server.connectStaticPaths.should.be.calledOnce()
  })

  it("should connect the router", () => {
    const router = Sinon.spy()
    const server = createServer()
    setupServer(server, 1234, router)
    router.should.be.calledWith(server.app)
  })

  it("should setup error handling", () => {
    const server = createServer()
    setupServer(server, 1234, Sinon.spy())
    server.connectErrorHandlers.should.be.calledOnce()
  })

  it("should open a port", () => {
    const server = createServer()
    setupServer(server, 1234, Sinon.spy())
    server.listenOnPort.should.be.calledOnce()
  })
})
