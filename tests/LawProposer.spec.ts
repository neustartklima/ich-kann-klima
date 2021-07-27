import "should"
import API from "../src/model/api"
import repository from "../src/model/Repository"
import { fillUpLawProposals } from "../src/LawProposer"
import { Game } from "../src/game"
import Sinon from "sinon"
import FetchQueueFactory from "../src/model/FetchQueue"
import { Law } from "../src/laws"

function priority(game: Game): number {
  return 1
}

const allLaws: Law[] = [
  { id: "law1", title: "law 1", description: "", effects: () => [], priority },
  { id: "law2", title: "law 2", description: "", effects: () => [], priority },
  { id: "law3", title: "law 3", description: "", effects: () => [], priority },
  { id: "law4", title: "law 4", description: "", effects: () => [], priority },
  { id: "law5", title: "law 5", description: "", effects: () => [], priority },
  { id: "law6", title: "law 6", description: "", effects: () => [], priority },
  { id: "law7", title: "law 7", description: "", effects: () => [], priority },
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

const storage = ({
  setItem: Sinon.spy(),
  getItem: Sinon.spy(),
} as unknown) as Storage

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

  describe("fillUpLawProposals()", () => {
    it("should fill up an empty array", async () => {
      const game = await createGame(allLaws)
      game.proposedLaws.length.should.equal(6)
      game.proposedLaws.should.deepEqual(allLaws.map((law) => law.id).slice(0, 6))
    })

    it("should add missing laws", async () => {
      const game = await createGame(allLaws)
      game.proposedLaws.shift()
      fillUpLawProposals(game, allLaws)
      game.proposedLaws.length.should.equal(6)
      const ids = allLaws.map((law) => law.id).slice(0, 6)
      ids.push(ids.shift() as string)
      game.proposedLaws.should.deepEqual(ids)
    })

    it("should only fill up if enough laws exist", async () => {
      const game = await createGame([])
      fillUpLawProposals(game, allLaws.slice(0, 3))
      game.proposedLaws.length.should.equal(3)
    })

    it("should not fill up already proposed laws", async () => {
      const game = await createGame([])
      fillUpLawProposals(game, allLaws.slice(0, 3))
      fillUpLawProposals(game, allLaws.slice(0, 3))
      game.proposedLaws.length.should.equal(3)
    })

    it("should remove an accepted law", async () => {
      const game = await createGame(allLaws)
      fillUpLawProposals(game, allLaws)
      game.acceptedLaws.push({ lawId: allLaws[0].id, effectiveSince: game.currentYear + 1 })
      fillUpLawProposals(game, allLaws)
      game.proposedLaws.should.not.containEql(allLaws[0].id)
    })

    it("should fill up after remove", async () => {
      const game = await createGame(allLaws)
      fillUpLawProposals(game, allLaws)
      game.acceptedLaws.push({ lawId: allLaws[0].id, effectiveSince: game.currentYear + 1 })
      fillUpLawProposals(game, allLaws)
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
