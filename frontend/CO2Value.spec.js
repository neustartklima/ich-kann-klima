import CO2Value from "./CO2Value.js"

const questions = [{
  answers: [
    { co2: 2, text: "first" },
    { co2: 0, text: "second" },
    { co2: -1, text: "third" },
  ]
}, {
  answers: [
    { co2: 3, text: "fourth" },
    { co2: -2, text: "fifth" },
  ]
}]

describe("CO2Value", () => {
  it("should set the 0 value as percentage", () => {
    CO2Value(questions).value.should.equal(37.5)
  })

  it("should add values", () => {
    const co2 = CO2Value(questions)
    co2.add(1)
    co2.value.should.equal(50)
  })

  it("should substract values", () => {
    const co2 = CO2Value(questions)
    co2.add(-2)
    co2.value.should.equal(12.5)
  })

  it("should not go below 0", () => {
    const co2 = CO2Value(questions)
    co2.add(-5)
    co2.value.should.equal(0)
  })

  it("should not go over 100", () => {
    const co2 = CO2Value(questions)
    co2.add(7)
    co2.value.should.equal(100)
  })
})
