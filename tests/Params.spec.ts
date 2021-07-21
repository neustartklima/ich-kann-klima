import "should"
import { createInitialValues, paramDefinitions, ParamDefinitions, ParamKey } from "../src/model/Params"
import { ParamDefinition } from "../src/types"

describe("ParamDefinitions", () => {
  it("should extend Record<string, ParamDefinition>", () => {
    const paramDefinitions_entry_invalid: ParamDefinitions extends Record<string, ParamDefinition> ? true : never = true
    paramDefinitions_entry_invalid // Only use 'new WritableParam()' or 'new ComputedParam()' to create entries.
  })
})

describe("createInitialValues()", () => {
  it("should return a valid object of type Params", () => {
    const params = createInitialValues()
    for (const key in paramDefinitions) {
      const name = key as ParamKey
      params[name].should.be.of.type("number")
    }
  })
  it("should return an object with initial values set", () => {
    const params = createInitialValues()
    params.co2budget.should.be.equal(6700)
    params.electricityCoal.should.be.equal(35.46 + 82.13)
  })
  it("should return an object with computed values updated dynamically", () => {
    const params = createInitialValues()
    const sav = params.electricityCoal
    params.electricityBrownCoal += 100
    params.electricityCoal.should.be.equal(sav + 100)
  })
  it("should return an object with computed values read-only")
})
