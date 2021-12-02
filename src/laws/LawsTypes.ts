import { Game } from "../game"
import { Change } from "../params"
import { Citations } from "../citations"
import { Details, Internals, Percent } from "../types"
import { Duration } from "../lib/Temporal"
import { defaultEffortDuration } from "../constants"

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
