import { maxProposedLaws } from "./constants"
import { allLaws } from "./laws"
import { AcceptedLaw, Game, Law, LawId, LawReference, Percent } from "./types"

type LawPriority = {
  law: Law
  priority: Percent
}

export function fillUpLawProposals(game: Game, lawList: Law[] = allLaws): void {
  const candidateLaws: LawId[] = lawList
    .filter((law) => !game.acceptedLaws?.some((l) => l.lawId === law.id))
    .filter((law) => !game.rejectedLaws?.includes(law.id))
    .filter((law) => !law.labels?.includes("hidden"))
    .map((law) => ({ law: law, priority: law.priority ? law.priority(game) : 1 }))
    .filter((lawPrio) => lawPrio.priority > 0)
    .sort((a, b) => b.priority - a.priority)
    .map((lawPrio) => lawPrio.law.id)
    .slice(0, maxProposedLaws)

  console.log("candidateLaws: " + candidateLaws)
  const newList: LawId[] = [...game.proposedLaws]
  exchangeLawProposals(newList, candidateLaws)
  game.proposedLaws = newList
}

function exchangeLawProposals(proposals: LawId[], candidates: LawId[]) {
  const staying = candidates.filter((c) => proposals.includes(c))
  const adding = candidates.filter((c) => !staying.includes(c))
  var i = 0
  while (i < proposals.length) {
    if (staying.includes(proposals[i])) {
      i++
      continue
    }
    if (adding.length === 0) {
      proposals.splice(i, 1)
      continue
    }

    proposals[i] = adding.shift() as LawId
    i++
  }
  proposals.push(...adding.slice(0, maxProposedLaws - proposals.length))
}

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
