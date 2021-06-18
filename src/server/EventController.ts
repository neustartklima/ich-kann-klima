import { Request } from "express"

export default function() {
  return {
    eventOccurred(req: Request) {
      throw { httpStatus: 425, message: "Function not yet implemented" }
    },
  }
}
