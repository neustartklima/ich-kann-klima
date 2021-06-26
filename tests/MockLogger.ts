const mockLogger = {
  log: [] as string[][],

  debug: function (msg: string): void {
    this.log.push(['debug', msg])
  },
  info: function (msg: string): void {
    this.log.push(['info', msg])
  },
  warn: function (msg: string): void {
    this.log.push(['warn', msg])
  },
  error: function (msg: string): void {
    this.log.push(['error', msg])
  },

  reset: function (): void {
    this.log.length = 0
  },
}

export default mockLogger
