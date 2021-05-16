import { Event, Game } from "../types"
import { allLaws } from "../laws"

export const state = {
  allLaws,
  game: undefined as Game | undefined,
  visibleEvent: null as Event | null,
}
