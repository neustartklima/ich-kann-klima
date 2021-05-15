import { allLaws } from "./laws"
import { AcceptedLaw, Game, Law, LawId, LawReference } from "./types"

export function fillUpLawProposals(game: Game, allLaws: Law[]): void {
  const requiredLaws = 6 - game.proposedLaws.length
  if (requiredLaws > 0) {
    const laws = allLaws
      .filter((law) => !game.proposedLaws.includes(law.id))
      .filter((law) => !game.acceptedLaws?.some((l) => l.lawId === law.id))
      .filter((law) => !game.rejectedLaws?.includes(law.id))
      .filter((law) => !law.labels?.includes("hidden"))
    game.proposedLaws = game.proposedLaws.concat(laws.slice(0, requiredLaws).map((law) => law.id))
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
