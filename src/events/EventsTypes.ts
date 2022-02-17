import { Event, EventId } from "."
import { Citations } from "../citations"
import { startDate } from "../constants"
import { Game } from "../game"
import { Date, date, Duration, duration, durationBetween, DurationLikeObject, laterOf } from "../lib/Temporal"
import { Change } from "../params"
import { Details, Internals, Ratio } from "../types"

export type EventDefinition = {
  title: string
  description: string
  apply(game: Game): Change[]
  /** A value used to determine if this event occurs now.
   *
   * Three possible values-ranges and their meanings are
   * - Zero or less: The event may not occur now.
   * - Larger 1: The event occurs now.
   * - Between 0 and 1: Probability that the event occurs relative to others.
   *
   * Values larger than one shall only be those defined by {@link specialEventProbs}.
   *
   * @remarks
   *
   * Events will be processed as follows:
   * - If some events return > 1, the one with the highest value will occur, otherwise
   * - with a probability of {@link probabilityThatEventOccurs} no event occurs, otherwise
   * - one of the events which returned a value between 0 and 1 occurs with its relative probability.
   *
   * The values returned by events (which returned between 0 and 1) may add to any value.
   * An event returning a very large value will effectively reduce the probabilities of
   * all other events. This means that an event returning 0.9 will most likely not occur
   * with a probability of 90%, since other events (and {@link probabilityThatEventOccurs})
   * will effectively reduce it.
   * However, an event returning 0.9 will occur 9 times as often as an event returning 0.1.
   *
   * @param game The game data to use for determining the probability.
   * @return The probability as described in the summary.
   */
  probability?(game: Game, event: Event): Ratio
  acknowledged?: boolean
  citations?: Citations // TODO #79: Make mandatory
  details?: Details // TODO #79: Make mandatory
  internals?: Internals // TODO #79: Make mandatory
}

export function defineEvent(event: EventDefinition): EventDefinition {
  return event
}

/** The used special return values of {@link EventDefinition.probability} > 1.
 *
 * @remarks
 *
 * The names correspond to the events returning them.
 *
 * The values define the priority in case several may occur at the same time.
 */
export const specialEventProbs = {
  newYear: 2,
  timesUp: 3,
  finanzKollaps: 4,
  wahlVerloren: 5,
  hitzehoelle: 6,
}

/**
 * Calculate duration since one of a list of events occurred.
 * @param game Game to inspect.
 * @param eventsToConsider Array of event IDs to search for.
 * @returns A duration since the last of the events to consider occurred or undefined, if none.
 */
export function durationWithoutEvents(game: Game, eventsToConsider: EventId[]): Duration | undefined {
  const lastOccurrence = game.events
    .filter((eventRef) => eventsToConsider.includes(eventRef.id))
    .reduce(
      (yearSoFar, eventRef) =>
        yearSoFar === undefined ? date(eventRef.occurredIn) : laterOf(yearSoFar, date(eventRef.occurredIn)),
      undefined as Date | undefined
    )
  if (lastOccurrence === undefined) return undefined
  return durationBetween(lastOccurrence, date(game.currentDate))
}

/**
 * Calculate duration since one of a list of events occurred or since the start of the game.
 * @param game Game to inspect.
 * @param eventsToConsider Array of event IDs to search for.
 * @returns A duration since the last of the events to consider occurred or since the start of the game.
 */
export function durationSinceStartWithoutEvents(game: Game, eventsToConsider: EventId[]): Duration {
  const durAfterEvents = durationWithoutEvents(game, eventsToConsider)
  if (durAfterEvents === undefined) return durationBetween(date(startDate), date(game.currentDate))
  return durAfterEvents
}

/**
 * Check if less than a given time has passed since a given event occurred or the start of the game.
 * @param game Game to inspect.
 * @param event The event.
 * @param time The time / duration that shall not have passed since the event occurred.
 * @param timeAfterStart If given, a separate time for the start of the game. Default: `time`.
 * @returns True, if less time has passed than `time` since `event` occurred OR than `timeAfterStart` since the start of the game.
 */
export function lessTimeHasPassed(
  game: Game,
  event: Event,
  time: DurationLikeObject,
  timeAfterStart?: DurationLikeObject | undefined
): boolean {
  if (timeAfterStart === undefined) {
    timeAfterStart = time
  }
  const durWithoutEvents = durationWithoutEvents(game, [event.id])
  if (durWithoutEvents != undefined && durWithoutEvents.lessThan(duration(time))) return true
  return durationBetween(date(startDate), date(game.currentDate)).lessThan(duration(timeAfterStart))
}
