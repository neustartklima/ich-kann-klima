import fs from 'fs'

export type LawId = number

export type Law = {
  id: LawId
  title: string
  effectiveFrom?: Date
}

const laws = [] as Law[]

fs.readdirSync(__dirname).forEach(async entry => {
  if (!entry.startsWith('.') && entry !== "index.ts") {
    laws.push({
      ...(await import('./' + entry)).default,
      id: laws.length + 1,
    })
  }
})

export default {
  getAll() {
    return laws
  },

  getById(lawId: LawId): Law | undefined {
    return laws.find((law) => law.id === lawId)
  }
}
