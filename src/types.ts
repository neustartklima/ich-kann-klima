export type LocalPath = string
export type Html = string

export type Details = Html
export type Internals = Html

export type Unit = "MioTons" | "TWh" | "MrdEuro" | "TsdPeople" | "Percent" | "GramPerPsgrKm" | "MioPsgrKm"

export type MioTons = number
export type TWh = number
export type MrdEuro = number
export type TsdPeople = number
/** A number between 0 and 100. Divide by 100 to get {@link Ratio}. */
export type Percent = number
/** A number between 0 and 1. Multiply with 100 to get {@link Percent}. */
export type Ratio = number
export type GramPerPsgrKm = number
export type MioPsgrKm = number
