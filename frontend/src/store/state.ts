import { Law, LawId, Game } from "../types"
import { allLaws } from "../allLaws"

export const state = {
  allLaws,
  game: undefined as Game | undefined,
  acceptedLaws: [] as LawId[],
}

export type State = typeof state
