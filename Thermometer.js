export default function Thermometer(el, questions) {
  const getSum = (array, func) => array.reduce((sum, current) => sum + func(current), 0)
  const getMax = (array, func) => array.reduce((max, current) => Math.max(max, func(current)), -1e38)
  const getMin = (array, func) => array.reduce((min, current) => Math.min(min, func(current)), 1e38)
  
  const max = getSum(questions, (question) => getMax(question.answers, (answer) => answer.co2))
  const min = getSum(questions, (question) => getMin(question.answers, (answer) => answer.co2))

  let factor = 10 / (max - min)
  let value = 10 + min * factor

  el.setAttribute("height", value)

  return {
    addCO2Reduction: (offset) => el.setAttribute("height", value += +offset * factor),
    getValue: () => value * 10
  }
}
