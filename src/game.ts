import { endYear, maxProposedLaws, probabilityThatEventOccurs, sitOutDuration, startDate, startYear } from "./constants"
import { allEvents, Event, EventReference } from "./events"
import { allLaws, getAcceptedLaw, Law, LawId, LawReference } from "./laws"
import { BaseParams, createBaseValues, defaultValues, WritableBaseParams } from "./params"
import { v1 as getUUID } from "uuid"
import { Percent } from "./types"
import { not } from "./lib/utils"
import { random as libRandom } from "./lib/random"
import { date, Date, duration } from "./lib/Temporal"
import { Effort } from "./laws/LawsTypes"

export type GameId = string

export type GameDefinition = {
  currentDate: string
  currentYear: number
  values: WritableBaseParams
  acceptedLaws: LawReference[]
  proposedLaws: LawId[]
  rejectedLaws: LawId[]
  events: EventReference[]
  over: boolean
}

export type Game = {
  id: GameId
  currentDate: string
  currentYear: number
  values: BaseParams
  acceptedLaws: LawReference[]
  proposedLaws: LawId[]
  rejectedLaws: LawId[]
  events: EventReference[]
  over: boolean
  prngState: object
}

export const initialGame = {
  currentDate: startDate,
  currentYear: startYear,
  values: defaultValues,
  acceptedLaws: [],
  proposedLaws: [],
  rejectedLaws: [],
  events: [],
  over: false,
  prngState: {},
}

export function initGame(game: GameDefinition = initialGame, id = getUUID()): Game {
  return {
    id,
    currentDate: game.currentDate,
    currentYear: game.currentYear,
    acceptedLaws: game.acceptedLaws,
    proposedLaws: game.proposedLaws,
    rejectedLaws: game.rejectedLaws,
    values: createBaseValues(game.values),
    events: game.events,
    over: game.over,
    prngState: {},
  }
}

export function newGame(laws: Law[] = allLaws, initialData: GameDefinition = initialGame): Game {
  const game = initGame(initialData)
  game.acceptedLaws = laws
    .filter((law) => law.labels?.includes("initial"))
    .map((law) => ({ lawId: law.id, effectiveSince: game.currentYear }))
  return game
}

export type GameYear = number

export const gameYears: GameYear[] = [...Array(endYear - startYear + 1).keys()].map((n) => n + startYear)

export function acceptLaw(lawId: LawId, game: Game): Event | undefined {
  const newLawRef = { lawId, effectiveSince: game.currentYear + 1 }
  const newLaw = getAcceptedLaw(newLawRef)

  const effort: Effort = newLaw.effort(game)
  game.currentDate = date(game.currentDate).plus(effort.time).toJSON()

  const removeLawsWithLabels = newLaw.removeLawsWithLabels
  const filteredLawRefs = game.acceptedLaws
    .map(getAcceptedLaw)
    .filter((lawToCheck) => !removeLawsWithLabels?.some((labelToRemove) => lawToCheck.labels?.includes(labelToRemove)))
    .map((law) => ({ lawId: law.id, effectiveSince: law.effectiveSince }))
  game.acceptedLaws = [...filteredLawRefs, newLawRef]

  return prepareNextStep(game)
}

export function sitOut(game: Game): Event | undefined {
  game.currentDate = date(game.currentDate).plus(sitOutDuration).toJSON()
  return prepareNextStep(game)
}

export function prepareNextStep(
  game: Game,
  laws: Law[] = allLaws,
  events: Event[] = allEvents,
  random = libRandom
): Event | undefined {
  const event = checkForEvent(game, events, random)
  if (event) {
    const eventRef: EventReference = { id: event.id, occuredIn: game.currentYear, acknowledged: false }
    game.events.unshift(eventRef)
  }
  const newProposals = determineNewProposals(game, laws, event?.laws ? event.laws : [])
  game.proposedLaws = changeInPlace(game.proposedLaws, newProposals)

  return event
}

function checkForEvent(game: Game, events: Event[], random: () => number): Event | undefined {
  const probEvents = prepareProbEvents(game, events)
  const certainEvent = checkCertainEvent(probEvents)
  if (certainEvent) {
    return certainEvent
  }
  const correctedEvents = correctProbs(probEvents)
  return selectEvent(correctedEvents, random())
}

type ProbEvent = Event & { prob: number }

function prepareProbEvents(game: Game, events: Event[]): ProbEvent[] {
  return events.map((event) => ({ ...event, prob: event.probability(game) })).filter((event) => event.prob > 0)
}

function checkCertainEvent(probEvents: ProbEvent[]): ProbEvent | undefined {
  return probEvents
    .filter((event) => event.prob > 1)
    .reduce((found: ProbEvent | undefined, event) => (event.prob > (found?.prob || 0) ? event : found), undefined)
}

function correctProbs(probEvents: ProbEvent[]): ProbEvent[] {
  const probSum = probEvents.map((e) => e.prob).reduce((sum, p) => sum + p, 0)
  const correctionFactor = probabilityThatEventOccurs / probSum
  return probEvents.map((event) => ({ ...event, prob: event.prob * correctionFactor }))
}

function selectEvent(events: ProbEvent[], random: number): Event | undefined {
  for (const event of events) {
    random -= event.prob
    if (random < 0) return event
  }
  return undefined
}

function determineNewProposals(game: Game, laws: Law[], eventLawIds: LawId[]): LawId[] {
  const isAccepted = (law: Law) => game.acceptedLaws?.some((l) => l.lawId === law.id)
  const isRejected = (law: Law) => game.rejectedLaws?.includes(law.id)
  const isHidden = (law: Law) => law.labels?.includes("hidden") || false

  type LawPriority = { law: Law; priority: Percent }
  const makeLawPriority = (law: Law): LawPriority => ({ law: law, priority: law.priority(game) })

  const priorizeIfEventLaw = (lp: LawPriority): LawPriority => ({
    law: lp.law,
    priority: lp.priority + (eventLawIds.includes(lp.law.id) ? 100 : 0),
  })

  return laws
    .filter(not(isAccepted))
    .filter(not(isRejected))
    .filter(not(isHidden))
    .map(makeLawPriority)
    .filter((lp) => lp.priority > 0)
    .map(priorizeIfEventLaw)
    .sort((a, b) => b.priority - a.priority)
    .map((lp): LawId => lp.law.id)
    .slice(0, maxProposedLaws)
}

function changeInPlace(oldProposals: LawId[], newProposals: LawId[]) {
  const result: LawId[] = [...oldProposals]
  const staying = newProposals.filter((c) => result.includes(c))
  const adding = newProposals.filter((c) => !staying.includes(c))
  var i = 0
  while (i < result.length) {
    if (staying.includes(result[i])) {
      i++
      continue
    }
    if (adding.length === 0) {
      result.splice(i, 1)
      continue
    }

    result[i] = adding.shift() as LawId
    i++
  }
  result.push(...adding.slice(0, maxProposedLaws - result.length))
  return result
}
