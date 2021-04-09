import Observable from "./Observable.js"
import sinon from "sinon"

describe("Observable", () => {
  let observable

  beforeEach(() => {
    observable = Observable(42)
  })

  it("should contain the value given at initialization", () => {
    observable.getValue().should.equal(42)
  })

  it("should set a new value", () => {
    observable.setValue(17)
    observable.getValue().should.equal(17)
  })

  it("should allow to update the current value", () => {
    observable.updateValue(value => value - 17)
    observable.getValue().should.equal(25)
  })

  it("should allow to observe the value", () => {
    const spy = sinon.spy()
    observable.subscribe(spy)
    observable.setValue(17)
    spy.should.be.calledWith(observable)
    observable.updateValue((value) => value + 7)
    spy.should.be.calledTwice()
  })

  it("should receive updates after unsubscribe", () => {
    const spy = sinon.spy()
    observable.subscribe(spy)
    observable.setValue(17)
    observable.unsubscribe(spy)
    observable.setValue(22)
    spy.should.be.calledOnce()
  })
})
