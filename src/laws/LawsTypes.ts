import { Citations } from "../citations"
import { defaultEffortDuration } from "../constants"
import { Game } from "../game"
import { Duration, months } from "../lib/Temporal"
import { Change } from "../params"
import { Details, Internals, Percent } from "../types"

export type LawLabel =
  | "hidden"
  | "initial"
  | "Kernenergie"
  | "TempolimitAutobahn"
  | "WindkraftAbstandsregel"
  | "WindkraftSubvention"
  | "CO2Preis"
  | "SolarFoerderung"

export type EffectsFunc = (game: Game, startYear: number, currentYear: number) => Change[]
export type PriorityFunc = (game: Game) => Percent

export type Effort = { time: Duration; text: string }
export type EffortFunc = (game: Game) => Effort
export const defaultEffort: EffortFunc = (g: Game): Effort => {
  return {
    time: defaultEffortDuration,
    text: `Braucht ${defaultEffortDuration.toMonthsString()}.`,
  }
}

export function monthsEffort(inMonths: number, format: string = "Braucht {months}."): Effort {
  const time = months(inMonths)
  const text = format.replace(/{months}/g, time.toMonthsString())
  return { time, text }
}

export type LawDefinition = {
  title: string
  description: string
  labels?: LawLabel[]
  removeLawsWithLabels?: LawLabel[]
  treatAfterLabels?: LawLabel[]
  effort?: EffortFunc
  effects: EffectsFunc
  /** Used to filter and sort the proposed laws. */
  priority: PriorityFunc
  citations?: Citations // TODO #79: Make mandatory
  details?: Details // TODO #79: Make mandatory
  internals?: Internals // TODO #79: Make mandatory
}

export function defineLaw(law: LawDefinition): LawDefinition {
  return law
}
