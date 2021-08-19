import should from "should"
import { changeBy, getActiveLaw, linear } from "../src/lawTools"
import { LawReference } from "../src/laws"

describe("lawTools", () => {
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

  describe("linear()", () => {
    it("should return 0%, when zero === actual", () => {
      linear(45, 46, 45).should.equal(0)
    })
    it("should return 100%, when hundret === actual", () => {
      linear(-3, 27.5, 27.5).should.equal(100)
    })
    it("should return 50%, when actual === (hundret + zero) / 2", () => {
      linear(-14.5, 45.5, 15.5).should.equal(50)
    })
    it("should return a negative value, if actual < zero < hundret", () => {
      linear(10, 100000, 9).should.be.lessThan(0)
    })
    it("should return a value > 100, if actual > hundret > zero", () => {
      linear(-100000, 25, 25.1).should.be.greaterThan(100)
    })
    it("should return a negative value, if actual > zero > hundret", () => {
      linear(1, 0, 2).should.be.lessThan(0)
    })
    it("should return a value > 100, if actual < hundret < zero", () => {
      linear(100, 0, -0.1).should.be.greaterThan(100)
    })
    it("should throw an exception, when hundret === zero", () => {
      linear.bind(5, 5, 5).should.throw()
    })
  })

  describe("getActiveLaw", () => {
    it("find the most current active law matching the pattern", () => {
      const refs: LawReference[] = [
        { lawId: "DaemmungAltbau1Percent", effectiveSince: 2020 },
        { lawId: "NahverkehrAusbauen", effectiveSince: 2024 },
        { lawId: "DaemmungAltbau2Percent", effectiveSince: 2021 },
        { lawId: "DaemmungAltbau4Percent", effectiveSince: 2023 },
        { lawId: "DaemmungAltbauAbschaffen", effectiveSince: 2022 },
      ]

      const result = getActiveLaw(refs, /^Daemmung/)
      should(result).not.be.undefined()
      result?.should.equal("DaemmungAltbau4Percent")
    })
  })
})
