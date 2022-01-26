import { objectToArrayWithId } from "../lib/utils"
import { BaseParams, ParamKey, paramKeys } from "../params"
//import { agricultureLaws } from "./agriculture"
//import { buildingsLaws } from "./buildings"
import { energyLaws } from "./energy"
import { generalLaws } from "./general"
//import { industryLaws } from "./industry"
import { defaultEffort, EffortFunc, LawDefinition } from "./LawsTypes"
//import { mobilityLaws } from "./mobility"

const allLawsObj = {
  ...generalLaws,
  ...energyLaws,
  // ...mobilityLaws,
  // ...industryLaws,
  // ...buildingsLaws,
  // ...agricultureLaws,
}

export type LawId = keyof typeof allLawsObj
export const lawIds = Object.keys(allLawsObj) as LawId[]

export type Law = LawDefinition & {
  id: LawId
  effort: EffortFunc
}

export type LawReference = {
  lawId: LawId
  effectiveSince: number
}

export type AcceptedLaw = Law & { effectiveSince: number }
export type LawView = Law & { pos: number; zIndex: number; effortComment: string }

export function lawList(modules: Record<LawId, LawDefinition>): Law[] {
  return objectToArrayWithId(modules).map((l) => ({
    ...l,
    effort: l.effort || defaultEffort,
  }))
}

export const allLaws: Law[] = lawList(allLawsObj)

export function getLaw(lawId: LawId): Law {
  const law = allLaws.find((law) => law.id === lawId)
  if (law) {
    return law
  }
  throw Error(`Law #${lawId} not found`)
}

export function getAcceptedLaw(lawRef: LawReference): AcceptedLaw {
  const law = getLaw(lawRef.lawId)
  if (law) {
    return { ...law, effectiveSince: lawRef.effectiveSince }
  }
  throw Error(`Law #${lawRef.lawId} not found`)
}

export function idsToLaws(lawIds: LawId[]): Law[] {
  return lawIds
    .map((lawId) => {
      const law = allLaws.find((law) => law.id === lawId)
      if (!law) {
        console.error(`Inconsistency: Proposed law #${lawId} not found`)
      }
      return law as Law
    })
    .filter((a) => a)
}

/** A set of parameters per law for some laws. */
export type ParamsOfLaws = { [lawId in LawId]?: BaseParams }

/** Helper function to generate ParamsOfLaws for some laws.
 *
 * @param laws The laws for which to generate the params.
 * @param perLaw A function called once for each law generating an intermediate result.
 * @param perParam A function called once for each law and paramKey.
 * @returns A ParamsOfLaws containing the results.
 */
export const getParamsOfLaws = <L extends Law, R>(
  laws: L[],
  perLaw: (law: L) => R,
  perParam: (law: L, lawResult: R, paramKey: ParamKey) => number
): ParamsOfLaws =>
  Object.fromEntries(
    laws.map((law) => {
      const lawResult: R = perLaw(law)
      const params = Object.fromEntries(paramKeys.map((k) => [k, perParam(law, lawResult, k)])) as BaseParams
      return [law.id, params]
    })
  )
