import { ActionTree } from "vuex"
import { LawId, GameId, Game, LawReference, AcceptedLaw } from "../types"
import { createCommand, Command } from "."
import { gameUpdated } from "./mutations"
import { State } from "./state"
import router from "../router"
import RepositoryFactory, { initialGame, createGame } from "../repository"
import { calculateNextYear } from "../Calculator"
import { allLaws } from "../laws"

const repository = RepositoryFactory()

function persistGame(game: Game) {
  repository.saveGame(game)
  return gameUpdated(game)
}

export const actions: ActionTree<State, State> = {
  startGame() {
    const game = createGame(initialGame)
    game.acceptedLaws = allLaws
      .filter((law) => law.labels?.includes("initial"))
      .map<LawReference>((law) => {
        return {
          lawId: law.id,
          effectiveSince: game.currentYear,
        }
      })
    repository.saveGame(game)
    router.push("/games/" + game.id)
  },

  loadGame(context, payload: { gameId: GameId }) {
    context.commit(persistGame(repository.loadGame(payload.gameId)))
  },

  acceptLaw(context, payload: { lawId: LawId }) {
    const game = context.state.game as Game
    const newLawRef = { lawId: payload.lawId, effectiveSince: game.currentYear + 1 }
    context.commit(persistGame({ ...game, acceptedLaws: [...game.acceptedLaws, newLawRef] }))
  },

  advanceYear(context) {
    function getLaw(lawRef: LawReference): AcceptedLaw {
      const law = allLaws.find((law) => law.id === lawRef.lawId)
      if (law) {
        return { ...law, effectiveSince: lawRef.effectiveSince }
      }
      throw Error(`Law #${lawRef.lawId} not found`)
    }

    const game = context.state.game as Game
    const laws = game.acceptedLaws.map(getLaw)
    const newValues = calculateNextYear(game.values, laws, game.currentYear + 1)
    context.commit(persistGame({ ...game, values: newValues, currentYear: game.currentYear + 1 }))
  },
}

export const startGame = (): Command => createCommand("startGame", {})
export const loadGame = (gameId: GameId): Command => createCommand("loadGame", { gameId })
export const acceptLaw = (lawId: LawId): Command => createCommand("acceptLaw", { lawId })
export const advanceYear = (): Command => createCommand("advanceYear", {})
