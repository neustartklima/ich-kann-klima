import { Game } from "../game"

const explicitMode = localStorage.getItem("devMode")

export const state = {
  game: undefined as Game | undefined,
  tour: {
    active: true,
    step: "start",
  },
  activeRoom: "office",
  devMode: explicitMode === "true" || (explicitMode === null && import.meta.env.DEV),
}
