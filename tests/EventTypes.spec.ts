import "should"
import should from "should"
import { Event } from "../src/events"
import { durationSinceStartWithoutEvents, durationWithoutEvents, lessTimeHasPassed } from "../src/events/EventsTypes"
import { Game } from "../src/game"
import { duration } from "../src/lib/Temporal"

const pGame: Partial<Game> = {
  events: [
    { id: "NewYear", occurredIn: "2220-01-01", acknowledged: false },
    { id: "Bestechung", occurredIn: "2220-02-01", acknowledged: false },
  ],
  currentDate: "2222-01-01",
}
const game = pGame as Game

const pNewYear: Partial<Event> = {
  id: "NewYear",
}
const newYear = pNewYear as Event

const pDuerre: Partial<Event> = {
  id: "Duerrewelle",
}
const duerre = pDuerre as Event

describe("durationWithoutEvents", () => {
  it("returns undefined if none of the given events occurred", () => {
    should(durationWithoutEvents(game, ["Duerrewelle"])).be.undefined
  })
  it("returns the duration since a given event occurred", () => {
    const result = durationWithoutEvents(game, ["Duerrewelle", "NewYear"])
    should(result).not.be.undefined
    result!.lux.equals(duration({ years: 2 }).lux).should.be.true
  })
  it("returns the duration since the event that last occurred", () => {
    const result = durationWithoutEvents(game, ["NewYear", "Duerrewelle", "Bestechung"])
    should(result).not.be.undefined
    result!.lux.equals(duration({ years: 1, months: 11 }).lux).should.be.true
  })
})
describe("durationSinceStartWithoutEvents", () => {
  it("returns the duration since the start of the game", () => {
    const result = durationSinceStartWithoutEvents(game, ["Duerrewelle"])
    should(result).not.be.undefined
    result!.lux.equals(duration({ years: 201 }).lux).should.be.true
  })
  it("returns the duration since the event that last occurred", () => {
    const result = durationSinceStartWithoutEvents(game, ["NewYear", "Duerrewelle", "Bestechung"])
    should(result).not.be.undefined
    result!.lux.equals(duration({ years: 1, months: 11 }).lux).should.be.true
  })
})
describe("lessTimeHasPassed", () => {
  it("returns true if event occurred less than the given duration ago", () => {
    lessTimeHasPassed(game, newYear, { years: 1, months: 11 }).should.be.true
  })
  it("returns false if event occurred exactly the given duration ago", () => {
    lessTimeHasPassed(game, newYear, { years: 2 }).should.be.false
  })
  it("returns true if event did not occur and game started less than the given duration ago", () => {
    lessTimeHasPassed(game, duerre, { years: 202 }).should.be.true
  })
  it("returns false if event did not occur and game started exactly the given duration ago", () => {
    lessTimeHasPassed(game, duerre, { years: 201 }).should.be.false
  })
  it("returns true if event occurred less than the given duration ago with separate timeAfterStart", () => {
    lessTimeHasPassed(game, newYear, { months: 23 }, { years: 201 }).should.be.true
  })
  it("returns true if event occurred exactly the given duration ago and game started less than timeAfterStart ago", () => {
    lessTimeHasPassed(game, newYear, { months: 24 }, { years: 202 }).should.be.true
  })
  it("returns false if event occurred exactly the given duration ago and game started exactly timeAfterStart ago", () => {
    lessTimeHasPassed(game, newYear, { months: 24 }, { years: 201 }).should.be.false
  })
})
