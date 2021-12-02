import { LawId } from "../laws"
import { Citations } from "../citations"
import { Details, Internals, Ratio } from "../types"
import { Game } from "../game"
import { Change } from "../params"

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
  probability?(game: Game): Ratio
  acknowledged?: boolean
  laws?: LawId[]
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
