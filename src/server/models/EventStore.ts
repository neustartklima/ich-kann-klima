import fs from "fs"
import { resolve } from "path"
import { Transform, TransformOptions } from "stream"
import es from "event-stream"

export type EventType = { name: string }
export type Event = Record<string, unknown>
export type Listener = (event: Event) => void

export type FileSystem = Pick<typeof fs, "existsSync" | "mkdirSync" | "createReadStream" | "createWriteStream">

export type Store = {
  dispatch(event: Event): Promise<void>
  replay(): Promise<void>
  on(type: EventType, func: Listener): Store
  emit(event: Event): Promise<void>
  end(): Promise<void>
}

class JsonStringify extends Transform {
  constructor(options = {} as TransformOptions) {
    options.objectMode = true
    super(options)
  }

  _transform(event: unknown, encoding: BufferEncoding, done: () => void) {
    this.push(JSON.stringify(event) + "\n")
    done()
  }
}

export default ({
  basePath,
  logger = console,
  fileSystem = fs,
}: {
  basePath: string
  logger: Console
  fileSystem: FileSystem
}): Store => {
  const { existsSync, mkdirSync, createReadStream, createWriteStream } = fileSystem
  const listeners = {} as Record<string, Listener[]>

  async function dispatch(event: Event) {
    try {
      const relevantListeners = listeners[(event as { type: string }).type] || []
      relevantListeners.forEach((listener) => listener(event))
    } catch (error) {
      logger.error(error)
      logger.debug((error as Error).stack)
    }
  }

  if (!existsSync(basePath)) {
    mkdirSync(basePath)
  }
  const eventsFileName = resolve(basePath, `events-0.json`)
  const changeStream = createWriteStream(eventsFileName, { flags: "a" })
  changeStream.on("error", logger.error)

  return {
    dispatch,

    async replay(): Promise<void> {
      try {
        const stream = createReadStream(eventsFileName)
          .pipe(es.split())
          .pipe(es.parse())
          .pipe(es.mapSync(dispatch))

        await new Promise((resolve, reject) => {
          stream.on("end", resolve)
          stream.on("error", reject)
        })
      } catch (error) {
        logger.error(error)
      }
    },

    on(type: EventType, func: Listener): Store {
      listeners[type.name] = listeners[type.name] || []
      listeners[type.name].push(func)
      return this
    },

    async emit(event: Record<string, unknown>): Promise<void> {
      try {
        const completeEvent = { ts: new Date(), ...event }
        changeStream.write(JSON.stringify(completeEvent) + "\n")
        dispatch(completeEvent)
      } catch (error) {
        logger.error(error)
      }
    },

    async end(): Promise<void> {
      changeStream.end()
    },
  }
}

export function assert(condition: unknown, message: string): void {
  if (!condition) {
    const obj = { stack: "" }
    Error.captureStackTrace(obj)
    const stack = obj.stack
      .split("\n")
      .slice(1)
      .map((line: string) => {
        const m = line.match(/^\s*at ([\w.<>]*)\s*\(?(.*?):(\d+):(\d+)\)?/) as string[]
        return m && { func: m[1], filename: m[2], lineNo: m[3], char: m[4] }
      })
      .filter((line) => line)
    const type = stack[1].func
    const currentfile = stack[0].filename
    const firstForeignFile = stack
      .slice(1)
      .map((e) => e.filename)
      .find((s) => s !== currentfile)
    const callerFile = firstForeignFile && firstForeignFile.split(/[\\/]/).pop()
    throw `Read model '${callerFile}', event '${type}': ${message}`
  }
}
