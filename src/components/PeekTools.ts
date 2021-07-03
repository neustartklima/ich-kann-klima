import { applyEffects } from "../Calculator"
import { createBaseValues } from "../model"
import { BaseParams, Game, Law, WritableBaseParams } from "../types"

function genCompare(a: number | string, b: number | string) {
  if (a < b) return -1
  if (a > b) return 1
  return 0
}

export type LawSortCols = "state" | "id" | "priority"

type IsWritable<Param> = Param extends keyof WritableBaseParams ? true : false

type PeekOption<Param extends keyof BaseParams> = {
  unit: string
  writable: IsWritable<Param>
}
const o = <Param extends keyof BaseParams>(unit: string, writable: IsWritable<Param>): PeekOption<Param> => ({
  unit,
  writable,
})

type PeekOptions = {
  [Param in keyof BaseParams]: PeekOption<Param>
}

const peekOptions: PeekOptions = {
  co2budget: o("MioTons", true),
  co2emissionsIndustry: o("MioTons", true),
  co2emissionsStreetVehicles: o("MioTons", false),
  co2emissionsMobility: o("MioTons", false),
  co2emissionsBuildings: o("MioTons", true),
  co2emissionsAgriculture: o("MioTons", true),
  co2emissionsOthers: o("MioTons", true),
  co2emissionsEnergy: o("MioTons", false),
  co2emissions: o("MioTons", false),
  electricityDemand: o("TWh/a", true),
  electricitySolar: o("TWh/a", true),
  electricityWind: o("TWh/a", true),
  electricityWindOnshoreMaxNew: o("TWh/a", true),
  electricityWater: o("TWh/a", true),
  electricityBiomass: o("TWh/a", true),
  electricityNuclear: o("TWh/a", true),
  electricityHardCoal: o("TWh/a", true),
  electricityBrownCoal: o("TWh/a", true),
  electricityCoal: o("TWh/a", false),
  electricityGas: o("TWh/a", false),
  carEmissionFactor: o("GramPerPsgrKm", true),
  carUsage: o("MioPsgrKm", true),
  carRenewablePercentage: o("Percent", true),
  publicLocalUsage: o("MioPsgrKm", true),
  publicLocalCapacity: o("MioPsgrKm", true),
  publicNationalUsage: o("MioPsgrKm", true),
  publicNationalCapacity: o("MioPsgrKm", true),
  airDomesticUsage: o("MioPsgrKm", true),
  airIntlUsage: o("MioPsgrKm", true),
  passengerTransportUsage: o("MioPsgrKm", false),
  stateDebt: o("MrdEuro", true),
  popularity: o("Percent", true),
  numberOfCitizens: o("TsdPeople", true),
  unemployment: o("TsdPeople", true),
  gdp: o("MrdEuro", true),
}

export type ValueRow = {
  id: keyof BaseParams
  unit: string
  value: string
  effect: string
  class: "writable" | "calculated"
}

export function getSortedValues(values: BaseParams, effects: Partial<WritableBaseParams>): ValueRow[] {
  const nextValues = createBaseValues(values)
  applyEffects(nextValues, effects)

  function valueStr(key: keyof BaseParams): string {
    return values[key].toFixed(2)
  }
  function formatEffect(effect: number) {
    return (effect > 0 ? "+" : "") + effect.toFixed(2)
  }

  function effectStr(key: keyof BaseParams): string {
    const effect = effects[key as keyof WritableBaseParams]
    const valDiff = nextValues[key] - values[key]
    if (effect && Math.abs(effect - valDiff) < 0.001) return formatEffect(effect)
    if (effect) return formatEffect(effect) + " / " + formatEffect(valDiff)
    if (valDiff != 0) return formatEffect(valDiff)
    return ""
  }

  const peekOpts = Object.keys(peekOptions) as (keyof BaseParams)[]
  const result: ValueRow[] = peekOpts.map((key) => ({
    id: key,
    unit: peekOptions[key].unit,
    value: valueStr(key),
    effect: effectStr(key),
    class: peekOptions[key].writable ? "writable" : "calculated",
  }))
  return result
}

export type LawRow = {
  id: string
  priority: string
  state: string
}

export function getSortedLaws(game: Game, sortCol: LawSortCols, sortDir: number, allLaws: Law[]): LawRow[] {
  const proposed = game.proposedLaws
  const accepted = game.acceptedLaws.map((lawRef) => lawRef.lawId)
  const rejected = game.rejectedLaws
  function findState(lawId: string) {
    if (accepted.includes(lawId)) return "a"
    if (proposed.includes(lawId)) return "p"
    if (rejected.includes(lawId)) return "r"
    return "x"
  }
  return allLaws
    .map((law) => ({
      id: law.id,
      priority: law.priority(game),
      state: findState(law.id),
    }))
    .sort((a, b) => genCompare(a[sortCol], b[sortCol]) * sortDir)
    .map((law) => ({ ...law, priority: law.priority.toFixed(2) }))
}
