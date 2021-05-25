import { Request } from "express"
import { v4 as uuid } from "uuid"

export default function() {
  return {
    loadGame(req: Request) {
      throw { httpStatus: 425, message: "Function not yet implemented" }
    },
    createGame(req: Request) {
      return { ...req.body, id: uuid() }
    },
    saveGame(req: Request) {
      throw { httpStatus: 425, message: "Function not yet implemented" }
    },
  }
}
