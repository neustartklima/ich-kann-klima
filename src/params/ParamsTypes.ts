import { Details, GramPerPsgrKm, Internals, MioPsgrKm, MioTons, MrdEuro, Percent, TsdPeople, TWh, Unit } from "../types"
import { Citations, citationsDescription } from "../citations"

type ParamInput = {
  unit: Unit
  citations?: Citations
  details?: Details
  internals?: Internals
}

export abstract class ParamDefinition {
  unit: Unit
  citations: Citations
  details: Details
  internals: Internals
  abstract writable: boolean
  constructor(input: ParamInput) {
    this.unit = input.unit
    this.citations = input.citations ? input.citations : []
    this.details = input.details ? input.details : ""
    this.internals = input.internals ? input.internals : ""
  }

  citationsDesc(): string {
    return citationsDescription(this.citations)
  }
}

export type ParamsBase = Record<string, number>

type ValueMapper = (newVal: number) => number

const applyBoundsPerUnit = {
  MioTons: (newVal: MioTons) => (newVal < 0 ? 0 : newVal),
  TWh: (newVal: TWh) => (newVal < 0 ? 0 : newVal),
  MrdEuro: (newVal: MrdEuro) => newVal,
  TsdPeople: (newVal: TsdPeople) => (newVal < 0 ? 0 : newVal),
  Percent: (newVal: Percent) => (newVal > 100 ? 100 : newVal < 0 ? 0 : newVal),
  GramPerPsgrKm: (newVal: GramPerPsgrKm) => (newVal < 0 ? 0 : newVal),
  MioPsgrKm: (newVal: MioPsgrKm) => (newVal < 0 ? 0 : newVal),
}

export class WritableParam extends ParamDefinition {
  writable = true
  initialValue: number
  applyBounds: ValueMapper
  constructor(input: ParamInput & { initialValue: number }) {
    super(input)
    this.initialValue = input.initialValue
    this.applyBounds = applyBoundsPerUnit[input.unit]
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
