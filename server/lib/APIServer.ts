import path from "path"
import express, { Application, Request, Response, NextFunction } from "express"

const staticPaths = ["frontend/public", "frontend/dist", "frontend"]
const projectRoot = path.resolve(__dirname, "..", "..")

type HandlerFunc = (req: Request) => unknown
type APIServerError = {
  httpStatus: number
  message: string
}

interface Logger {
  debug: (data: unknown) => void
  info: (data: unknown) => void
  error: (data: unknown) => void
}

export function json(func: HandlerFunc) {
  return async function (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      res.json(await func(req))
    } catch (error) {
      error.httpStatus = error.httpStatus || 500
      next(error)
    }
  }
}

export interface APIServer {
  app: Application
  logAPICalls(): void
  connectStaticPaths(): void
  connectErrorHandlers(): void
  listenOnPort(port: number): void
}

export default function (app: Application, logger: Logger = console): APIServer {
  return {
    app,
    
    logAPICalls() {
      app.use((req: Request, res: Response, next: NextFunction) => {
        logger.debug(req.method + " " + req.path)
        next()
      })
    },

    connectStaticPaths() {
      staticPaths.forEach((staticPath) => {
        app.use(express.static(path.resolve(projectRoot, staticPath)))
      })
    },

    connectErrorHandlers() {
      app.use((req: Request, res: Response, next: NextFunction) => {
        next({ httpStatus: 404, message: "path not found" })
      })
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      app.use((error: APIServerError, req: Request, res: Response, next: NextFunction) => {
        logger.error({ error })
        res.status(error.httpStatus || 500).json({ error })
      })
    },

    listenOnPort(port: number) {
      app.listen(port, () => {
        logger.info(`Listening on http://localhost/${port}`)
      })
      process.on("SIGINT", () => {
        logger.info("Received SIGINT")
        process.exit()
      })
    },
  }
}
