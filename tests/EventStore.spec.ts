/* eslint-env node, mocha */

import should from "should"
import path from "path"
import EventStore, { FileSystem, Store } from "../src/server/models/EventStore"
import logger from "./MockLogger"
import { fs, vol } from "memfs"

const basePath = "/testdata"
const index_1 = 'import m1 from "./1"; export default [new m1()]'
const events = JSON.stringify({ type: "testEvent", id: 1, name: "Test event" }) + "\n"

function testEvent(param1?: number, param2?: string) {
  return { type: "testEvent", param1, param2 }
}

let store: Store

describe("EventStore.test", () => {
  beforeEach(() => {
    logger.reset()
  })

  afterEach(async () => {
    store && (await store.end())
    logger.log.should.deepEqual([])
  })

  it("should replay events on startup", async () => {
    vol.fromJSON({ "/testdata/events-0.json": events })
    store = EventStore({
      basePath,
      fileSystem: (fs as unknown) as FileSystem,
      logger: (logger as unknown) as Console,
    })
    const eventList = [] as unknown[]
    store.on(testEvent, (event: unknown) => {
      eventList.push(event)
    })
    await store.replay()
    eventList.should.deepEqual([{ type: "testEvent", id: 1, name: "Test event" }])
  })

  it("should deliver events", async () => {
    vol.fromJSON({ "/testdata/events-0.json": events })
    store = EventStore({
      basePath,
      fileSystem: (fs as unknown) as FileSystem,
      logger: (logger as unknown) as Console,
    })
    let delivered = false
    store.on(testEvent, () => (delivered = true))
    await store.replay()
    await store.emit(testEvent())
    delivered.should.be.true()
  })

  it("should keep event data", async () => {
    vol.fromJSON({ "/testdata/events-0.json": events })
    store = EventStore({
      basePath,
      fileSystem: (fs as unknown) as FileSystem,
      logger: (logger as unknown) as Console,
    })
    let data
    store.on(testEvent, (event: unknown) => (data = event))
    await store.replay()
    await store.emit(testEvent(123, "abc"))
    should(data).containDeep({ param1: 123, param2: "abc" })
  })
})
