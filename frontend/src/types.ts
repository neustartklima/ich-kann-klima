type MioTons = number
type MrdEuro = number
type TsdPeople = number
type GWh = number

export type LawId = string

export type Law = {
  id: LawId
  name: string
  description: string
}

export type LawReference = {
  lawId: LawId
  effectiveSince: number
}

export type GameId = string

export type Game = {
  id: GameId
  currentYear: number
  values: {
    co2Emmissions: MioTons
    stateDebt: MrdEuro
    unemployment: TsdPeople
    gdp: MrdEuro
    electrictyDemandTotal: GWh
  },
  acceptedLaws: LawReference[]
}
