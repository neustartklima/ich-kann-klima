import { JSDOM } from "jsdom"
import Thermometer from "./Thermometer.js"
import Observable from "../lib/Observable.js"

const { window } = new JSDOM('<html><body><div id="thermometer"/></body></html>', { runScripts: "outside-only" })
const document = window.document
const el = document.querySelector("#thermometer")

describe("Thermometer", () => {
  let thermometer
  let percentage
  
  beforeEach(async () => {
    percentage = Observable(20)
    thermometer = await Thermometer(el, percentage)
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
    percentage.value = 80
    el.querySelector(".capillary").getAttribute("height").should.equal("8")
  })

  it("should clamp values outside of the range", () => {
    percentage.value = -10
    el.querySelector(".capillary").getAttribute("height").should.equal("0")
    percentage.value = 120
    el.querySelector(".capillary").getAttribute("height").should.equal("10")
  })
})
