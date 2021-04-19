import { readFileSync } from "fs"

export default function(filename: string) {
  const data = Object.assign({}, ...readFileSync(filename)
    .toString().split("\n")
    .map((line) => line.trim()) // ignore surrounding whitespace
    .filter((line) => line && !line.startsWith("//")) // ignore empty lines and comments
    .map((line) => line.split(",").map((value) => value.trim()))
    .map((line) => {
      const year = line.shift()
      return { [year]: line }
    })
  )

  return {
    valuesFor(year: number): number[] {
      return data[year]
    },

    singleValue(year: number): number {
      const value = data[year]
      return value && value[0]
    }
  }
}
