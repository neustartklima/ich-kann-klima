import { Game } from "../types"
import { allLaws } from "../laws"

export const state = {
  allLaws,
  game: undefined as Game | undefined,
}

export type State = typeof state
