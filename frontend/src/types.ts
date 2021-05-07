type MioTons = number
type MrdEuro = number
type TsdPeople = number
type GWh = number
type Percent = number

export type BaseParams = {
  co2emmissions: MioTons
  stateDebt: MrdEuro
  popularity: Percent
  unemployment: TsdPeople
  gdp: MrdEuro
  electricityDemand: GWh
}

export type LawId = string

export type LawDefinition = {
  title: string
  description: string
  effects(data: BaseParams, startYear: number, currentYear: number): Partial<BaseParams>
}

export type Law = LawDefinition & {
  id: LawId
}

export type LawReference = {
  lawId: LawId
  effectiveSince: number
}

export type Event = {
  title: string
  description: string
  effects(data: BaseParams, startYear: number, currentYear: number): Partial<BaseParams>
}

export type GameId = string

export type Game = {
  id: GameId
  currentYear: number
  values: BaseParams,
  acceptedLaws: LawReference[]
}
