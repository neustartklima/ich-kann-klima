import { Event, Game } from "../types"
import { allLaws } from "../laws"
import { h } from "@vue/runtime-core"

export const state = {
  allLaws,
  game: undefined as Game | undefined,
  visibleEvent: null as Event | null,
}

export type State = typeof state
