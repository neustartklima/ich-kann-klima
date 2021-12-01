import "should"
import { Date, date, duration, Duration, durationBetween } from "../src/lib/Temporal"

describe("Temporal", () => {
  it("should construct date from ISO string.", () => {
    const test: Date = date("2021-01-01")
    test.toLocaleString().should.equal("1.1.2021, 0:00:00 MEZ")
    test.toMonthString().should.equal("Januar 2021")
  })
  it("should calculate difference between two dates.", () => {
    const a = date("2020-02-01")
    const b = date("2020-03-01")
    const dur = durationBetween(a, b)
    dur.toMonthsString().should.equal("1 Monat")
  })
  it("should construct a duration from ISO string.", () => {
    const test: Duration = duration("P4W")
    test.toMonthsString().should.equal("1 Monat")
  })
  it("should add a duration to a date.", () => {
    const dat = date("2021-01-01")
    const dur = duration("P3M")
    const res = dat.plus(dur)
    res.toLocaleString().should.equal("1.4.2021, 0:00:00 MESZ")
    res.toMonthString().should.equal("April 2021")
  })
  it("should respect the timezone of the ISO string, but stay in German timezone and locale.", () => {
    const test = date("2020-12-31T23:00:00Z")
    test.toLocaleString().should.equal("1.1.2021, 0:00:00 MEZ")
    test.toMonthString().should.equal("Januar 2021")
  })
})
