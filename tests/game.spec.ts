import "should"
import should from "should"
import Sinon from "sinon"
import { probabilityThatEventOccurs } from "../src/constants"
import { Event } from "../src/events"
import { newGame, prepareNextStep } from "../src/game"
import { Law, LawId } from "../src/laws"
import { defaultEffort } from "../src/laws/LawsTypes"
import { shuffleNumbers } from "../src/lib/random"

function priority(): number {
  return 1
}

const defaultLaw = { description: "", effort: defaultEffort, effects: () => [], priority }

const allLaws: Law[] = [
  { ...defaultLaw, id: "Test", title: "law 1" },
  { ...defaultLaw, id: "AbstandsregelnFuerWindkraftAbschaffen", title: "law 2" },
  { ...defaultLaw, id: "AbstandsregelnFuerWindkraftLockern", title: "law 3" },
  { ...defaultLaw, id: "AbstandsregelnFuerWindkraftVerschaerfen", title: "law 4" },
  { ...defaultLaw, id: "AllesBleibtBeimAlten", title: "law 5" },
  { ...defaultLaw, id: "AusschreibungsverfahrenfuerWindkraftVerdoppeln", title: "law 6" },
  { ...defaultLaw, id: "AusschreibungsverfahrenfuerWindkraftVerachtfachen", title: "law 7" },
]

describe("game", () => {
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

    it("should return event with highest probability > 1", () => {
      const game = newGame(allLaws)
      const events: Event[] = [
        { id: "NewYear", title: "e1", description: "", apply: () => [], probability: () => 2 },
        { id: "Hitzehoelle", title: "e2", description: "", apply: () => [], probability: () => 3 },
        { id: "SocialMedia", title: "e3", description: "", apply: () => [], probability: () => 0.9 },
      ]
      const ret = prepareNextStep(game, allLaws, events)
      should(ret).not.be.undefined()
      ret?.id.should.equal("Hitzehoelle")
    })

    it("should never return event with probability <=0", () => {
      const game = newGame(allLaws)
      const events: Event[] = [
        { id: "NewYear", title: "e1", description: "", apply: () => [], probability: () => 0 },
        { id: "Hitzehoelle", title: "e2", description: "", apply: () => [], probability: () => -0.01 },
        { id: "SocialMedia", title: "e3", description: "", apply: () => [], probability: () => -100 },
      ]
      for (var num = 0; num <= 20; num++) {
        const ret = prepareNextStep(game, allLaws, events)
        should(ret).be.undefined()
      }
    })

    it("should return events with probability between 0 and 1 with according probability", () => {
      const game = newGame(allLaws)
      type CEvent = Event & { count: number }
      const events: CEvent[] = [
        { id: "NewYear", title: "e1", description: "", apply: () => [], probability: () => 0.1, count: 0 },
        { id: "Hitzehoelle", title: "e2", description: "", apply: () => [], probability: () => 0.9, count: 0 },
        { id: "SocialMedia", title: "e3", description: "", apply: () => [], probability: () => 0.5, count: 0 },
      ]
      const probSum = events.map((e) => e.probability(game, e)).reduce((a, b) => a + b)

      const NUM_CALLS = 100
      const precision = 1

      const counts = events.reduce((counts: Record<string, number>, event) => {
        counts[event.id] = 0
        return counts
      }, {})
      for (let num of shuffleNumbers(NUM_CALLS).values()) {
        const res = prepareNextStep(game, allLaws, events, () => num as number)
        if (res != undefined) counts[res.id]++
      }
      const eventCount = Object.values(counts).reduce((a, b) => a + b)
      eventCount.should.be.approximately(NUM_CALLS * probabilityThatEventOccurs, precision)

      events.forEach((e) =>
        counts[e.id].should.be.approximately((eventCount * e.probability(game, e)) / probSum, precision)
      )
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
