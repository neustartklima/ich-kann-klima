import should from "should"
import {
  BaseParams,
  computedParamList,
  createBaseValues,
  defaultValues,
  modify,
  applyEffects,
  ParamDefinitions,
  paramKeys,
  transfer,
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
            " is " +
            initVals[pd.name] +
            " " +
            pd.unit +
            " but should be " +
            pd.shouldInitiallyBe +
            " " +
            pd.unit +
            " according to " +
            pd.citationsDesc() +
            "."
        )
      }
    }
  })
})

describe("modify()", () => {
  const initialContext = () => ({
    dispatch: () => undefined,
    values: { co2budget: 1000 } as unknown as BaseParams,
  })

  it("should modify parameters by relative value", () => {
    const context = initialContext()
    applyEffects(context, [modify("co2budget").byValue(-123)])
    context.values.should.deepEqual({ co2budget: 877 })
  })

  it("should modify parameters by percent", () => {
    const context = initialContext()
    const values = applyEffects(context, [modify("co2budget").byPercent(-42)])
    context.values.should.deepEqual({ co2budget: 580 })
  })

  it("should set parameters to absolute value", () => {
    const context = initialContext()
    const values = applyEffects(context, [modify("co2budget").setValue(1)])
    context.values.should.deepEqual({ co2budget: 1 })
  })

  it("should only modify if condition is met", () => {
    const context = initialContext()
    const values = applyEffects(context, [modify("co2budget").byPercent(-42).if(false)])
    context.values.should.deepEqual({ co2budget: 1000 })
  })

  it("should return the future change", () => {
    const context = initialContext()
    modify("co2budget").setValue(1010).getChange(context.values).should.be.equal(10)
  })

  it("should return the future change of 0 if condition is not met", () => {
    const context = initialContext()
    modify("co2budget").setValue(1010).if(false).getChange(context.values).should.be.equal(0)
  })
})

describe("transfer()", () => {
  const transferContext = (plu: number, cu: number) => ({
    dispatch: () => undefined,
    values: { publicLocalUsage: plu, carUsage: cu } as unknown as BaseParams,
  })

  it("should transfer value from one to the other parameter by percentage", () => {
    const context = transferContext(100, 200)
    const values = applyEffects(context, [transfer("publicLocalUsage", "carUsage").byPercent(1)])
    context.values.should.deepEqual({ publicLocalUsage: 101, carUsage: 199 })
  })

  it("should not transfer anything, if a condition is false", () => {
    const context = transferContext(100, 200)
    const values = applyEffects(context, [transfer("publicLocalUsage", "carUsage").byPercent(1).if(false)])
    context.values.should.deepEqual({ publicLocalUsage: 100, carUsage: 200 })
  })

  it("should transfer value from one to the other parameter observing the bounds of the source", () => {
    const context = transferContext(100, 50)
    const values = applyEffects(context, [transfer("publicLocalUsage", "carUsage").byValue(60)])
    context.values.should.deepEqual({ publicLocalUsage: 150, carUsage: 0 })
  })

  it("should transfer value from one to the other parameter observing the bounds of the target", () => {
    const context = transferContext(5, 50)
    const values = applyEffects(context, [transfer("publicLocalUsage", "carUsage").byPercent(-200)])
    context.values.should.deepEqual({ publicLocalUsage: 0, carUsage: 55 })
  })

  it("should throw if the units of the two parameters differ", () => {
    should.throws(() => {
      transfer("carUsage", "co2emissionsIndustry").byValue(1)
    }, /can only be used for parameters with the same unit/)
  })
})
