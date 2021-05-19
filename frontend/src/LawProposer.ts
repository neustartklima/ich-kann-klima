import { lawsForNextYear } from "./Calculator"
import { allLaws } from "./laws"
import { AcceptedLaw, Game, Law, LawId, LawReference, Percent } from "./types"

type LawPriority = {
  law: Law
  priority: Percent
}

export function fillUpLawProposals(game: Game, allLaws: Law[]): void {
  const requiredLaws = 6 - game.proposedLaws.length
  if (requiredLaws > 0) {
    const newProposals: LawPriority[] = allLaws
      .filter((law) => !game.proposedLaws.includes(law.id))
      .filter((law) => !game.acceptedLaws?.some((l) => l.lawId === law.id))
      .filter((law) => !game.rejectedLaws?.includes(law.id))
      .filter((law) => !law.labels?.includes("hidden"))
      .map((law) => ({ law: law, priority: law.priority ? law.priority(game) : 1 }))
      .filter((law) => law.priority > 0)
      .sort((a, b) => a.priority - b.priority)
      .splice(0, requiredLaws)
    game.proposedLaws = game.proposedLaws.concat(newProposals.map((law) => law.law.id))
  }
}

export function replaceLawProposal(game: Game, lawId: LawId): void {
  game.proposedLaws = game.proposedLaws.filter((id) => id !== lawId)
  fillUpLawProposals(game, allLaws)
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
