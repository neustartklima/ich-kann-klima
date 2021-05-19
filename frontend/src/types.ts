import { Context, Store } from "./store"

type MioTons = number
type MrdEuro = number
type TsdPeople = number
type TWh = number
export type Percent = number

export type WritableBaseParams = {
  co2budget: MioTons
  stateDebt: MrdEuro
  popularity: Percent

  co2emissions: MioTons
  unemployment: TsdPeople
  gdp: MrdEuro

  electricityDemand: TWh

  electricitySolar: TWh
  electricityWind: TWh
  electricityWater: TWh
  electricityCoal: TWh
  electricityBiomass: TWh
  electricityNuclear: TWh
}

export type BaseParams = WritableBaseParams & {
  electricityGas: TWh
}

export type LawId = string

export type LawLabel = "hidden" | "initial" | "Kernenergie"

export type LawDefinition = {
  title: string
  description: string
  labels?: LawLabel[]
  removeLawsWithLabels?: LawLabel[]
  effects(data: BaseParams, startYear: number, currentYear: number): Partial<BaseParams>

  /**
   * Current priority of this law.
   *
   * Will be used to filter and sort the proposed laws.
   *
   * The six laws with highest priority will be shown.
   * Laws with priority <= 0 will not be shown.
   * If no function is given, priority 1 is assumed.
   * @param game The current game.
   */
  priority?(game: Game): number
}

export type Law = LawDefinition & {
  id: LawId
}

export type LawReference = {
  lawId: LawId
  effectiveSince: number
}

export type AcceptedLaw = Law & { effectiveSince: number }

export type Event = {
  title: string
  description: string
  apply(context: Context): void
  probability(store: Store): Percent
}

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
}
