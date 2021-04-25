import fs from 'fs'
import { ModelValues } from '../Model'

export type LawId = number

export type LawDef = {
  title: string
  description?: string
  effectOn: Partial<ModelValues>
}

export type Law = LawDef & {
  id: LawId
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

export interface LawController {
  getAll(): Law[]
  getById(lawId: LawId): Law | undefined
}

export default {
  getAll() {
    return laws
  },

  getById(lawId: LawId) {
    return laws.find((law) => law.id === lawId)
  }
}
