import { Game, GameDefinition } from "../game"
import { startYear } from "../constants"
import { v1 as getUUID } from "uuid"
import { createBaseValues, defaultValues } from "../params"

export const initialGame = {
  currentYear: startYear,
  values: defaultValues,
  acceptedLaws: [],
  proposedLaws: [],
  rejectedLaws: [],
}

export function initGame(game: GameDefinition = initialGame, id = getUUID()): Game {
  return {
    id,
    currentYear: game.currentYear,
    acceptedLaws: game.acceptedLaws,
    proposedLaws: game.proposedLaws,
    rejectedLaws: game.rejectedLaws,
    values: createBaseValues(game.values),
    events: [],
    over: false,
  }
}
