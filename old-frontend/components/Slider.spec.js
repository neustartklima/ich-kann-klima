import "should"
import Sinon from "sinon"
import "should-sinon"
import { JSDOM } from "jsdom"
import Slider from "./Slider.js"

const answers = [
  { co2: 2, text: "first" },
  { co2: 0, text: "second" },
  { co2: -1, text: "third" },
]

const sliderOptions = { left: 50, width: 400, handleWidth: 30 }

const { window } = new JSDOM('<html><body><div id="slider"/></body></html>', { runScripts: "outside-only" })
const document = window.document
const el = document.querySelector("#slider")

function slideTo(pos) {
  window.eval(`
    const el = document.querySelector("#slider")
    el.dispatchEvent(new MouseEvent("mousedown"))
    el.ownerDocument.dispatchEvent(new MouseEvent('mousemove', { clientX: ${pos} }))
    el.ownerDocument.dispatchEvent(new MouseEvent("mouseup"))
  `)
}

describe("Slider", () => {
  it("should generate options", () => {
    Slider(el, answers, () => {})
    Array.from(el.querySelectorAll("option")).length.should.equal(answers.length)
  })
  
  it("should provide some functions", () => {
    const slider = Slider(el, answers, () => {})
    slider.getPosition.should.be.instanceOf(Function)
    slider.getPercent.should.be.instanceOf(Function)
    slider.getText.should.be.instanceOf(Function)
    slider.getValue.should.be.instanceOf(Function)
  })

  it("should preselect the option with value 0", () => {
    const slider = Slider(el, answers, () => {}, sliderOptions)
    slider.getPosition().should.equal(1)
    slider.getValue().should.equal(0)
    el.querySelector(".handle").style.left.should.equal("235px")
  })

  it("should return the text of the selected option", () => {
    const slider = Slider(el, answers, () => {})
    slider.getText().should.equal(answers[1].text)
  })

  it("should handle mouse movement", () => {
    const slider = Slider(el, answers, () => {}, sliderOptions)
    slideTo(sliderOptions.width)
    slider.getPosition().should.equal(2)
  })

  it("should report movements to listener with negative relative value", () => {
    const listener = Sinon.spy()
    const slider = Slider(el, answers, listener, sliderOptions)
    slideTo(sliderOptions.width)
    listener.should.be.calledOnce()
    listener.should.be.calledWith(1)
    slideTo(0)
    listener.should.be.calledWith(-3)
  })
})
