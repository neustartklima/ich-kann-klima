import { Law } from "../laws"
import { Citations } from "../citations"
import { Context, Store } from "../store"
import { Details, Internals, Percent } from "../types"

export type EventDefinition = {
  title: string
  description: string
  apply(context: Context): void
  probability(store: Store): Percent
  acknowledged?: boolean
  laws?: Law[]
  citations?: Citations // TODO #79: Make mandatory
  details?: Details // TODO #79: Make mandatory
  internals?: Internals // TODO #79: Make mandatory
}
