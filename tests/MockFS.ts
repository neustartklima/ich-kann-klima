import path from 'path'
import fs from 'fs'

type FileSystemMock = {
  cleanup(): void
  setupFiles(list: Record<string, string>): void
}

export default function ({
  basePath,
  logger = console,
}: {
  basePath: string
  logger?: { error: (msg: string) => void }
}): FileSystemMock {
  return {
    cleanup(): void {
      fs.rmdirSync(basePath, { recursive: true })
    },

    setupFiles(list: Record<string, string>): void {
      Object.entries(list).forEach(([location, content]) => {
        try {
          const dir = path.resolve(basePath, location, '..')
          fs.mkdirSync(dir, { recursive: true })
          fs.writeFileSync(path.resolve(basePath, location), content)
        } catch (error) {
          logger.error(error)
        }
      })
    },
  }
}
