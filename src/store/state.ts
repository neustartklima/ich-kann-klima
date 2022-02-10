import { Game } from "../game"

export const state = {
  game: undefined as Game | undefined,
  tour: {
    active: true,
    step: "start",
  },
  activeRoom: "office",
}
