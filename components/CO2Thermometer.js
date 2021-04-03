const src = import.meta.url

export default function(el, questions) {
  const getSum = (array, func) => array.reduce((sum, current) => sum + func(current), 0)
  const getMax = (array, func) => array.reduce((max, current) => Math.max(max, func(current)), -1e38)
  const getMin = (array, func) => array.reduce((min, current) => Math.min(min, func(current)), 1e38)
  
  const max = getSum(questions, (question) => getMax(question.answers, (answer) => answer.co2))
  const min = getSum(questions, (question) => getMin(question.answers, (answer) => answer.co2))

  let capillary
  let factor = 10 / (max - min)
  let value = 10 + min * factor

  async function loadFile(name) {
    const response = await fetch(name)
    const content = await response.text()
    if (response.ok) {
      return content
    }
    console.error(`'${name}' could not be loaded (${response.status} ${response.statusText})`, content)
  }

  async function loadContent() {
    el.innerHTML = await loadFile(src.replace(/\.js$/, ".svg"))
    capillary = el.querySelector(".capillary")
    const styleElement = document.createElement("style")
    styleElement.innerHTML = await loadFile(src.replace(/\.js$/, ".css"))
    document.head.appendChild(styleElement)
  }

  async function setValue(newValue) {
    await loaded
    capillary.setAttribute("height", value += newValue)
  }

  const loaded = loadContent().then(() => {
    setValue(0)
  })

  return {
    addCO2Reduction: (offset) => setValue(+offset * factor),
    getValue: () => value * 10
  }
}
