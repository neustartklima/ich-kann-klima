import { Game, GameId, Law } from "./types";

export default function () {
  return {
    loadGame(id: GameId): Game {
      const storedItem = localStorage.getItem("game")
      if (!storedItem) {
        throw Error("Game not found")
      }
      return JSON.parse(storedItem)
    },

    saveGame(game: Game) {
      localStorage.setItem("game", JSON.stringify(game))
    },
  }
}
