import should from "should"
import EventMachine from "../src/EventMachine"
import { Event, Game } from "../src/types"
import { createBaseValues, defaultValues } from "../src/repository"
import { Store } from "../src/store"

const game: Game = {
  id: "1",
  values: createBaseValues(defaultValues),
  events: [],
  acceptedLaws: [],
  proposedLaws: [],
  rejectedLaws: [],
  currentYear: 2021,
  over: false,
}

function createEvent(title: string, probability: number): Event {
  return {
    id: title,
    title,
    description: "",
    probability: () => probability,
    apply: () => undefined,
  }
}

const dispatched: { type: string; data: unknown }[] = []

const store = {
  state: { game },
  dispatch(type: string, data: unknown) {
    dispatched.push({ type, data })
  },
} as Store

// Use Fisher/Yates algorithm to create a number of integers in random order
function shuffledInts(howMay: number): number[] {
  const a = [...Array(howMay).keys()]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function countEvents(allEvents: Event[]): Record<string, number> {
  const numbers = shuffledInts(100)
  let index = 0
  const eventMachine = EventMachine(store, allEvents, () => numbers[index++])
  dispatched.length = 0
  const agg = Object.assign({}, ...allEvents.map((event) => ({ [event.title]: 0 })))
  numbers.forEach(() => eventMachine.initiateEvent())
  dispatched
    .filter((event) => event.type === "applyEvent")
    .forEach((event) => agg[(event.data as { event: Event }).event.title]++)
  return agg
}

describe("EventMachine.initiateEvent()", () => {
  it("should return the most probable event most of the time", () => {
    const allEvents = [createEvent("t1", 0.1), createEvent("t2", 0.9)]
    const stats = countEvents(allEvents)
    stats.t1.should.be.lessThan(15)
  })

  it("should randomly choose from equally probable events", () => {
    const allEvents = [createEvent("t1", 0.8), createEvent("t2", 0.8)]
    const stats = countEvents(allEvents)
    Math.abs(stats.t1 - stats.t2).should.be.lessThan(15)
  })

  it("should ignore impossible events", () => {
    // cannot be said for sure, but at least check that not 1 in 100 times this event occurs
    const allEvents = [createEvent("t1", 0), createEvent("t2", 0.5)]
    const stats = countEvents(allEvents)
    stats.t1.should.be.equal(0)
  })

  it("should return null if no event can be found", () => {
    const allEvents = [createEvent("t1", 0), createEvent("t2", 0)]
    const stats = countEvents(allEvents)
    should(stats).be.deepEqual({ t1: 0, t2: 0 })
  })
})
