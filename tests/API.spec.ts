import "should"
import Sinon from "sinon"
import APIFactory, { API } from "../src/model/api"
import { Game, initGame } from "../src/game"

describe("API", () => {
  const mockQuque = () => ({ add: Sinon.stub(), remove: Sinon.stub(), callsPending: Sinon.stub() })
  let game: Game
  let fetchQueue: ReturnType<typeof mockQuque>
  let api: API

  beforeEach(() => {
    game = initGame()
    fetchQueue = mockQuque()
    api = APIFactory(fetchQueue)
  })

  describe("createGame", () => {
    it("should add a call to the fetch queue", async () => {
      await api.createGame(game)
      fetchQueue.add.calledOnceWith("post", "/games", game).should.be.true()
      fetchQueue.remove.getCalls().length.should.equal(0)
    })

    it("should resolve a new game", () => {
      fetchQueue.add.withArgs("post", "/games", game).resolves(game)
      api.createGame(game).should.be.resolvedWith(game)
    })
  })

  describe("loadGame", () => {
    it("should add a call to the fetch queue", async () => {
      await api.loadGame("4711")
      fetchQueue.add.calledOnceWith("get", "/games/4711", undefined, 0).should.be.true()
      fetchQueue.remove.getCalls().length.should.equal(0)
    })

    it("should resolve the loaded game", async () => {
      fetchQueue.add.withArgs("get", "/games/" + game.id).resolves(game)
      const result = await api.loadGame(game.id)
      result.should.deepEqual(game)
    })

    it("should reject if the game does not exist or an error occurs", async () => {
      fetchQueue.add.withArgs("get", "/games/4711").rejects()
      api.loadGame("4711").should.be.rejected()
    })
  })

  describe("saveGame", () => {
    it("should add a call to the fetch queue", async () => {
      await api.saveGame(game)
      fetchQueue.add.calledOnceWith("put", "/games/" + game.id, game).should.be.true()
    })

    it("should remove existing save entries from the fetch queue", async () => {
      await api.saveGame(game)
      fetchQueue.remove.calledOnceWith("put", "/games/" + game.id).should.be.true()
    })

    it("should resolve the game", async () => {
      fetchQueue.add.withArgs("put", "/games/" + game.id, game).resolves(game)
      const result = await api.saveGame(game)
      result.should.deepEqual(game)
    })
  })

  describe("decisionMade", () => {
    it("should add a call to the fetch queue", async () => {
      await api.decisionMade("4711", "NahverkehrAusbauen", true)
      fetchQueue.add
        .calledOnceWith("post", "/games/4711/decisions/NahverkehrAusbauen", { accepted: true })
        .should.be.true()
      fetchQueue.remove.getCalls().length.should.equal(0)
    })
  })

  describe("eventOccurred", () => {
    it("should add a call to the fetch queue", async () => {
      await api.eventOccurred("4712", "0816")
      fetchQueue.add.calledOnceWith("post", "/games/4712/events/0816").should.be.true()
      fetchQueue.remove.getCalls().length.should.equal(0)
    })
  })
})
