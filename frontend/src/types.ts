type MioTons = number
type MrdEuro = number
type TsdPeople = number
type GWh = number

export type GameId = string

export type Game = {
  id: GameId,
  values: {
    co2Emmissions: MioTons
    stateDebt: MrdEuro
    unemployment: TsdPeople
    gdp: MrdEuro
    electrictyDemandTotal: GWh  
  }
}

export type LawId = string

export type Law = {
  id: LawId;
  name: string;
  description: string;
};
