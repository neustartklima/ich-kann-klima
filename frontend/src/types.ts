type MioTons = number
type MrdEuro = number
type TsdPeople = number
type GWh = number

export type BaseParams = {
  co2emmissions: MioTons
  stateDebt: MrdEuro
  unemployment: TsdPeople
  gdp: MrdEuro
  electricityDemand: GWh
}

export type LawId = string

export type Law = {
  id: LawId
  title: string
  description: string
  effects(data: BaseParams, startYear: number, currentYear: number): Partial<BaseParams>
}

export type LawReference = {
  lawId: LawId
  effectiveSince: number
}

export type GameId = string

export type Game = {
  id: GameId
  currentYear: number
  values: BaseParams,
  acceptedLaws: LawReference[]
}
