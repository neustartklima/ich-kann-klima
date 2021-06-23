import "should"
import { getSortedValues } from "../src/components/PeekTools"
import { createBaseValues, defaultValues } from "../src/repository"

describe("getSortedValues()", () => {
  it("should return values as specified in the options", () => {
    const ret = getSortedValues(createBaseValues(defaultValues), { gdp: -1 })
    const lastRow = ret.pop()
    ;(lastRow === undefined).should.not.be.false
    lastRow?.id.should.be.equal("gdp")
    lastRow?.effect.should.be.equal("-1.00")
  })
})
