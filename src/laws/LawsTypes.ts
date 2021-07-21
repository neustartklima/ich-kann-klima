import { Game } from "../game"
import { BaseParams, WritableBaseParams } from "../params"
import { Sources } from "../sources"
import { Details, Internals, Percent } from "../types"

export type LawId = string

export type LawLabel =
  | "hidden"
  | "initial"
  | "Kernenergie"
  | "TempolimitAutobahn"
  | "WindkraftAbstandsregel"
  | "WindkraftSubvention"

export type EffectsFunc = (data: BaseParams, startYear: number, currentYear: number) => Partial<WritableBaseParams>
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
  sources?: Sources // TODO #73: Make mandatory
  details?: Details // TODO #73: Make mandatory
  internals?: Internals // TODO #73: Make mandatory
}

export type Law = LawDefinition & {
  id: LawId
}

export type LawReference = {
  lawId: LawId
  effectiveSince: number
}

export type AcceptedLaw = Law & { effectiveSince: number }
export type LawView = Law & { pos: number; zIndex: number }
