import { Request } from "express"

export default function() {
  return {
    decided(req: Request) {
      throw { httpStatus: 425, message: "Function not yet implemented" }
    },
  }
}
