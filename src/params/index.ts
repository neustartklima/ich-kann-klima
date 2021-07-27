import { ComputedParam, ParamsBase, WritableParam } from "./ParamsTypes"
import { paramDefinitions } from "./Params"
import { Sources } from "../sources"
import { Details, Internals, Percent, Unit } from "../types"
import { Game } from "../game"

export type ParamDefinitions = typeof paramDefinitions

type RemoveNeverField<T> = {
  [P in keyof T as T[P] extends never ? never : P]: T[P]
}
type PickByType<T, C> = RemoveNeverField<
  {
    [Key in keyof T]: T[Key] extends C ? T[Key] : never
  }
>

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

type WritableParamKey = keyof WritableParamDefinitions
type WritableParams = Record<WritableParamKey, number>
export type WritableBaseParams = WritableParams

type ComputedParamKey = keyof ComputedParamDefinitions

type ParamKey = WritableParamKey | ComputedParamKey
export const paramKeys = Object.keys(paramDefinitions) as ParamKey[]
type Params = Record<ParamKey, number>
export type BaseParams = Params

interface ParamEntryBase {
  name: ParamKey
  unit: Unit
  sources: Sources
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

export const defaultValues: WritableParams = writableParamList.reduce(
  (newObj, e) => ({ ...newObj, [e.name]: e.initialValue }),
  {} as WritableParams
)

export function createBaseValues(values: WritableParams): Params {
  const result: ParamsBase = { ...values }
  Object.entries(computedParamDefinitions).forEach((e) =>
    Object.defineProperty(result, e[0], {
      get: () => {
        return e[1].valueGetter(result)
      },
    })
  )
  return result as Params
}

export function modify(name: keyof WritableBaseParams) {
  return {
    name,
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
  }
}

export type Change = ReturnType<typeof modify>

export function applyEffects(values: BaseParams, changes: Change[]): BaseParams {
  changes
    .filter((change) => change.condition)
    .forEach((change) => {
      values[change.name] += change.value || (values[change.name] * change.percent!) / 100
    })
  return values
}
