import "should"
import { calculateNextYear, co2Rating, financeRating } from "../src/Calculator"
import { startDate, startYear } from "../src/constants"
import { Game, initGame } from "../src/game"
import { AcceptedLaw, LawId } from "../src/laws"
import { defaultEffort, EffectsFunc, LawLabel } from "../src/laws/LawsTypes"
import { BaseParams, Change, createBaseValues, defaultValues, modify } from "../src/params"
import { MioPsgrKm } from "../src/types"

function agriEffects(): Change[] {
  return [modify("co2emissionsAgriculture").byValue(-29)]
}

function priority(): number {
  return 1
}

function mockAcceptedLaw(
  id: LawId,
  effects: EffectsFunc,
  labels: LawLabel[] = [],
  treatAfterLabels: LawLabel[] = []
): AcceptedLaw {
  return {
    id,
    title: id,
    description: id,
    labels,
    treatAfterLabels,
    effort: defaultEffort,
    effects: effects,
    priority,
    effectiveSince: 2021,
  }
}

function mockEffects(num: MioPsgrKm): EffectsFunc {
  return (d, s, e) => [modify("carUsage").byValue(num - d.values.carUsage)]
}

const startValues = createBaseValues(defaultValues)

describe("Calculator.calculateNextYear", () => {
  it("should leave all props but co2budget as they are if no laws are accepted", () => {
    const newValues = calculateNextYear(initGame(), [], 2022)
    Object.keys(newValues).forEach((propName) => {
      if (propName !== "co2budget") {
        newValues[propName as keyof BaseParams].should.equal(startValues[propName as keyof BaseParams])
      }
    })
  })

  const acceptedLaws = [mockAcceptedLaw("Test", agriEffects)]

  it("should return modified value if it is modified by a law directly", () => {
    const newValues = calculateNextYear(initGame(), acceptedLaws, 2022)
    newValues.co2emissionsAgriculture.should.equal(startValues.co2emissionsAgriculture - 29)
  })

  it("should return modified values calculated from other modified values", () => {
    const newValues = calculateNextYear(initGame(), acceptedLaws, 2022)
    newValues.co2emissions.should.equal(startValues.co2emissions - 29)
  })

  it("should return modifications from two years", () => {
    const newValues = calculateNextYear(initGame(), acceptedLaws, 2022)
    const thirdValues = calculateNextYear({ values: newValues } as Game, acceptedLaws, 2023)
    thirdValues.co2emissions.should.equal(startValues.co2emissions - 58)
  })

  it("should calculate remaining co2 budget", () => {
    const newValues = calculateNextYear(initGame(), acceptedLaws, 2022)
    newValues.co2budget.should.equal(startValues.co2budget - newValues.co2emissions)
  })

  it("should treat a law (A) with treatAfterLabels set after a law (B) with the corresponding label", () => {
    const sortedLaws: AcceptedLaw[] = [
      mockAcceptedLaw("Test", mockEffects(1), [], ["WindkraftAbstandsregel"]),
      mockAcceptedLaw("Test", mockEffects(0), ["WindkraftAbstandsregel"], []),
    ]
    const newValues = calculateNextYear({ values: startValues } as Game, sortedLaws, 2022)
    newValues.carUsage.should.equal(1)
  })

  it(
    "should throw an error if treatAfterLabels is not satsifiable" /*, () => {
    const sortedLaws: AcceptedLaw[] = [
      mockAcceptedLaw("Test", mockEffects(1), ["Kernenergie"], ["WindkraftAbstandsregel"]),
      mockAcceptedLaw("Test", mockEffects(2), ["WindkraftAbstandsregel"], ["TempolimitAutobahn"]),
      mockAcceptedLaw("Test", mockEffects(3), ["TempolimitAutobahn"], ["Kernenergie"]),
    ]
    should.throws(() => calculateNextYear({ values: startValues } as Game, sortedLaws, 2022))
  }*/
  )
})

const initialGame: Game = {
  id: "1",
  values: createBaseValues(defaultValues),
  acceptedLaws: [],
  proposedLaws: [],
  rejectedLaws: [],
  currentDate: startDate,
  currentYear: startYear,
  events: [],
  over: false,
  prngState: {},
}

describe("Calculator.co2Rating", () => {
  it("should be nearly 50 in initial state", () => {
    const rating = co2Rating({ ...initialGame })
    Math.round(rating / 10).should.equal(5)
  })

  it("should return 0 if budget is used up", () => {
    const values = createBaseValues(defaultValues)
    values.co2budget = 0
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
    const values = createBaseValues(defaultValues)
    values.stateDebt = initialGame.values.stateDebt * 2
    const rating = financeRating({ ...initialGame, values })
    rating.should.equal(0)
  })

  it("should return 100 if there is no debt any more", () => {
    const values = createBaseValues(defaultValues)
    values.stateDebt = 0
    const rating = financeRating({ ...initialGame, values })
    rating.should.equal(100)
  })
})
