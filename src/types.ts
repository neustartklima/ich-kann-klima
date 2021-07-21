import { Context, Store } from "./store"

export type LocalPath = string
export type Html = string

export class Source {
  url: URL
  title?: string // TODO #73: Make mandatory
  publisher?: string
  authors?: string
  date?: Date
  comment?: Html
  internalComment?: Html
  localCopy?: LocalPath
  referringUrl?: URL
  archiveUrl?: URL
  archiveNotPossible?: boolean
  constructor(input: {
    url: string
    title?: string
    publisher?: string
    authors?: string
    date?: string
    comment?: Html
    internalComment?: Html
    localCopy?: string
    referringUrl?: string
    archiveUrl?: string
    archiveNotPossible?: boolean
  }) {
    this.url = new URL(input.url)
    this.title = input.title
    this.publisher = input.publisher
    this.authors = input.authors
    this.date = input.date ? new Date(input.date) : undefined
    this.comment = input.comment
    this.internalComment = input.internalComment
    this.localCopy = input.localCopy
    this.referringUrl = input.referringUrl ? new URL(input.referringUrl) : undefined
    this.archiveUrl = input.archiveUrl ? new URL(input.archiveUrl) : undefined
    this.archiveNotPossible = input.archiveNotPossible
  }
}
export type Sources = Source[]

export type Details = Html
export type Internals = Html

export type Unit = "MioTons" | "TWh" | "MrdEuro" | "TsdPeople" | "Percent"

type ParamInput = {
  unit: Unit
  sources?: Sources
  details?: Details
  internals?: Internals
}

export abstract class ParamDefinition {
  unit: Unit
  sources: Sources
  details: Details
  internals: Internals
  abstract writable: boolean
  constructor(input: ParamInput) {
    this.unit = input.unit
    this.sources = input.sources ? input.sources : []
    this.details = input.details ? input.details : ""
    this.internals = input.internals ? input.internals : ""
  }
}

export type ParamsBase = Record<string, number>

export class WritableParam extends ParamDefinition {
  writable = true
  initialValue: number
  constructor(input: ParamInput & { initialValue: number }) {
    super(input)
    this.initialValue = input.initialValue
  }
}

export class ComputedParam extends ParamDefinition {
  writable = false
  valueGetter: (data: ParamsBase) => number
  constructor(input: ParamInput & { valueGetter: (data: ParamsBase) => number }) {
    super(input)
    this.valueGetter = input.valueGetter
  }
}

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
  electricityWindOnshoreMaxNew: TWh
  electricityWater: TWh
  electricityHardCoal: TWh
  electricityBrownCoal: TWh
  electricityBiomass: TWh
  electricityNuclear: TWh

  buildingsPrivateDemand: TWh
  buildingsIndustryDemand: TWh
  buildingsSourceBio: TWh
  buildingsSourceOil: TWh
  buildingsSourceTele: TWh

  co2emissionsIndustry: MioTons
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
  buildingsDemand: TWh
  buildingsSourceGas: TWh
  co2emissionsBuildings: MioTons
  co2emissions: MioTons
}

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

export type EventId = string
export type EventDefinition = {
  title: string
  description: string
  apply(context: Context): void
  probability(store: Store): Percent
  acknowledged?: boolean
  laws?: Law[]
  sources?: Sources // TODO #73: Make mandatory
  details?: Details // TODO #73: Make mandatory
  internals?: Internals // TODO #73: Make mandatory
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
