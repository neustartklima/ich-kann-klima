import { calculateNextYear, co2Rating, defaultValues, financeRating } from "../src/Calculator"
import { createLaw } from "../src/Factory"
import { BaseParams } from "../src/types"

function effects(data: BaseParams, startYear: number, currentYear: number): Partial<BaseParams> {
  return { co2emissions: -42 }
}

describe("Calculator.calculateNextYear", () => {
  it("should leave all props but co2budget as they are if no laws are accepted", () => {
    const newValues = calculateNextYear(defaultValues, [], 2022)
    Object.keys(defaultValues).forEach((propName) => {
      if (propName !== "co2budget") {
        newValues[propName as keyof BaseParams].should.equal(defaultValues[propName as keyof BaseParams])
      }
    })
  })

  it("should return modified base params", () => {
    const acceptedLaws = [{ ...createLaw({ title: "test", description: "test", effects }), effectiveSince: 2021 }]
    const newValues = calculateNextYear(defaultValues, acceptedLaws, 2022)
    newValues.co2emissions.should.equal(defaultValues.co2emissions - 42)
  })

  it("should calculate remaining co2 budget", () => {
    const acceptedLaws = [{ ...createLaw({ title: "test", description: "test", effects }), effectiveSince: 2021 }]
    const newValues = calculateNextYear(defaultValues, acceptedLaws, 2022)
    newValues.co2budget.should.equal(defaultValues.co2budget - newValues.co2emissions)
  })
})

const simpleGame = { id: "1", values: defaultValues, acceptedLaws: [], currentYear: 2021 }

describe("Calculator.co2Rating", () => {
  it("should be nearly 50 in initial state", () => {
    const rating = co2Rating({ ...simpleGame })
    Math.round(rating / 10).should.equal(5)
  })

  it("should return 0 if budget is used up", () => {
    const values = { ...defaultValues, co2budget: 0 }
    const rating = co2Rating({ ...simpleGame, values })
    rating.should.equal(0)
  })

  it("should return 100 if no additional emissions are made", () => {
    const values = { ...defaultValues, co2emissions: 0 }
    const rating = co2Rating({ ...simpleGame, values })
    rating.should.equal(100)
  })
})

describe("Calculator.financeRating", () => {
  it("should be nearly 50 for current debt", () => {
    const rating = financeRating({ ...simpleGame })
    Math.round(rating / 10).should.equal(5)
  })

  it("should return 0 if debt is doubled", () => {
    const values = { ...defaultValues, stateDebt: defaultValues.stateDebt * 2 }
    const rating = financeRating({ ...simpleGame, values })
    rating.should.equal(0)
  })

  it("should return 100 if there is no debt any more", () => {
    const values = { ...defaultValues, stateDebt: 0 }
    const rating = financeRating({ ...simpleGame, values })
    rating.should.equal(100)
  })
})
