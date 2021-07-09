type QueueEntry = {
  method: string
  path: string
  data?: Record<string, unknown>
  retry: number // number of retries, -1 means infinitely, 0 means fail fast
  resolve: (value: unknown) => void
  reject: (value: unknown) => void
}

type FetchFunc = (method: string, path: string, data?: Record<string, unknown>) => Promise<unknown>

export type FetchQueue = ReturnType<typeof FetchQueueFactory>

type FetechQueueOptions = {
  navigator?: Navigator
  timeout?: number
}

export default function FetchQueueFactory(fetchFunc: FetchFunc, options?: FetechQueueOptions) {
  let fetchQueue = [] as QueueEntry[]
  let fetchQueueTimer: NodeJS.Timeout | undefined

  async function process() {
    if (fetchQueueTimer) {
      clearTimeout(fetchQueueTimer)
      fetchQueueTimer = undefined
    }
    if (fetchQueue.length) {
      const { method, path, data, retry, resolve, reject } = fetchQueue[0]
      try {
        if (options?.navigator && !options?.navigator.onLine) {
          throw Error("Browser is offline")
        }
        const result = await fetchFunc(method, path, data)
        fetchQueue.shift()
        resolve(result)
      } catch (error) {
        if (retry) {
          fetchQueue[0].retry = Math.max(-1, retry - 1)
        } else {
          fetchQueue.shift()
          reject(error)
        }
      }
      if (fetchQueue.length) {
        fetchQueueTimer = setTimeout(process, options?.timeout || 10000)
      }
    }
  }

  return {
    add(method: string, path: string, data?: Record<string, unknown>, retry = -1): Promise<unknown> {
      return new Promise((resolve, reject) => {
        fetchQueue.push({ method, path, data, retry, resolve, reject })
        if (!fetchQueueTimer) {
          process()
        }
      })
    },

    remove(method: string, path: string): void {
      fetchQueue = fetchQueue.filter((entry) => {
        return entry.method.toLowerCase() !== method.toLowerCase() || entry.path !== path
      })
    },

    callsPending(): boolean {
      return fetchQueue.length > 0
    }
  }
}
