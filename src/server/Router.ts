import path from "path"
import { Router } from "express"
import { json } from "./RequestHandler"
import GameController from "./GameController"
import DecisionController from "./DecisionController"
import EventController from "./EventController"
import EventStore from "./models/EventStore"
import ModelsFactory from "./models"

const basePath = path.resolve(__dirname, "data")
const eventStore = EventStore({ basePath })
const models = ModelsFactory({ eventStore })
const router = Router()
const { createGame, saveGame, loadGame } = GameController({ eventStore, models })
const { decided } = DecisionController({ eventStore, models })
const { eventOccurred } = EventController({ eventStore, models })

router.post("/api/games", json(createGame))
router.put("/api/games/:gameId", json(saveGame))
router.get("/api/games/:gameId", json(loadGame))
router.post("/api/games/:gameId/decisions/:decisionId", json(decided))
router.post("/api/games/:gameId/events/:eventId", json(eventOccurred))

export default router
