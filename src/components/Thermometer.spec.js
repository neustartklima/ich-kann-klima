import { JSDOM } from "jsdom"
import Thermometer from "./Thermometer.js"
import Observable from "../lib/Observable.js"

const { window } = new JSDOM('<html><body><div id="thermometer"/></body></html>', { runScripts: "outside-only" })
const document = window.document
const el = document.querySelector("#thermometer")

describe("Thermometer", () => {
  let thermometer
  let value
  
  beforeEach(async () => {
    value = Observable(20)
    thermometer = await Thermometer(el, value)
  })

  afterEach(() => {
    thermometer.destroy()
  })

  it("should load svg", async() => {
    el.innerHTML.should.not.be.empty()
  })

  it("should set the initial value", () => {
    thermometer.getValue().should.equal(20)
  })

  it("should adapt height of capillary", () => {
    value.setValue(80)
    el.querySelector(".capillary").getAttribute("height").should.equal("8")
  })

  it("should clamp values outside of the range", () => {
    value.setValue(-10)
    el.querySelector(".capillary").getAttribute("height").should.equal("0")
    value.setValue(120)
    el.querySelector(".capillary").getAttribute("height").should.equal("10")
  })
})
