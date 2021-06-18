import { Router } from "express"
import { json } from "./RequestHandler"
import GameController from "./GameController"
import DecisionController from "./DecisionController"
import EventController from "./EventController"

const router = Router()
const { createGame, saveGame, loadGame } = GameController()
const { decided } = DecisionController()
const { eventOccurred } = EventController()

router.post("/api/games", json(createGame))
router.put("/api/games/:gameId", json(saveGame))
router.get("/api/games/:gameId", json(loadGame))
router.post("/api/games/:gameId/decisions/:decisionId", json(decided))
router.post("/api/games/:gameId/events/:eventId", json(eventOccurred))

export default router
