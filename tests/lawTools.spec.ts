import * as fc from "fast-check"
import should from "should"
import { Game } from "../src/game"
import { LawId, LawReference } from "../src/laws"
import {
  getActiveLaw,
  lawIsAccepted,
  linear,
  linearPopChange,
  maxDueToGridQuality,
  renewablePercentage,
  windPercentage,
} from "../src/laws/lawTools"
import { RefPoint } from "../src/lib/utils"
import { BaseParams } from "../src/params"

describe("lawTools", () => {
  describe("linear()", () => {
    it("should return 0%, when zero === actual", () => {
      linear(45, 46, 45).should.equal(0)
    })
    it("should return 100%, when hundred === actual", () => {
      linear(-3, 27.5, 27.5).should.equal(100)
    })
    it("should return 50%, when actual === (hundred + zero) / 2", () => {
      linear(-14.5, 45.5, 15.5).should.equal(50)
    })
    it("should return a negative value, if actual < zero < hundred", () => {
      linear(10, 100000, 9).should.be.lessThan(0)
    })
    it("should return a value > 100, if actual > hundred > zero", () => {
      linear(-100000, 25, 25.1).should.be.greaterThan(100)
    })
    it("should return a negative value, if actual > zero > hundred", () => {
      linear(1, 0, 2).should.be.lessThan(0)
    })
    it("should return a value > 100, if actual < hundred < zero", () => {
      linear(100, 0, -0.1).should.be.greaterThan(100)
    })
    it("should throw an exception, when hundred === zero", () => {
      linear.bind(5, 5, 5).should.throw()
    })
    it("should work with zero > hundred", () => {
      linear(100, 0, 40).should.equal(60)
    })
  })

  describe("linearPopChange()", function () {
    const precision = 0.000000000000001
    const linFunc = fc.tuple(
      fc.record<RefPoint>({ value: fc.double(), result: fc.double() }),
      fc.record<RefPoint>({ value: fc.double(), result: fc.double() })
    )
    const nonDegFunc = linFunc.filter(([{ value: v1 }, { value: v2 }]) => v1 != v2)
    const funcAndVal = fc.record({ f: nonDegFunc, v: fc.double() })

    it("should return the first result for the first value.", function () {
      fc.assert(
        fc.property(linFunc, (f) => {
          linearPopChange(...f)(f[0].value).should.be.approximately(f[0].result, precision)
          linearPopChange(...f)(f[0].value).should.equal(f[0].result)
        })
      )
    })

    it("should return the second result for the second value.", function () {
      fc.assert(
        fc.property(linFunc, (f) => {
          linearPopChange(...f)(f[1].value).should.be.approximately(f[1].result, precision)
        })
      )
    })

    it("should return the linear inter-/extrapolation for values within the interval or beyond the second.", function () {
      fc.assert(
        fc.property(
          funcAndVal.filter(({ f: [{ value: v1 }, { value: v2 }], v }) => (v1 <= v2 ? v1 <= v : v1 >= v)),
          ({ f, v }) => {
            const [{ value: v1, result: r1 }, { value: v2, result: r2 }] = f
            const interp = (r1 * (v - v2)) / (v1 - v2) + (r2 * (v - v1)) / (v2 - v1)
            linearPopChange(...f)(v).should.be.approximately(interp, precision)
          }
        )
      )
    })

    it("should return the first result for values beyond the first value.", function () {
      fc.assert(
        fc.property(
          funcAndVal.filter(({ f: [{ value: v1 }, { value: v2 }], v }) => (v1 <= v2 ? v <= v1 : v >= v1)),
          ({ f, v }) => {
            linearPopChange(...f)(v).should.equal(f[0].result)
          }
        )
      )
    })

    it("should return the first result for any value in case of a degenerate function.", function () {
      fc.assert(
        fc.property(fc.double(), fc.double(), fc.double(), fc.double(), (v1, r1, r2, v) => {
          linearPopChange({ value: v1, result: r1 }, { value: v1, result: r2 })(v).should.equal(r1)
        })
      )
    })
  })

  describe("lawIsAccepted()", () => {
    const game: Partial<Game> = {
      acceptedLaws: [{ lawId: "AbschaffungDerMineraloelsteuer", effectiveSince: 2222 }],
      currentYear: 2222,
    }
    it("should return true, if the given law was accepted.", () => {
      lawIsAccepted(game as Game, "AbschaffungDerMineraloelsteuer").should.be.true
    })
    it("should return false, if the given law was not accepted.", () => {
      lawIsAccepted(game as Game, "AllesBleibtBeimAlten").should.be.false
    })
    it("should return false, it the given law was accepted less than given years ago.", () => {
      lawIsAccepted(game as Game, "AbschaffungDerMineraloelsteuer", 1).should.be.false
    })
    it("should throw an error, if the given law ID does not exist.", () => {
      ;(() => lawIsAccepted(game as Game, "abcde" as LawId)).should.throw(Error)
    })
  })

  describe("getActiveLaw()", () => {
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

  describe("windPercentage()", function () {
    it("should return percentage of wind power from the total electricity demand.", function () {
      const game: Partial<Game> = {
        values: { electricityWind: 100, electricityDemand: 200 } as BaseParams,
      }
      windPercentage(game as Game).should.equal(50)
    })
  })

  describe("renewablePercentage()", function () {
    it("should return the percentage of renewables from the total electricity demand.", function () {
      const game: Partial<Game> = {
        values: {
          electricityWind: 40,
          electricitySolar: 20,
          electricityWater: 20,
          electricityBiomass: 20,
          electricityDemand: 200,
        } as BaseParams,
      }
      renewablePercentage(game as Game).should.equal(50)
    })
  })

  describe("maxDueToGridQuality()", function () {
    function mockGame(gridQuality: number) {
      return {
        values: {
          electricityGridQuality: gridQuality,
          electricityDemand: 200,
        },
      } as Game
    }
    it("should return the initial value of a given param if the grid quality is at 50%.", function () {
      maxDueToGridQuality(mockGame(50), "electricityBiomass").should.equal(43.19)
    })
    it("should return the electricity demand if the grid quality is at 100%.", function () {
      maxDueToGridQuality(mockGame(100), "electricityBiomass").should.equal(200)
    })
  })

  describe("windPowerExpansion()", function () {})

  describe("co2PricingEffects()", function () {})
})
