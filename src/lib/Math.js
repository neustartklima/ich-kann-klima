export function clamp(minValue, maxValue) {
  return function (value) {
    return Math.min(Math.max(value, minValue), maxValue)
  }
}
