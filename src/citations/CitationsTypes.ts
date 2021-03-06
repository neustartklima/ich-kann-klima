import { Html, LocalPath } from "../types"

const dateFormatter = new Intl.DateTimeFormat("de-DE")

export class Citation {
  url: URL
  title?: string // TODO #79: Make mandatory
  publisher?: string
  authors?: string
  date?: Date
  comment?: Html
  internalComment?: Html
  localCopy?: LocalPath
  referringUrl?: URL
  archiveUrl?: URL
  archiveNotPossible?: boolean
  constructor(input: {
    url: string
    title?: string
    publisher?: string
    authors?: string
    date?: string
    comment?: Html
    internalComment?: Html
    localCopy?: string
    referringUrl?: string
    archiveUrl?: string
    archiveNotPossible?: boolean
  }) {
    this.url = new URL(input.url)
    this.title = input.title
    this.publisher = input.publisher
    this.authors = input.authors
    this.date = input.date ? new Date(input.date) : undefined
    this.comment = input.comment
    this.internalComment = input.internalComment
    this.localCopy = input.localCopy
    this.referringUrl = input.referringUrl ? new URL(input.referringUrl) : undefined
    this.archiveUrl = input.archiveUrl ? new URL(input.archiveUrl) : undefined
    this.archiveNotPossible = input.archiveNotPossible
  }

  dateString(): string {
    const d = this.date
    return d ? " (" + dateFormatter.format(d) + ")" : ""
  }

  toString(): string {
    const authDate = this.authors ? this.authors + this.dateString() : undefined
    const title = this.title ? '"' + this.title + '"' : undefined
    return [authDate, title, this.url, this.publisher].filter((a) => a).join(", ")
  }
}
