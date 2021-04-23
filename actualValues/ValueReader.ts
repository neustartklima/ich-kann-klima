import { readFileSync } from "fs"

interface ValueReader {
  valuesFor(year: number): number[]
  singleValue(year: number): number
}

export default function(filename: string): ValueReader {
  const data = Object.assign({}, ...readFileSync(filename)
    .toString().split("\n")
    .map((line) => line.trim()) // ignore surrounding whitespace
    .filter((line) => line && !line.startsWith("//")) // ignore empty lines and comments
    .map((line) => line.split(",").map((value) => value.trim()))
    .map((line) => {
      const year = line.shift()
      return { ["" + year]: line }
    })
  )

  return {
    valuesFor(year: number) {
      return data[year]
    },

    singleValue(year: number) {
      const value = data[year]
      return value && value[0]
    }
  }
}
