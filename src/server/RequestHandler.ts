import { Request, Response, NextFunction } from "express"

const isProduction = process.env.NODE_ENV === "production"

type HandlerFunc = (req: Request) => unknown

export function json(func: HandlerFunc) {
  return async function (req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      res.json(await func(req))
    } catch (error) {
      ;(error as { httpStatus: number }).httpStatus = (error as { httpStatus: number }).httpStatus || 500
      next(error)
    }
  }
}

type APIServerError = {
  httpStatus?: number
  message: string
}

interface Logger {
  debug: (data: unknown) => void
  info: (data: unknown) => void
  error: (data: unknown) => void
}

export function logAPICalls(logger: Logger = console) {
  return (req: Request, res: Response, next: NextFunction) => {
    logger.debug(req.method + " " + req.path)
    next()
  }
}

export function cors(url: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    res.header("Access-Control-Allow-Origin", url)
    res.header("Access-Control-Allow-Headers", "*")
    res.header("Access-Control-Allow-Methods", "*")
    next()
  }
}

export function error404(logger: Logger = console) {
  return (req: Request, res: Response, next: NextFunction) => {
    const details = isProduction ? undefined : { path: req.path }
    next({ httpStatus: 404, message: "path not found", ...details })
  }
}

export function errorHandler(logger: Logger = console) {
  return (error: APIServerError, req: Request, res: Response, next: NextFunction) => {
    logger.error({ error })
    const status = error.httpStatus || 500
    delete error.httpStatus
    res.status(status).json({ error })
  }
}
