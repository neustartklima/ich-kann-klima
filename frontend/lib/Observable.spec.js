import Observable from "./Observable.js"
import sinon from "sinon"

describe("Observable", () => {
  let observable

  beforeEach(() => {
    observable = Observable(42)
  })

  it("should contain the value given at initialization", () => {
    observable.value.should.equal(42)
  })

  it("should set a new value", () => {
    observable.value = 17
    observable.value.should.equal(17)
  })

  it("should allow to update the current value", () => {
    observable.value -= 17
    observable.value.should.equal(25)
  })

  it("should allow to observe the value", () => {
    const spy = sinon.spy()
    observable.subscribe(spy)
    observable.value = 17
    spy.should.be.calledWith(observable)
    observable.value += 7
    spy.should.be.calledTwice()
  })

  it("should receive updates after unsubscribe", () => {
    const spy = sinon.spy()
    observable.subscribe(spy)
    observable.value = 17
    observable.unsubscribe(spy)
    observable.value = 22
    spy.should.be.calledOnce()
  })
})
