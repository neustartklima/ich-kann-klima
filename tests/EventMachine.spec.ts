import should from "should"
import { getAnEvent } from "../src/EventMachine"
import { Event, Game } from "../src/types"
import { createBaseValues, defaultValues } from "../src/repository"
import { store } from "../src/store"

const game: Game = {
  id: "1",
  values: createBaseValues(defaultValues),
  acceptedLaws: [],
  proposedLaws: [],
  rejectedLaws: [],
  currentYear: 2021,
}

function createEvent(title: string, probability: number): Event {
  return {
    title,
    description: "",
    probability: () => probability,
    apply: () => undefined,
  }
}

describe("EventMachine.getOne()", () => {
  it("should return the most probable event", () => {
    const allEvents = [createEvent("t1", 0.1), createEvent("t2", 0.9)]
    const found = [...Array(100).keys()].filter(() => getAnEvent(store, allEvents).title === "t1")
    found.length.should.be.lessThan(10)
  })

  it("should use randomly choose from equally probable events", () => {
    // check that both events are found in a reasonable time
    const allEvents = [createEvent("t1", 0.8), createEvent("t2", 0.8)]
    let current: string
    let prev: string
    do {
      prev = current
      current = getAnEvent(store, allEvents).title
    } while (prev && current === prev)
  })

  it("should ignore impossible events", () => {
    // cannot be said for sure, but at least check that not 1 in 100 times this event occurs
    const allEvents = [createEvent("t1", 0), createEvent("t2", 0.5)]
    const found = [...Array(100).keys()].some(() => getAnEvent(store, allEvents).title === "t1")
    found.should.be.false()
  })

  it("should return null if no event can be found", () => {
    const allEvents = [createEvent("t1", 0), createEvent("t2", 0)]
    should(getAnEvent(store, allEvents)).be.null()
  })
})
