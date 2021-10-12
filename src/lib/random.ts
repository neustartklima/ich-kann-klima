import { Game } from "../game"
const seedrandom = require("seedrandom")

let rnd = new seedrandom()

export let random = () => Math.abs(rnd())

export function seedWithGame(game: Game): void {
  rnd = new seedrandom(game.id)
}

export function shuffleNumbers(length: number) {
  const numbers = [...Array(length).keys()].map((n) => n / length)
  for (let i = length - 1; i > 0; i--) {
    const j = Math.floor(random() * i)
    ;[numbers[i], numbers[j]] = [numbers[j], numbers[i]]
  }
  return {
    length,
    [Symbol.iterator]: function* () {
      yield numbers.shift()
    },
    values: () => numbers,
  }
}
