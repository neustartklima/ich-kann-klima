import { getZIndexes, markdown } from "../src/lib/utils"

describe("utils", () => {
  describe("getZIndexes", () => {
    it("should have the maximum at the centerPos", () => {
      getZIndexes(7, 3).should.deepEqual([0, 1, 2, 3, 2, 1, 0])
    })

    it("should return an ascending sequence if centerPos equals numPlaces", () => {
      getZIndexes(6, 5).should.deepEqual([0, 1, 2, 3, 4, 5])
    })

    it("should return an descending sequence if centerPos equals 0", () => {
      getZIndexes(5, 0).should.deepEqual([4, 3, 2, 1, 0])
    })
  })

  describe("markdown", () => {
    it("should convert a tagged template string with markdown to html", () => {
      const string = markdown`
# This is the title

Some text

- This is the first list item
- This is the second list item
      `

      string.should.equal(
        '<h1 id="thisisthetitle">This is the title</h1>\n' +
          "<p>Some text</p>\n" +
          "<ul>\n" +
          "<li>This is the first list item</li>\n" +
          "<li>This is the second list item</li>\n" +
          "</ul>"
      )
    })

    it("should work with indented markdown if all is indented the same", () => {
      markdown`
        # title

        text
      `.should.equal(`<h1 id="title">title</h1>\n<p>text</p>`)
    })

    it("should work with code snippets inside indented markdown")
  })
})
