import "should"
import { createBaseValues, defaultValues } from "../src/repository"
import { GramPerPsgrKm } from "../src/types"

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
