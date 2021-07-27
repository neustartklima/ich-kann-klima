import should from "should"
import Sinon from "sinon"
import { Game } from "../src/game"
import {
  BaseParams,
  computedParamList,
  createBaseValues,
  defaultValues,
  modify,
  modifyParams,
  ParamDefinitions,
  paramKeys,
} from "../src/params"
import { ParamDefinition } from "../src/params/ParamsTypes"

describe("ParamDefinitions", () => {
  it("should extend Record<string, ParamDefinition>", () => {
    const paramDefinitions_entry_invalid: ParamDefinitions extends Record<string, ParamDefinition> ? true : never = true
    paramDefinitions_entry_invalid // Only use 'new WritableParam()' or 'new ComputedParam()' to create entries.
  })
})

describe("createBaseValues(defaultValues)", () => {
  const initVals = createBaseValues(defaultValues)

  it("should return a valid object of type Params", () => {
    for (const key of paramKeys) {
      initVals[key].should.be.of.type("number")
    }
  })
  it("should return an object with initial values set", () => {
    initVals.co2budget.should.be.equal(6700)
    initVals.electricityCoal.should.be.equal(35.46 + 82.13)
  })
  it("should return an object with computed values updated dynamically", () => {
    const params = createBaseValues(defaultValues)
    const sav = params.electricityCoal
    params.electricityBrownCoal += 100
    params.electricityCoal.should.be.equal(sav + 100)
  })
  it("should return an object with computed values read-only", () => {
    for (const pd of computedParamList) {
      should.throws(() => {
        initVals[pd.name] = 999
      })
    }
  })
  it("should return an object with the computed values set approximately to shouldInitiallyBe", () => {
    for (const pd of computedParamList) {
      if (pd.shouldInitiallyBe) {
        initVals[pd.name].should.approximately(
          pd.shouldInitiallyBe,
          pd.shouldInitiallyBe * 0.01,
          "Computed initial value for " +
            pd.name +
            " should be " +
            pd.shouldInitiallyBe +
            " " +
            pd.unit +
            " but is " +
            initVals[pd.name] +
            " " +
            pd.unit +
            " according to " +
            pd.sourcesDesc() +
            "."
        )
      }
    }
  })
})

describe("modifyParams", () => {
  const initialValues = () => ({ co2budget: 1000 } as unknown as BaseParams)

  it("should modify parameters by absolute value", () => {
    const values = modifyParams(initialValues(), [modify("co2budget").byValue(-123)])
    values.should.deepEqual({ co2budget: 877 })
  })

  it("should modify parameters by percent", () => {
    const values = modifyParams(initialValues(), [modify("co2budget").byPercent(-42)])
    values.should.deepEqual({ co2budget: 580 })
  })

  it("should only modify if condition is met", () => {
    const values = modifyParams(initialValues(), [modify("co2budget").byPercent(-42).if(false)])
    values.should.deepEqual({ co2budget: 1000 })
  })
})
