import Observable from "./lib/Observable.js"
import { clamp, getSum, getMax, getMin } from "./lib/Math.js"

export default (questions) => {  
  const max = getSum(questions, (question) => getMax(question.answers, (answer) => answer.co2))
  const min = getSum(questions, (question) => getMin(question.answers, (answer) => answer.co2))

  const clampPercent = clamp(0, 100)
  const factor = 100 / (max - min)
  const percentage = Observable(-min * factor)
  
  return {
    subscribe: percentage.subscribe,
    unsubscribe: percentage.unsubscribe,

    get value() {
      return percentage.value
    },

    add(offset) {
      percentage.value = clampPercent(percentage.value + offset * factor)
    },
  }
}
