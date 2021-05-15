import "should"
import { createGame } from "../src/repository"
import { fillUpLawProposals } from "../src/LawProposer"
import { Law } from "../src/types"
import { createLaw } from "../src/Factory"

const allLaws: Law[] = [
  createLaw({ title: "law 1", description: "", effects: () => undefined }),
  createLaw({ title: "law 2", description: "", effects: () => undefined }),
  createLaw({ title: "law 3", description: "", effects: () => undefined }),
  createLaw({ title: "law 4", description: "", effects: () => undefined }),
  createLaw({ title: "law 5", description: "", effects: () => undefined }),
  createLaw({ title: "law 6", description: "", effects: () => undefined }),
]

describe("LawProposer", () => {
  describe("fillUpLawProposals()", () => {
    it("should fill up an empty array", () => {
      const game = createGame()
      fillUpLawProposals(game, allLaws)
      game.proposedLaws.length.should.equal(6)
      game.proposedLaws.should.deepEqual(allLaws.map((law) => law.id))
    })

    it("should add missing laws", () => {
      const game = createGame()
      fillUpLawProposals(game, allLaws)
      game.proposedLaws.shift()
      fillUpLawProposals(game, allLaws)
      game.proposedLaws.length.should.equal(6)
      const ids = allLaws.map((law) => law.id)
      ids.push(ids.shift())
      game.proposedLaws.should.deepEqual(ids)
    })

    it("should only fill up if enough laws exist", () => {
      const game = createGame()
      fillUpLawProposals(game, allLaws.slice(0, 3))
      game.proposedLaws.length.should.equal(3)
    })

    it("should not fill up already proposed laws", () => {
      const game = createGame()
      fillUpLawProposals(game, allLaws.slice(0, 3))
      fillUpLawProposals(game, allLaws.slice(0, 3))
      game.proposedLaws.length.should.equal(3)
    })
  })

  describe("replaceLawProposal()", () => {
    it("should remove the given law")

    it("should add another law")
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
