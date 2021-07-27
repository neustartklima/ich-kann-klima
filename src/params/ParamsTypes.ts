import { Details, GramPerPsgrKm, Internals, MioPsgrKm, MioTons, MrdEuro, Percent, TsdPeople, TWh, Unit } from "../types"
import { Sources } from "../sources"

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

  sourcesDesc(): string {
    let result: string = ""
    for (const source of this.sources) {
      result =
        result +
        (source.title ? '"' + source.title + '"' : "(no title)") +
        (source.publisher ? ", " + source.publisher : "") +
        ", " +
        source.url +
        "; "
    }
    return result
  }
}

export type ParamsBase = Record<string, number>

type ValueMapper = (newVal: number) => number

const mapper = {
  MioTons: (newVal: MioTons) => (newVal < 0 ? 0 : newVal),
  TWh: (newVal: TWh) => (newVal < 0 ? 0 : newVal),
  MrdEuro: (newVal: MrdEuro) => newVal,
  TsdPeople: (newVal: TsdPeople) => (newVal < 0 ? 0 : newVal),
  Percent: (newVal: Percent) => (newVal > 100 ? 100 : newVal < 0 ? 0 : newVal),
  GramPerPsgrKm: (newVal: GramPerPsgrKm) => (newVal < 0 ? 0 : newVal),
  MioPsgrKm: (newVal: MioPsgrKm) => (newVal < 0 ? 0 : newVal)
}

export class WritableParam extends ParamDefinition {
  writable = true
  initialValue: number
  applyBounds: ValueMapper
  constructor(input: ParamInput & { initialValue: number }) {
    super(input)
    this.initialValue = input.initialValue
    this.applyBounds = mapper[input.unit]
  }
}

export class ComputedParam extends ParamDefinition {
  writable = false
  valueGetter: (data: ParamsBase) => number
  shouldInitiallyBe?: number
  constructor(input: ParamInput & { valueGetter: (data: ParamsBase) => number; shouldInitiallyBe?: number }) {
    super(input)
    this.valueGetter = input.valueGetter
    this.shouldInitiallyBe = input.shouldInitiallyBe
  }
}
