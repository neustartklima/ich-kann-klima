import { Router, Request } from "express"
import { json } from "./RequestHandler"
import GameController from "./GameController"

const router = Router()
const { createGame, saveGame, loadGame } = GameController()

function decided(req: Request) {
  throw { httpStatus: 425, message: "Route not yet implemented" }
}

router.post("/api/games", json(createGame))
router.put("/api/games/:gameId", json(saveGame))
router.get("/api/games/:gameId", json(loadGame))
router.post("/api/games/:gameId/decision/:decisionId", json(decided))

export default router
