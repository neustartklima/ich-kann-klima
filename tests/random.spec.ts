import { seedWithGame, shuffleNumbers, random } from "../src/lib/random"
import { Game } from "../src/game"

describe("lib/random", () => {
  it("random() should return a number between 0 and 1", () => {
    for (let i = 0; i < 100; i++) {
      const num = random()
      num.should.be.within(0, 1)
    }
  })

  it("should return the same number sequence if seeded with the same game", () => {
    seedWithGame({ id: "05714030-2b32-11ec-8f69-19d84cfaaf19" } as Game)
    const sequence1 = [random(), random(), random(), random(), random()]
    seedWithGame({ id: "05714030-2b32-11ec-8f69-19d84cfaaf19" } as Game)
    const sequence2 = [random(), random(), random(), random(), random()]
    sequence1.should.deepEqual(sequence2)
  })

  it("should return a list of random numbers", () => {
    const list = shuffleNumbers(10).values().sort((a, b) => a - b)
    list.should.deepEqual([0, .1, .2, .3, .4, .5, .6, .7, .8, .9])
  })
})
