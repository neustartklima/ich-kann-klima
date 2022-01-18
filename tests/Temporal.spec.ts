import "should"
import { Date, date, duration, Duration, durationBetween, earlierOf, laterOf, months } from "../src/lib/Temporal"

describe("Temporal", () => {
  it("should construct date from ISO string in Europe/Berline timezone in winter.", () => {
    const test: Date = date("2021-01-01")
    test.toLocaleString().should.equal("1.1.2021, 0:00:00 MEZ")
    test.toMonthString().should.equal("Januar 2021")
    test.getYear().should.equal(2021)
    test.toJSON().should.equal("2021-01-01T00:00:00.000+01:00")
  })
  it("should construct date from ISO string in Europe/Berline timezone in summer.", () => {
    const test: Date = date("2021-07-01")
    test.toLocaleString().should.equal("1.7.2021, 0:00:00 MESZ")
    test.toJSON().should.equal("2021-07-01T00:00:00.000+02:00")
  })
  it("should calculate difference between two dates.", () => {
    const a = date("2020-02-01")
    const b = date("2020-03-01")
    const dur = durationBetween(a, b)
    dur.toMonthsString().should.equal("1 Monat")
  })
  it("should construct a duration from ISO string.", () => {
    const test: Duration = duration("P7W")
    test.toMonthsString().should.equal("1.75 Monate")
  })
  it("should construct a duration from object.", () => {
    const test: Duration = duration({ years: 1, weeks: 2 })
    test.toMonthsString().should.equal("12.5 Monate")
  })
  it("should compare two durations.", () => {
    const test1: Duration = duration("P7W")
    const test2: Duration = duration("P2M")
    const test3: Duration = duration("P7W")
    test1.lessThan(test2).should.be.true()
    test2.lessThan(test3).should.be.false()
    test3.lessThan(test1).should.be.false()
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
  it("should return the correct Duration from a number of months.", () => {
    const test = months(3)
    test.toMonthsString().should.equal("3 Monate")
  })
  it("should return the later and earlier of two given dates.", () => {
    const a = date("2020-02-01")
    const b = date("2020-03-01")
    laterOf(a, b).should.equal(b)
    laterOf(b, a).should.equal(b)
    earlierOf(a, b).should.equal(a)
    earlierOf(b, a).should.equal(a)
  })
})
