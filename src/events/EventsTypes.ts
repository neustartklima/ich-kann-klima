import { LawId } from "../laws"
import { Citations } from "../citations"
import { Context } from "../store"
import { Details, Internals, Percent } from "../types"
import { Game } from "../game"

export type EventDefinition = {
  title: string
  description: string
  apply(context: Context): void
  probability(game: Game): Percent
  acknowledged?: boolean
  laws?: LawId[]
  citations?: Citations // TODO #79: Make mandatory
  details?: Details // TODO #79: Make mandatory
  internals?: Internals // TODO #79: Make mandatory
}
