/* eslint-env node, mocha */

import should from "should"
import path from "path"
import fs from "fs"
import EventStore, { Store } from "../src/server/models/EventStore"
import logger from "./MockLogger"
import MockFS from "./MockFS"

const basePath = path.resolve(__dirname, "testdata")
const migrationsPath = path.join(basePath, "migrations")
const changes_1js = fs.readFileSync(path.resolve(__dirname, "testMigrator.ts")).toString()
const index_1 = 'import m1 from "./1"; export default [new m1()]'
const events = JSON.stringify({ type: "testEvent", id: 1, name: "Test event" }) + "\n"
const mockFS = MockFS({ basePath, logger })

function testEvent(param1?: number, param2?: string) {
  return { type: "testEvent", param1, param2 }
}

let store: Store

describe("EventStore.test", () => {
  beforeEach(() => {
    logger.reset()
    mockFS.cleanup()
  })

  afterEach(async () => {
    store && (await store.end())
    logger.log.should.deepEqual([])
    mockFS.cleanup()
  })

  it("should replay events on startup", async () => {
    mockFS.setupFiles({ "events-0.json": events })
    store = EventStore({ basePath, migrationsPath })
    const eventList = [] as unknown[]
    store.on(testEvent, (event: unknown) => {
      eventList.push(event)
    })
    await store.replay()
    eventList.should.deepEqual([{ type: "testEvent", id: 1, name: "Test event" }])
  })

  it("should apply migrations", async () => {
    mockFS.setupFiles({
      "events-0.json": events,
      "migrations/index.ts": index_1,
      "migrations/1.ts": changes_1js,
    })
    store = EventStore({
      basePath,
      migrationsPath,
      logger: (logger as unknown) as Console,
    })
    const eventList = [] as unknown[]
    store.on(testEvent, (event: unknown) => eventList.push(event))
    await store.replay()
    eventList.length.should.equal(1)
    should(eventList[0]).containDeep({
      type: "testEvent",
      name: "Migrated event",
    })
    fs.existsSync(path.join(basePath, "state.json")).should.be.true()
    fs.readFileSync(path.join(basePath, "state.json"))
      .toString()
      .should.equal('{"versionNo":1}')
    logger.log.should.deepEqual([
      ["info", "Migrating data from 0 to 1"],
      ["info", "Migration successful"],
    ])
    logger.reset()
  })

  it("should ignore migrations which are already handled", async () => {
    mockFS.setupFiles({
      "events-0.json": events,
      "state.json": '{"versionNo":1}',
      "migrations/index.ts": index_1,
      "migrations/1.ts": changes_1js,
    })
    store = EventStore({
      basePath,
      migrationsPath,
      logger: (logger as unknown) as Console,
    })
    store.on(testEvent, () => should({}).fail())
    await store.replay()
  })

  it("should deliver events", async () => {
    mockFS.setupFiles({ "events-0.json": events })
    store = EventStore({ basePath, migrationsPath })
    let delivered = false
    store.on(testEvent, () => (delivered = true))
    await store.replay()
    await store.emit(testEvent())
    delivered.should.be.true()
  })

  it("should keep event data", async () => {
    mockFS.setupFiles({ "events-0.json": events })
    store = EventStore({ basePath, migrationsPath })
    let data
    store.on(testEvent, (event: unknown) => (data = event))
    await store.replay()
    await store.emit(testEvent(123, "abc"))
    should(data).containDeep({ param1: 123, param2: "abc" })
  })
})
