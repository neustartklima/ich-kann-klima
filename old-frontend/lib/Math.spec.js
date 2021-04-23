import { clamp, getMax, getMin, getSum } from "./Math.js"

const numArray = [8, 4, -16, 88]
const objArray = [{ val: 8 }, { val: 4 }, { val: -16 }, { val: 88 }]

describe("Math", () => {
  it("should create a function to clamp values to a given range", () => {
    const testClamp = clamp(3, 5)
    testClamp(4).should.equal(4)
    testClamp(0).should.equal(3)
    testClamp(8).should.equal(5)
  })
  
  it("should calculate the sum in a numerical array", () => {
    getSum(numArray).should.equal(84)
  })

  it("should calculate the sum in an object array", () => {
    getSum(objArray, (obj) => obj.val).should.equal(84)
  })

  it("should find the minimum in a numerical array", () => {
    getMin(numArray).should.equal(-16)
  })

  it("should find the minimum in an array of objects", () => {
    getMin(objArray, (obj) => obj.val).should.equal(-16)
  })

  it("should find the maximum in a numerical array", () => {
    getMax(numArray).should.equal(88)
  })

  it("should find the maximum in an array of objects", () => {
    getMax(objArray, (obj) => obj.val).should.equal(88)
  })
})
