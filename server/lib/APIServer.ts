import path from "path"
import express, { Request, Response, NextFunction } from "express"

const app = express()

type HandlerFunc = (req: express.Request) => unknown
type ServerError = {
  httpStatus: number
  message: string
}

function json(func: HandlerFunc) {
  return function (req: Request, res: Response, next: NextFunction): void {
    try {
      res.json(func(req))
    } catch (error) {
      console.error(error)
      error.httpStatus = error.httpStatus || 500
      next(error)
    }
  }
}

const serverFuncs = {
  get: (path: string, func: HandlerFunc) => app.get(path, json(func)),
  post: (path: string, func: HandlerFunc) => app.post(path, json(func)),
  put: (path: string, func: HandlerFunc) => app.put(path, json(func)),
  patch: (path: string, func: HandlerFunc) => app.patch(path, json(func)),
  delete: (path: string, func: HandlerFunc) => app.delete(path, json(func)),
}

type ConnectRoutesFunc = (server: typeof serverFuncs) => void

const projectRoot = path.resolve(__dirname, "..", "..")
export default function (port: number, connectRoutes: ConnectRoutesFunc): void {
  app.use("/", express.static(path.resolve(projectRoot, "frontend", "public")))
  app.use("/", express.static(path.resolve(projectRoot, "frontend", "dist")))

  connectRoutes(serverFuncs)

  app.use((req: Request, res: Response, next: NextFunction) => {
    next({ httpStatus: 404, message: "path not found" })
  })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.use((error: ServerError, req: Request, res: Response, next: NextFunction) => {
    res.status(error.httpStatus || 500).json({ error })
  })

  app.listen(port, () => {
    console.log(`Listening on http://localhost/${port}`)
  })
  process.on("SIGINT", () => {
    console.log("Received SIGINT")
    process.exit()
  })
}
