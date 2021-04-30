import { Game } from "../types"
import { allLaws } from "../allLaws"

export const state = {
  allLaws,
  game: undefined as Game | undefined,
}

export type State = typeof state
