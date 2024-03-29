import sinon from "sinon"
import { Game, getGameDefinition, initGame, initialGame } from "../src/game"
import { API } from "../src/model/api"
import Repository from "../src/model/Repository"

describe("repository", function () {
  const storage = {
    setItem: sinon.spy(),
    getItem: sinon.spy(),
  } as unknown as Storage

  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

  it("should create a new game", function () {
    const createGame = sinon.stub().resolves({} as Game)
    const api = { createGame } as unknown as API
    const repository = Repository({ api, storage })
    repository.createGame(initGame())
    createGame.callCount.should.equal(1)
  })

  it("should assign an id for a new game even if the server could not be reached", function () {
    const logger = { warn: (msg: string) => {} }
    const promise = new Promise((resolve) => (logger.warn = resolve))
    const createGame = sinon.stub().rejects(undefined)
    const api = { createGame } as unknown as API
    const repository = Repository({ api, logger, storage })
    const iniGame = initGame()
    repository.createGame(iniGame)
    iniGame.id.should.match(uuidPattern)
    promise.should.be.resolvedWith("Cannot save new game - trying again later")
  })

  it("should save the game definition", function () {
    const game = initGame()
    const saveGame = sinon.stub().resolves(game)
    const api = { saveGame } as unknown as API
    const repository = Repository({ api, storage })
    repository.saveGame(game)
    saveGame.callCount.should.equal(1)
    saveGame.firstCall.args[0].should.deepEqual(getGameDefinition(game))
  })

  it("should load a previously locally saved game without accessing the server", async function () {
    const game = initGame()
    const getItem = sinon.stub()
    const storage = { getItem } as unknown as Storage
    getItem.withArgs("game").returns(JSON.stringify({ ...game, id: "0815" }))
    const loadGame = sinon.spy()
    const api = { loadGame } as unknown as API
    const repository = Repository({ api, storage })
    const result = await repository.loadGame("0815")
    result.should.deepEqual({ ...game, id: "0815" })
    loadGame.callCount.should.equal(0)
  })

  it("should load a previously remotely, but not locally saved game", async function () {
    const game = initGame()
    const getItem = sinon.stub()
    const storage = { getItem } as unknown as Storage
    getItem.withArgs("0815").returns(null)
    const loadGame = sinon.stub()
    loadGame.withArgs("0815").resolves({ ...game, id: "0815" })
    const api = { loadGame } as unknown as API
    const repository = Repository({ api, storage })
    const result = await repository.loadGame("0815")
    result.should.deepEqual({ ...game, id: "0815" })
    loadGame.callCount.should.equal(1)
    loadGame.firstCall.args.should.deepEqual(["0815"])
  })

  it("should store a game in localstorage if server cannot be reached", function () {
    const logger = { warn: (msg: string) => {} }
    const promise = new Promise((resolve) => (logger.warn = resolve))
    const game = initGame()
    const saveGame = sinon.stub()
    saveGame.rejects()
    const api = { saveGame } as unknown as API
    const repository = Repository({ api, storage, logger })
    repository.saveGame(game)
    saveGame.callCount.should.equal(1)
    saveGame.firstCall.args[0].should.deepEqual(getGameDefinition(game))
    promise.should.be.resolvedWith(
      "save on server failed - at least the game is saved in localStorage, so you can save it maybe next time"
    )
  })
})
