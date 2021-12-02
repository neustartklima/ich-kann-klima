import { duration } from "./lib/Temporal"
import { Ratio } from "./types"

export const startYear = 2021
export const startDate = "2021-01-01"
export const endYear = 2050
export const endDate = "2050-12-31"
export const defaultEffortDuration = duration("P3M")
export const sitOutDuration = duration("P3M")
export const maxProposedLaws = 6
export const probabilityThatEventOccurs: Ratio = 0.6
