import "should"
import { allLaws } from "../src/laws"
import { createBaseValues, defaultValues } from "../src/params"

const writableKeys = Object.keys(defaultValues)

describe("Each defined law", function () {
  describe("has effects() function which", function () {
    it("should return object of type 'Partial<WritableBaseParams>'", function () {
      allLaws.forEach((law) => {
        const eff = law.effects(createBaseValues(defaultValues), 2021, 2021)
        if (!(eff instanceof Array)) {
          for (const e in eff) {
            e.should.be.equalOneOf(writableKeys)
          }
        }
      })
    })
  })
})
