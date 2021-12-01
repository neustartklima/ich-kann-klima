import { DateTime as LuxDateTime, Duration as LuxDuration } from "luxon"

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
}

export class Duration {
  lux: LuxDuration

  constructor(input: LuxDuration | string) {
    if (input instanceof LuxDuration) {
      this.lux = input
    } else {
      this.lux = LuxDuration.fromISO(input, { locale: "de-DE" })
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
}

export function date(isoString: string): Date {
  return new Date(isoString)
}

export function duration(isoString: string): Duration {
  return new Duration(isoString)
}

export function durationBetween(start: Date, end: Date): Duration {
  return Date.durationBetween(start, end)
}
