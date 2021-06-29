import { Context, Store } from "./store"

export type MioTons = number
export type Euro = number
export type MrdEuro = number
export type TsdPeople = number
export type TWh = number
export type Percent = number

export type MioRides = number
export type MioPsgrKm = number
export type GramPerPsgrKm = number

export type WritableBaseParams = {
  co2budget: MioTons
  stateDebt: MrdEuro
  popularity: Percent

  numberOfCitizens: TsdPeople
  unemployment: TsdPeople
  gdp: MrdEuro

  carUsage: MioPsgrKm
  carEmissionFactor: GramPerPsgrKm
  carRenewablePercentage: Percent
  publicLocalUsage: MioPsgrKm
  publicLocalCapacity: MioPsgrKm
  publicNationalUsage: MioPsgrKm
  publicNationalCapacity: MioPsgrKm
  airDomesticUsage: MioPsgrKm
  airIntlUsage: MioPsgrKm

  electricityDemand: TWh

  electricitySolar: TWh
  electricityWind: TWh
  electricityWater: TWh
  electricityHardCoal: TWh
  electricityBrownCoal: TWh
  electricityBiomass: TWh
  electricityNuclear: TWh

  co2emissionsIndustry: MioTons
  co2emissionsBuildings: MioTons
  co2emissionsAgriculture: MioTons
  co2emissionsOthers: MioTons
}

export type BaseParams = WritableBaseParams & {
  electricityCoal: TWh
  electricityGas: TWh
  co2emissionsEnergy: MioTons
  passengerTransportUsage: MioPsgrKm
  co2emissionsStreetVehicles: MioTons
  co2emissionsMobility: MioTons
  co2emissions: MioTons
}

export type LawId = string

export type LawLabel = "hidden" | "initial" | "Kernenergie" | "TempolimitAutobahn"

export type EffectsFunc = (data: BaseParams, startYear: number, currentYear: number) => Partial<WritableBaseParams>
export type PriorityFunc = (game: Game) => Percent

export type LawDefinition = {
  title: string
  description: string
  labels?: LawLabel[]
  removeLawsWithLabels?: LawLabel[]
  treatAfterLabels?: LawLabel[]
  effects: EffectsFunc

  /**
   * Current priority of this law.
   *
   * Will be used to filter and sort the proposed laws.
   *
   * The six laws with highest priority will be shown.
   * Laws with priority <= 0 will not be shown.
   * @param game The current game.
   */
  priority: PriorityFunc
}

export type Law = LawDefinition & {
  id: LawId
}

export type LawReference = {
  lawId: LawId
  effectiveSince: number
}

export type AcceptedLaw = Law & { effectiveSince: number }

export type EventId = string
export type EventDefinition = {
  title: string
  description: string
  apply(context: Context): void
  probability(store: Store): Percent
  acknowledged?: boolean
}

export type Event = EventDefinition & {
  id: EventId
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
  events: Event[]
  over: boolean
}
