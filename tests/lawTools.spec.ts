import should from "should"
import { Game } from "../src/game"
import { LawId, LawReference } from "../src/laws"
import { getActiveLaw, lawIsAccepted, linear } from "../src/laws/lawTools"

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

  describe("lawIsAccepted()", () => {
    const game: Partial<Game> = {
      acceptedLaws: [{ lawId: "AbschaffungDerMineraloelsteuer", effectiveSince: 2222 }],
      currentYear: 2222,
    }
    it("should return true, if the given law was accepted.", () => {
      lawIsAccepted(<Game>game, "AbschaffungDerMineraloelsteuer").should.be.true
    })
    it("should return false, if the given law was not accepted.", () => {
      lawIsAccepted(<Game>game, "AllesBleibtBeimAlten").should.be.false
    })
    it("should return false, it the given law was accepted less than given years ago.", () => {
      lawIsAccepted(<Game>game, "AbschaffungDerMineraloelsteuer", 1).should.be.false
    })
    it("should throw an error, if the given law ID does not exist.", () => {
      ;(() => lawIsAccepted(game as Game, "abcde" as LawId)).should.throw(Error)
    })
  })
})
