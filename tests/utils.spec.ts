import { getZIndexes } from "../src/lib/utils"

describe("utils", () => {
  describe("getZIndexes", () => {
    it("should have the maximum at the centerPos", () => {
      getZIndexes(7, 3).should.deepEqual([0, 1, 2, 3, 2, 1, 0])
    })

    it("should return an ascending sequence if centerPos equals numPlaces", () => {
      getZIndexes(6, 5).should.deepEqual([0, 1, 2, 3, 4, 5])
    })

    it("should return an descending sequence if centerPos equals 0", () => {
      getZIndexes(5, 0).should.deepEqual([4, 3, 2, 1, 0])
    })
  })
})