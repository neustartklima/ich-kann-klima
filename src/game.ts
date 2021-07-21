import { Event } from "./events"
import { LawId, LawReference } from "./laws"
import { BaseParams, WritableBaseParams } from "./params"

export type GameId = string

export type GameDefinition = {
  currentYear: number
  values: WritableBaseParams
  acceptedLaws: LawReference[]
  proposedLaws: LawId[]
  rejectedLaws: LawId[]
}

export type Game = {
  id: GameId
  currentYear: number
  values: BaseParams
  acceptedLaws: LawReference[]
  proposedLaws: LawId[]
  rejectedLaws: LawId[]
  events: Event[]
  over: boolean
}
