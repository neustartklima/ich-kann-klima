import { Request } from "express"

export default function() {
  return {
    decided(req: Request) {
      throw { httpStatus: 501, message: "Function not yet implemented" }
    },
  }
}
