export function clamp(minValue, maxValue) {
  return function (value) {
    return Math.min(Math.max(value, minValue), maxValue)
  }
}

export function getSum(array, func = (val) => val) {
  return array.reduce((sum, current) => sum + func(current), 0)
}

export function getMax(array, func = (val) => val) {
  return array.reduce((max, current) => Math.max(max, func(current)), -1e38)
}

export function getMin(array, func = (val) => val) {
  return array.reduce((min, current) => Math.min(min, func(current)), 1e38)
}
