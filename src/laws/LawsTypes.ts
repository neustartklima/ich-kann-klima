import { Game } from "../game"
import { BaseParams, Change } from "../params"
import { Citations } from "../citations"
import { Details, Internals, Percent } from "../types"

export type LawLabel =
  | "hidden"
  | "initial"
  | "Kernenergie"
  | "TempolimitAutobahn"
  | "WindkraftAbstandsregel"
  | "WindkraftSubvention"

export type EffectsFunc = (data: BaseParams, startYear: number, currentYear: number) => Change[]
export type PriorityFunc = (game: Game) => Percent

export type LawDefinition = {
  title: string
  description: string
  labels?: LawLabel[]
  removeLawsWithLabels?: LawLabel[]
  treatAfterLabels?: LawLabel[]
  effects: EffectsFunc
  /** Used to filter and sort the proposed laws. */
  priority: PriorityFunc
  citations?: Citations // TODO #79: Make mandatory
  details?: Details // TODO #79: Make mandatory
  internals?: Internals // TODO #79: Make mandatory
}
