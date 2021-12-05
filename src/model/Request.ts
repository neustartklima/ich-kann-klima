type FetchFunction = (input: RequestInfo, init?: RequestInit | undefined) => Promise<Response>

interface Logger {
  error: (err: Error) => void
}

export default function RequestFactory(baseUrl: string, fetch: FetchFunction, logger: Logger = console) {
  return async function(method: string, path: string, data?: Record<string, unknown>) {
    try {
      const options = { method } as RequestInit
      if (["post", "put", "patch"].includes(method)) {
        options.body = JSON.stringify(data)
        options.headers = { ["content-type"]: "application/json" }
      }
      const response = await fetch(baseUrl + path, options)
      const result = response.headers.get("Content-Type")?.match(/json/) ? await response.json() : await response.text()
      if (response.ok) {
        return result
      }
      throw Error(result.message || result)
    } catch (error) {
      logger.error(error as Error)
      throw error
    }
  }
}
