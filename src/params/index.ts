import { Citations } from "../citations"
import { Details, Internals, Percent, Unit } from "../types"
import { paramDefinitions } from "./Params"
import { ComputedParam, ParamsBase, WritableParam } from "./ParamsTypes"

type EffectableContext = {
  values?: BaseParams
  dispatch: (actionName: string, payload?: unknown) => void
}

export type ParamDefinitions = typeof paramDefinitions

type RemoveNeverField<T> = {
  [P in keyof T as T[P] extends never ? never : P]: T[P]
}
type PickByType<T, C> = RemoveNeverField<{
  [Key in keyof T]: T[Key] extends C ? T[Key] : never
}>

type WritableParamDefinitions = PickByType<ParamDefinitions, WritableParam>
type ComputedParamDefinitions = PickByType<ParamDefinitions, ComputedParam>

const writableParamDefinitions = Object.entries(paramDefinitions)
  .filter((e) => e[1] instanceof WritableParam)
  .map((e) => e as [string, WritableParam])
  .reduce((newObj, e) => {
    newObj[e[0]] = e[1]
    return newObj
  }, {} as Record<string, WritableParam>) as WritableParamDefinitions

const computedParamDefinitions = Object.entries(paramDefinitions)
  .filter((e) => e[1] instanceof ComputedParam)
  .map((e) => e as [string, ComputedParam])
  .reduce((newObj, e) => {
    newObj[e[0]] = e[1]
    return newObj
  }, {} as Record<string, ComputedParam>) as ComputedParamDefinitions

export type WritableParamKey = keyof WritableParamDefinitions
type WritableParams = Record<WritableParamKey, number>
export type WritableBaseParams = WritableParams
export const writableParamKeys = Object.keys(writableParamDefinitions) as WritableParamKey[]

type ComputedParamKey = keyof ComputedParamDefinitions

export type ParamKey = WritableParamKey | ComputedParamKey
export const paramKeys = Object.keys(paramDefinitions) as ParamKey[]
type Params = Record<ParamKey, number>
export type BaseParams = Params

interface ParamEntryBase {
  name: ParamKey
  unit: Unit
  citations: Citations
  details: Details
  internals: Internals
  writable: boolean
}

class WritableParamEntry extends WritableParam implements ParamEntryBase {
  name: WritableParamKey
  constructor(param: WritableParam, name: string) {
    super(param)
    this.name = name as WritableParamKey
  }
}
export const writableParamList: WritableParamEntry[] = Object.entries(writableParamDefinitions).map(
  (e) => new WritableParamEntry(e[1], e[0] as WritableParamKey)
)

class ComputedParamEntry extends ComputedParam implements ParamEntryBase {
  name: ComputedParamKey
  constructor(param: ComputedParam, name: string) {
    super(param)
    this.name = name as ComputedParamKey
  }
}
export const computedParamList: ComputedParamEntry[] = Object.entries(computedParamDefinitions).map(
  (e) => new ComputedParamEntry(e[1], e[0] as ComputedParamKey)
)

type ParamEntry = WritableParamEntry | ComputedParamEntry
export const paramList: ParamEntry[] = Object.entries(paramDefinitions).map((e) =>
  e[1] instanceof WritableParam ? new WritableParamEntry(e[1], e[0]) : new ComputedParamEntry(e[1], e[0])
)

export const defaultValues: WritableParams = writableParamList.reduce((newObj, e) => {
  newObj[e.name] = e.initialValue
  return newObj
}, {} as WritableParams)

export const zeroParams: Params = paramList.reduce((newObj, p) => {
  newObj[p.name] = 0
  return newObj
}, {} as Params)

export function createBaseValues(values: WritableParams): Params {
  const result: ParamsBase = { ...values }
  Object.entries(computedParamDefinitions).forEach((e) =>
    Object.defineProperty(result, e[0], {
      enumerable: true,
      get: () => {
        return e[1].valueGetter(result)
      },
    })
  )
  return result as Params
}

export function copyValues(values: Params): Params {
  const result: Params = { ...values }
  return result
}

export function dispatch(actionName: string, payload?: unknown) {
  return {
    type: "dispatch" as const,
    condition: true as boolean,

    if(condition: boolean) {
      this.condition = condition
      return this
    },

    apply(context: EffectableContext): void {
      if (this.condition) {
        context.dispatch(actionName, payload)
      }
    },
  }
}

export function modify(name: keyof WritableBaseParams) {
  return {
    type: "modify" as const,
    name,
    value: 0 as number,
    percent: 0 as Percent,
    absolute: undefined as undefined | number,
    condition: true as boolean,

    byPercent(percent: Percent) {
      this.percent = percent
      return this
    },

    byValue(value: number) {
      this.value = value
      return this
    },

    setValue(value: number) {
      this.absolute = value
      return this
    },

    if(condition: boolean) {
      this.condition = condition
      return this
    },

    getOldNew(values: BaseParams) {
      const n = this.name
      const oldVal = values[n]
      if (!this.condition) {
        return { oldVal, newVal: oldVal }
      }
      const pd: WritableParam = paramDefinitions[n]
      const unbounded =
        this.absolute != undefined ? this.absolute : oldVal + (this.value || (oldVal * this.percent!) / 100)
      const newVal = pd.applyBounds(unbounded)
      return { oldVal, newVal }
    },

    getChange(values: BaseParams): number {
      if (!this.condition) {
        return 0
      }
      const { oldVal, newVal } = this.getOldNew(values)
      return newVal - oldVal
    },

    apply(context: EffectableContext): void {
      if (context.values != undefined && this.condition) {
        const { newVal } = this.getOldNew(context.values)
        context.values[this.name] = newVal
      }
    },
  }
}

export function transfer(to: keyof WritableBaseParams, from: keyof WritableBaseParams) {
  if (paramDefinitions[to].unit != paramDefinitions[from].unit)
    throw new Error("Change 'transfer' can only be used for parameters with the same unit.")
  return {
    type: "transfer" as const,
    to,
    from,
    value: 0 as number,
    percent: 0 as Percent,
    condition: true as boolean,

    byPercent(percent: Percent) {
      this.percent = percent
      return this
    },

    byValue(value: number) {
      this.value = value
      return this
    },

    if(condition: boolean) {
      this.condition = condition
      return this
    },

    getEffect(values: BaseParams) {
      const oldTo = values[this.to]
      const oldFrom = values[this.from]
      if (!this.condition) {
        return { oldTo, oldFrom, newTo: oldTo, newFrom: oldFrom }
      }
      const pdTo: WritableParam = paramDefinitions[this.to]
      const pdFrom: WritableParam = paramDefinitions[this.from]
      const full = this.value || (oldTo * this.percent!) / 100
      const reducedTo = pdTo.applyBounds(oldTo + full) - oldTo
      const reducedBoth = -pdFrom.applyBounds(oldFrom - reducedTo) + oldFrom
      const newTo = oldTo + reducedBoth
      const newFrom = oldFrom - reducedBoth
      return { oldTo, newTo, oldFrom, newFrom }
    },

    apply(context: EffectableContext): void {
      if (context.values != undefined && this.condition) {
        const { newTo, newFrom } = this.getEffect(context.values)
        context.values[this.to] = newTo
        context.values[this.from] = newFrom
      }
    },
  }
}

export type Change = ReturnType<typeof modify> | ReturnType<typeof dispatch> | ReturnType<typeof transfer>

export function applyEffects(context: EffectableContext, changes: Change[]): void {
  changes.filter((change) => change.condition).forEach((change) => change.apply(context))
}
