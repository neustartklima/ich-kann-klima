import {Converter} from "showdown"

const converter = new Converter()

function numSequence(amount: number): number[] {
  if (amount > 0) {
    return [...Array(amount)].map((_, i) => i)
  } else {
    return []
  }
}

export function getZIndexes(numPlaces: number, centerPos: number): number[] {
  const descending = numPlaces - centerPos - 1
  return [...numSequence(centerPos), Math.max(centerPos, descending), ...numSequence(descending).reverse()]
}

export function markdown(text: TemplateStringsArray): string {
  let strings = text[0].split("\n")
  if (strings[0].length === 0) {
    strings.shift()
  }
  const indent = strings[0].match(/^(\s+)/)
  if (indent && !strings.filter(s => s.trim()).some(s => !s.startsWith(indent[1]))) {
    strings = strings.map(s => s.replace(indent[1], ""))
  }

  return converter.makeHtml(strings.join("\n"))
}