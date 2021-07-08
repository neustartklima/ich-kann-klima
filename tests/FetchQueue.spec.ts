import "should"
import Sinon from "sinon"
import FetchQueueFactory from "../src/model/FetchQueue"

describe("FetchQueue", () => {
  let clock: Sinon.SinonFakeTimers

  before(() => {
    clock = Sinon.useFakeTimers({ shouldAdvanceTime: true })
  })

  after(() => {
    clock.restore()
  })

  describe("add()", () => {
    it("should resolve the result of the fetch function", async () => {
      const queue = FetchQueueFactory(() => Promise.resolve(4711))
      queue.add("GET", "/abc").should.be.resolvedWith(4711)
    })

    it("should reject if the fetch function rejects and no retries are wanted", async () => {
      const queue = FetchQueueFactory(() => Promise.reject(123))
      queue.add("GET", "/abc", undefined, -1).should.be.rejectedWith(123)
    })

    it("should retry the specified times", async () => {
      let callNo = 1
      const queue = FetchQueueFactory(() => (callNo++ < 2 ? Promise.reject(-1) : Promise.resolve(456)), { timeout: 1 })
      const result = (await queue.add("GET", "/abc", undefined, 2)) as number
      result.should.equal(456)
      callNo.should.equal(3)
    })

    it("should not repeat to call the fetch function when it succeeds")

    it("should finally reject if the maximum number of retries is reached")
  })

  describe("remove", () => {
    it("should remove an existing entry, so that the existing command is not retried any more", async () => {
      const fetchFunc = Sinon.stub().rejects(42)
      const queue = FetchQueueFactory(fetchFunc)
      const promise = queue.add("GET", "/abc", undefined, 20) as Promise<number>
      queue.remove("GET", "/abc")
      promise.should.be.rejected()
    })

    it("should not do anything if specified entry is not found", async () => {
      const fetchFunc = Sinon.stub().rejects(42)
      const queue = FetchQueueFactory(fetchFunc)
      queue.remove("GET", "/abc")
    })

    it("should ignore character case of method part when searching for entries")
  })
})
