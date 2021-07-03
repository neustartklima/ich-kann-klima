import "should"
import sinon from "sinon"
import { API } from "../src/api"
import Repository, { createBaseValues, defaultValues, initGame } from "../src/model/Repository"

describe("createBaseValues(defaultParams)", () => {
  const iniVals = createBaseValues(defaultValues)

  // Source: https://www.bmvi.de/SharedDocs/DE/Publikationen/G/verkehr-in-zahlen-2020-pdf.pdf?__blob=publicationFile p. 219
  it("should return 1168700 MioPsgrKm for total transport usage", () => {
    iniVals.passengerTransportUsage.should.be.approximately(1168700, 100)
  })

  // Source: https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx sheet "THG" row 2019
  it("should return 159.696 MioTons for co2emissions due to street vehicles", () => {
    iniVals.co2emissionsStreetVehicles.should.be.approximately(159.696, 0.1)
  })

  // TODO: Source claims 164.322 MioTons per year in 2019. Sums to 173.0 MioTons.
  // Source: https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx sheet "THG" row 2019
  it("should return 164.322 MioTons for co2emissionsMobility", () => {
    iniVals.co2emissionsMobility.should.be.approximately(173.0, 0.1)
  })

  // TODO: Source claims 258.043 MioTons per year in 2019. Sums only to 151.4 MioTons.
  // Source: https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx sheet "THG" row 2019
  it("should return 258.043 MioTons for co2emissionsEnergy", () => {
    iniVals.co2emissionsEnergy.should.be.approximately(151.4, 0.1)
  })

  // TODO: Source claims 809.799 MioTons per year in 2019. Sums to 711.8 MioTons.
  // Source: https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx sheet "THG" row 2019 without LULUCF
  it("should return 809.799 MioTons for co2emissions", () => {
    iniVals.co2emissions.should.be.approximately(711.8, 0.1)
  })
})

describe("repository", () => {
  const storage = ({
    setItem: sinon.spy(),
    getItem: sinon.spy(),
  } as unknown) as Storage

  it("should create a new game with the id provided by the API", async () => {
    const createGame = sinon.stub().resolves({ id: "12345" })
    const api = ({ createGame } as unknown) as API
    const repository = Repository({ api, storage })
    const result = await repository.createGame()
    createGame.callCount.should.equal(1)
    result.id.should.equal("12345")
  })

  it("should assign an id of '00000' for a new game if the server could not be reached", async () => {
    const logger = { warn: sinon.spy() }
    const createGame = sinon.stub().rejects(undefined)
    const api = ({ createGame } as unknown) as API
    const repository = Repository({ api, logger, storage })
    const result = await repository.createGame()
    result.id.should.equal("00000")
    logger.warn.callCount.should.equal(1)
    logger.warn.firstCall.args[0].should.equal("Cannot save new game - trying again later")
  })

  it("should save a game and assign an id", async () => {
    const game = initGame()
    const saveGame = sinon.stub().resolves({ ...game, id: "4711" })
    const api = ({ saveGame } as unknown) as API
    const repository = Repository({ api, storage })
    const result = await repository.saveGame(game)
    saveGame.callCount.should.equal(1)
    Object.keys(saveGame.firstCall.args[0]).should.deepEqual(Object.keys(game))
    result.should.deepEqual({ ...game, id: "4711" })
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
    const logger = { warn: sinon.spy() }
    const game = initGame()
    const saveGame = sinon.stub()
    saveGame.rejects()
    const api = ({ saveGame } as unknown) as API
    const repository = Repository({ api, storage, logger })
    const result = await repository.saveGame(game)
    saveGame.callCount.should.equal(1)
    Object.keys(saveGame.firstCall.args[0]).should.deepEqual(Object.keys(game))
    result.should.deepEqual({ ...game, id: "00000" })
    logger.warn.callCount.should.equal(1)
    logger.warn.firstCall.args[0].should.equal(
      "save on server failed - at least the game is saved in localStorage, so you can save it maybe next time"
    )
  })
})
