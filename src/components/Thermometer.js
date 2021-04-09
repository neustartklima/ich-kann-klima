import { loadFile, loadCss } from "../lib/Components.js"
import { clamp } from "../lib/Math.js"

const src = import.meta.url

export default async function(el, observablePercentage) {
  el.innerHTML = await loadFile(src.replace(/\.js$/, ".svg"))
  await loadCss(src.replace(/\.js$/, ".css"))
  const capillary = el.querySelector(".capillary")
  observablePercentage.subscribe(setValue)

  const clampPercent = clamp(0, 100)

  function setValue(value) {
    capillary && capillary.setAttribute("height", clampPercent(value.getValue()) / 10)
  }

  return {
    getValue: observablePercentage.getValue,

    destroy: () => observablePercentage.unsubscribe(setValue),
  }
}
