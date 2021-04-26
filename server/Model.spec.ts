import "mocha"
import "should"
import { initialValues } from "./Model"

describe("Model", () => {
  it("should return initial values", () => {
    initialValues().should.have.properties(["co2Emmissions", "stateDebt", "unemployment", "gdp"])
  })
})
