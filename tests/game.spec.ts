import "should"
import API from "../src/model/api"
import repository from "../src/model/Repository"
import { Game, newGame, prepareNextStep } from "../src/game"
import Sinon from "sinon"
import FetchQueueFactory from "../src/model/FetchQueue"
import { Law, LawId } from "../src/laws"

function priority(game: Game): number {
  return 1
}

const allLaws: Law[] = [
  { id: "AbschaffungDerMineraloelsteuer", title: "law 1", description: "", effects: () => [], priority },
  { id: "AbstandsregelnFuerWindkraftAbschaffen", title: "law 2", description: "", effects: () => [], priority },
  { id: "AbstandsregelnFuerWindkraftLockern", title: "law 3", description: "", effects: () => [], priority },
  { id: "AbstandsregelnFuerWindkraftVerschaerfen", title: "law 4", description: "", effects: () => [], priority },
  { id: "AllesBleibtBeimAlten", title: "law 5", description: "", effects: () => [], priority },
  { id: "AusbauVonStrassen", title: "law 6", description: "", effects: () => [], priority },
  {
    id: "AusschreibungsverfahrenfuerWindkraftVerachtfachen",
    title: "law 7",
    description: "",
    effects: () => [],
    priority,
  },
]

function mockedFetch(info: RequestInfo, init?: RequestInit) {
  return Promise.resolve({
    ok: true,
    headers: { get: (which: string) => "application/json" },
    json: () => Promise.resolve({ ...JSON.parse(init?.body?.toString() || ""), id: "12345" }),
  } as Response)
}

async function mockedFetchFunc(method: string, path: string, data?: Record<string, unknown>): Promise<unknown> {
  return { ...JSON.parse(data?.toString() || ""), id: "12345" }
}

const storage = {
  setItem: Sinon.spy(),
  getItem: Sinon.spy(),
} as unknown as Storage

const fetchQueue = FetchQueueFactory(mockedFetchFunc)
const mockedApi = API(fetchQueue)
const { createGame } = repository({ api: mockedApi, storage })

describe("LawProposer", () => {
  let clock: Sinon.SinonFakeTimers

  before(() => {
    clock = Sinon.useFakeTimers()
  })

  after(() => {
    clock.restore()
  })

  describe("prepareNextStep()", () => {
    it("should fill up an empty array", async () => {
      const game = newGame(allLaws)
      prepareNextStep(game, allLaws, [])
      game.proposedLaws.length.should.equal(6)
      game.proposedLaws.should.deepEqual(allLaws.map((law) => law.id).slice(0, 6))
    })

    it("should add missing laws", async () => {
      const game = newGame(allLaws)
      prepareNextStep(game, allLaws, [])
      game.proposedLaws.shift()
      prepareNextStep(game, allLaws, [])
      game.proposedLaws.length.should.equal(6)
      const ids = allLaws.map((law) => law.id).slice(0, 6)
      ids.push(ids.shift() as LawId)
      game.proposedLaws.should.deepEqual(ids)
    })

    it("should only fill up if enough laws exist", async () => {
      const game = newGame(allLaws)
      prepareNextStep(game, allLaws.slice(0, 3), [])
      game.proposedLaws.length.should.equal(3)
    })

    it("should not fill up already proposed laws", async () => {
      const game = newGame(allLaws)
      prepareNextStep(game, allLaws.slice(0, 3), [])
      prepareNextStep(game, allLaws.slice(0, 3), [])
      game.proposedLaws.length.should.equal(3)
    })

    it("should remove an accepted law", async () => {
      const game = newGame(allLaws)
      prepareNextStep(game, allLaws, [])
      game.acceptedLaws.push({ lawId: allLaws[0].id, effectiveSince: game.currentYear + 1 })
      prepareNextStep(game, allLaws, [])
      game.proposedLaws.should.not.containEql(allLaws[0].id)
    })

    it("should fill up after remove", async () => {
      const game = newGame(allLaws)
      prepareNextStep(game, allLaws, [])
      game.acceptedLaws.push({ lawId: allLaws[0].id, effectiveSince: game.currentYear + 1 })
      prepareNextStep(game, allLaws, [])
      game.proposedLaws.length.should.equal(6)
    })
  })

  describe("getLaw()", () => {
    it("should return the law with the given id")

    it("should throw if law id is non-existent")
  })

  describe("getAcceptedLaw", () => {
    it("should return the corresponding law together with the year, it was accepted in")

    it("should throw if the referenced law does not exist")
  })
})
