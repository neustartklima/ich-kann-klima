import "should"
import { changeBy, changePercentBy } from "../src/lawTools"
import { Percent } from "../src/types"

describe("changePercentBy()", () => {
  const testPercent = (val: Percent, by: Percent): Percent => val + changePercentBy(val, by)
  it("should change by the full value if within range", () => {
    testPercent(90, 2).should.equal(92)
    testPercent(98, 2).should.equal(100)
    testPercent(10, -2).should.equal(8)
    testPercent(2, -2).should.equal(0)
  })
  it("should increase only up to the maximum of 100%", () => {
    testPercent(90, 20).should.equal(100)
    testPercent(1, 100).should.equal(100)
  })
  it("should adjust to the maximum of 100% when incrementing", () => {
    testPercent(102, 1).should.equal(100)
  })
  it("should not adjust to the maximum of 100% when decrementing or not changing", () => {
    testPercent(102, 0).should.equal(102)
    testPercent(102, -1).should.equal(101)
    testPercent(102, -10).should.equal(92)
  })
  it("should decrease only down to the minimum of 0%", () => {
    testPercent(2, -4).should.equal(0)
    testPercent(99, -100).should.equal(0)
  })
  it("should adjust to the minimum of 0% when decrementing or not changing", () => {
    testPercent(-2, -1).should.equal(0)
    testPercent(-2, 0).should.equal(0)
  })
  it("should not adjust to the minimum of 0% when incrementing", () => {
    testPercent(-2, 1).should.equal(-1)
    testPercent(-2, 10).should.equal(8)
  })
})

describe("changeBy()", () => {
  it("called with two numbers should return a function returning a difference ensuring maximum and minimum are held", () => {
    type Tight = number
    const changeTightBy = changeBy<Tight>(3, 5)
    changeTightBy(4, 2).should.equal(1)
    changeTightBy(4, -2).should.equal(-1)
  })
  it("called with undefined and a number should return a function returning a difference esuring a maximum is held", () => {
    type Max = number
    const changeMaxBy = changeBy<Max>(undefined, 5)
    changeMaxBy(4, Number.MAX_SAFE_INTEGER).should.equal(1)
    changeMaxBy(4, Number.MIN_SAFE_INTEGER).should.equal(Number.MIN_SAFE_INTEGER)
  })
  it("called with a number and undefined should return a function returning a difference esuring a minimum is held", () => {
    type Min = number
    const changeMinBy = changeBy<Min>(3, undefined)
    changeMinBy(4, Number.MAX_SAFE_INTEGER).should.equal(Number.MAX_SAFE_INTEGER)
    changeMinBy(4, Number.MIN_SAFE_INTEGER).should.equal(-1)
  })
  it("called with undefined and undefined should return a function returning the given diffence", () => {
    type Any = number
    const changeAnyBy = changeBy<Any>(undefined, undefined)
    changeAnyBy(4, Number.MAX_SAFE_INTEGER).should.equal(Number.MAX_SAFE_INTEGER)
    changeAnyBy(4, Number.MIN_SAFE_INTEGER).should.equal(Number.MIN_SAFE_INTEGER)
  })
})
