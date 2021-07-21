import "should"
import sinon from "sinon"
import { createBaseValues, defaultValues } from "../src/params"
import { API } from "../src/model/api"
import Repository from "../src/model/Repository"
import { initGame } from "../src/model"

describe("createBaseValues(defaultValues)", () => {
  const iniVals = createBaseValues(defaultValues)

  // Source: https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile p. 219
  it("should return 1168700 MioPsgrKm for total transport usage", () => {
    iniVals.passengerTransportUsage.should.be.approximately(1168700, 100)
  })

  // Source: https://cryptpad.fr/file/#/3/file/c831e23bd4c44f6c2e0adcf138af4ca2f79ee61bbb81600b/
  it("should return 770 THh/a for total heat demand for buildings", () => {
    iniVals.buildingsDemand.should.be.approximately(770, 0.1)
  })

  // TODO: #72 Source claims 359 TWh per year in 2019. Calculation results in 363 TWh.
  // Source: https://cryptpad.fr/file/#/3/file/c831e23bd4c44f6c2e0adcf138af4ca2f79ee61bbb81600b/
  it("should return 359 THh/a for total heat produced with gas", () => {
    iniVals.buildingsSourceGas.should.be.approximately(363, 0.1)
  })

  // Source: https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx sheet "THG" row 2019
  it("should return 159.696 MioTons for co2emissions due to street vehicles", () => {
    iniVals.co2emissionsStreetVehicles.should.be.approximately(159.696, 0.1)
  })

  // TODO: #72 Source claims 164.322 MioTons per year in 2019. Sums to 173.0 MioTons.
  // Source: https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx sheet "THG" row 2019
  it("should return 164.322 MioTons for co2emissionsMobility", () => {
    iniVals.co2emissionsMobility.should.be.approximately(173.0, 0.1)
  })

  // TODO: #72 Source claims 258.043 MioTons per year in 2019. Sums only to 151.4 MioTons.
  // Source: https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx sheet "THG" row 2019
  it("should return 258.043 MioTons for co2emissionsEnergy", () => {
    iniVals.co2emissionsEnergy.should.be.approximately(151.4, 0.1)
  })

  // TODO: #72 Source claims 123.461 MioTons per year in 2019. Sums to 168.6 MioTons.
  // Source: https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx sheet "THG" row 2019
  it("should return 123.461 MioTons for co2emissionsBuildings", () => {
    iniVals.co2emissionsBuildings.should.be.approximately(168.6, 0.1)
  })

  // TODO: #72 Source claims 809.799 MioTons per year in 2019. Sums to 757.0 MioTons.
  // Source: https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx sheet "THG" row 2019 without LULUCF
  it("should return 809.799 MioTons for co2emissions", () => {
    iniVals.co2emissions.should.be.approximately(757.0, 0.1)
  })
})

describe("repository", () => {
  const storage = ({
    setItem: sinon.spy(),
    getItem: sinon.spy(),
  } as unknown) as Storage

  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

  it("should create a new game", async () => {
    const createGame = sinon.stub()
    const api = ({ createGame } as unknown) as API
    const repository = Repository({ api, storage })
    await repository.createGame([])
    createGame.callCount.should.equal(1)
  })

  it("should assign an id for a new game even if the server could not be reached", async () => {
    const logger = { warn: (msg: string) => {} }
    const promise = new Promise((resolve) => (logger.warn = resolve))
    const createGame = sinon.stub().rejects(undefined)
    const api = ({ createGame } as unknown) as API
    const repository = Repository({ api, logger, storage })
    const result = await repository.createGame([])
    result.id.should.match(uuidPattern)
    promise.should.be.resolvedWith("Cannot save new game - trying again later")
  })

  it("should save a game", async () => {
    const game = initGame()
    const saveGame = sinon.stub().resolves(game)
    const api = ({ saveGame } as unknown) as API
    const repository = Repository({ api, storage })
    await repository.saveGame(game)
    saveGame.callCount.should.equal(1)
    Object.keys(saveGame.firstCall.args[0]).should.deepEqual(Object.keys(game))
  })

  it("should load a previously locally saved game without accessing the server", async () => {
    const game = initGame()
    const getItem = sinon.stub()
    const storage = ({ getItem } as unknown) as Storage
    getItem.withArgs("game").returns(JSON.stringify({ ...game, id: "0815" }))
    const loadGame = sinon.spy()
    const api = ({ loadGame } as unknown) as API
    const repository = Repository({ api, storage })
    const result = await repository.loadGame("0815")
    result.should.deepEqual({ ...game, id: "0815" })
    loadGame.callCount.should.equal(0)
  })

  it("should load a previously remotely, but not locally saved game", async () => {
    const game = initGame()
    const getItem = sinon.stub()
    const storage = ({ getItem } as unknown) as Storage
    getItem.withArgs("0815").returns(null)
    const loadGame = sinon.stub()
    loadGame.withArgs("0815").resolves({ ...game, id: "0815" })
    const api = ({ loadGame } as unknown) as API
    const repository = Repository({ api, storage })
    const result = await repository.loadGame("0815")
    result.should.deepEqual({ ...game, id: "0815" })
    loadGame.callCount.should.equal(1)
    loadGame.firstCall.args.should.deepEqual(["0815"])
  })

  it("should store a game in localstorage if server cannot be reached", async () => {
    const logger = { warn: (msg: string) => {} }
    const promise = new Promise((resolve) => (logger.warn = resolve))
    const game = initGame()
    const saveGame = sinon.stub()
    saveGame.rejects()
    const api = ({ saveGame } as unknown) as API
    const repository = Repository({ api, storage, logger })
    await repository.saveGame(game)
    saveGame.callCount.should.equal(1)
    Object.keys(saveGame.firstCall.args[0]).should.deepEqual(Object.keys(game))
    promise.should.be.resolvedWith(
      "save on server failed - at least the game is saved in localStorage, so you can save it maybe next time"
    )
  })
})
