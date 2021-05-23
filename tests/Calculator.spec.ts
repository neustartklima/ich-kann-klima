import { calculateNextYear, co2Rating, financeRating } from "../src/Calculator"
import { createLaw } from "../src/Factory"
import { createBaseValues, defaultValues } from "../src/repository"
import { BaseParams, Game } from "../src/types"

function effects(data: BaseParams, startYear: number, currentYear: number): Partial<BaseParams> {
  return { co2emissions: -42 }
}

function priority(game: Game): number {
  return 1
}

const startValues = createBaseValues(defaultValues)

describe("Calculator.calculateNextYear", () => {
  it("should leave all props but co2budget as they are if no laws are accepted", () => {
    const newValues = calculateNextYear(createBaseValues(defaultValues), [], 2022)
    Object.keys(newValues).forEach((propName) => {
      if (propName !== "co2budget") {
        newValues[propName as keyof BaseParams].should.equal(startValues[propName as keyof BaseParams])
      }
    })
  })

  it("should return modified base params", () => {
    const acceptedLaws = [
      { ...createLaw("test", { title: "test", description: "test", effects, priority }), effectiveSince: 2021 },
    ]
    const newValues = calculateNextYear(createBaseValues(defaultValues), acceptedLaws, 2022)
    newValues.co2emissions.should.equal(startValues.co2emissions - 42)
  })

  it("should calculate remaining co2 budget", () => {
    const acceptedLaws = [
      { ...createLaw("test", { title: "test", description: "test", effects, priority }), effectiveSince: 2021 },
    ]
    const newValues = calculateNextYear(createBaseValues(defaultValues), acceptedLaws, 2022)
    newValues.co2budget.should.equal(startValues.co2budget - newValues.co2emissions)
  })
})

describe("Calculator.applyEffects()", () => {
  it("should apply the effects to the game values")
})

const initialGame: Game = {
  id: "1",
  values: createBaseValues(defaultValues),
  acceptedLaws: [],
  proposedLaws: [],
  rejectedLaws: [],
  currentYear: 2021,
}

describe("Calculator.co2Rating", () => {
  it("should be nearly 50 in initial state", () => {
    const rating = co2Rating({ ...initialGame })
    Math.round(rating / 10).should.equal(5)
  })

  it("should return 0 if budget is used up", () => {
    const values = { ...initialGame.values, co2budget: 0 }
    const rating = co2Rating({ ...initialGame, values })
    rating.should.equal(0)
  })

  it("should return 100 if no additional emissions are made", () => {
    const values = { ...initialGame.values, co2emissions: 0 }
    const rating = co2Rating({ ...initialGame, values })
    rating.should.equal(100)
  })
})

describe("Calculator.financeRating", () => {
  it("should be nearly 50 for current debt", () => {
    const rating = financeRating({ ...initialGame })
    Math.round(rating / 10).should.equal(5)
  })

  it("should return 0 if debt is doubled", () => {
    const values = { ...initialGame.values, stateDebt: initialGame.values.stateDebt * 2 }
    const rating = financeRating({ ...initialGame, values })
    rating.should.equal(0)
  })

  it("should return 100 if there is no debt any more", () => {
    const values = { ...initialGame.values, stateDebt: 0 }
    const rating = financeRating({ ...initialGame, values })
    rating.should.equal(100)
  })
})
