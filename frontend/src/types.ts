type MioTons = number
type MrdEuro = number
type TsdPeople = number
type TWh = number
type Percent = number

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

export type LawLabel = "hidden" | "initial"

export type LawDefinition = {
  title: string
  description: string
  labels?: LawLabel[]
  effects(data: BaseParams, startYear: number, currentYear: number): Partial<BaseParams>
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
  effects(data: BaseParams, startYear: number, currentYear: number): Partial<BaseParams>
}

export type GameId = string

export type GameDefinition = {
  currentYear: number
  values: WritableBaseParams
  acceptedLaws: LawReference[]
}

export type Game = {
  id: GameId
  currentYear: number
  values: BaseParams
  acceptedLaws: LawReference[]
}
