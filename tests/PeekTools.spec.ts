import should from "should"
import { getSortedValues } from "../src/components/PeekTools"
import { initGame } from "../src/game"
import { modify } from "../src/params"

describe("getSortedValues()", () => {
  it("should return values as specified in the options", () => {
    const ret = getSortedValues(initGame(), [modify("stateDebt").byValue(-1)])
    const lastRow = ret.pop()
    should(lastRow).not.be.undefined()
    lastRow?.id.should.be.equal("stateDebt")
    lastRow?.effect.should.be.equal("-1.00")
  })
})
