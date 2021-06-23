import { Request } from "express"

export default function() {
  return {
    eventOccurred(req: Request) {
      throw { httpStatus: 501, message: "Function not yet implemented" }
    },
  }
}
