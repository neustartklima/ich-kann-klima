import { clamp } from "./Math.js"

describe("Math", () => {
  it("should create a function to clamp values to a given range", () => {
    const testClamp = clamp(3, 5)
    testClamp(4).should.equal(4)
    testClamp(0).should.equal(3)
    testClamp(8).should.equal(5)
  })
})
