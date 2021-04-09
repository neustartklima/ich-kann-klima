import Observable from "./lib/Observable.js"
import { clamp } from "./lib/Math.js"

export default (questions) => {
  const getSum = (array, func) => array.reduce((sum, current) => sum + func(current), 0)
  const getMax = (array, func) => array.reduce((max, current) => Math.max(max, func(current)), -1e38)
  const getMin = (array, func) => array.reduce((min, current) => Math.min(min, func(current)), 1e38)
  
  const max = getSum(questions, (question) => getMax(question.answers, (answer) => answer.co2))
  const min = getSum(questions, (question) => getMin(question.answers, (answer) => answer.co2))

  const clampPercent = clamp(0, 100)
  const factor = 100 / (max - min)
  let value = Observable(-min * factor)
  value.subscribe((observable) => observable.setValue(clampPercent(observable.getValue())))

  return {
    ...value,
    add: (offset) => value.updateValue(value => value + offset * factor),
  }
}
