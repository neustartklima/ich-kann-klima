import { DateTime as LuxDateTime, Duration as LuxDuration, DurationLikeObject as LuxDLO } from "luxon"

export type DurationLikeObject = LuxDLO

const fullDateTimeOps: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "short",
}

export class Date {
  lux: LuxDateTime

  constructor(input: LuxDateTime | string) {
    if (input instanceof LuxDateTime) {
      this.lux = input.setLocale("de-DE").setZone("Europe/Berlin")
    } else {
      this.lux = LuxDateTime.fromISO(input, { zone: "Europe/Berlin", locale: "de-DE" })
    }
  }

  static durationBetween(start: Date, end: Date): Duration {
    return new Duration(end.lux.diff(start.lux, ["months"]))
  }

  plus(amount: Duration): Date {
    return new Date(this.lux.plus(amount.lux))
  }

  getYear(): number {
    return this.lux.get("year")
  }

  toLocaleString(): string {
    return this.lux.toLocaleString(fullDateTimeOps)
  }

  toMonthString(): string {
    return this.lux.toLocaleString({ month: "long", year: "numeric" })
  }

  toJSON(): string {
    return this.lux.toJSON()
  }

  sameInstant(other: Date): boolean {
    return +this.lux === +other.lux
  }
}

export class Duration {
  lux: LuxDuration

  constructor(input: LuxDuration | DurationLikeObject | string) {
    if (input instanceof LuxDuration) {
      this.lux = input
    } else if (typeof input === "string") {
      this.lux = LuxDuration.fromISO(input, { locale: "de-DE" })
    } else {
      this.lux = LuxDuration.fromObject(input)
    }
  }

  toMonthsString(): string {
    const months = this.lux.as("months")
    if (months === 1) {
      return "1 Monat"
    } else {
      return months + " Monate"
    }
  }

  lessThan(other: Duration): boolean {
    return this.lux < other.lux
  }
}

export function date(isoString: string): Date {
  return new Date(isoString)
}

export function duration(input: string | DurationLikeObject): Duration {
  return new Duration(input)
}

export function durationBetween(start: Date, end: Date): Duration {
  return Date.durationBetween(start, end)
}

export function months(month: number): Duration {
  return new Duration(LuxDuration.fromDurationLike({ month }))
}

export function laterOf(a: Date, b: Date): Date {
  return a.lux < b.lux ? b : a
}

export function earlierOf(a: Date, b: Date): Date {
  return a.lux > b.lux ? b : a
}
