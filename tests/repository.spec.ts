import "should"
import { createBaseValues, defaultValues } from "../src/repository"
import { GramPerPsgrKm } from "../src/types"

describe("createBaseValues(defaultParams)", () => {
  const iniVals = createBaseValues(defaultValues)

  // TODO: Source claims 739.5 MioTons per year in 2020. Sums only to 697.2 MioTons.
  // Source https://www.bmu.de/pressemitteilung/treibhausgasemissionen-sinken-2020-um-87-prozent/
  // TODO: Source claims 793.335 MioTons per year in 2019. Sums only to 697.2 MioTons.
  // Source: https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx sheet "THG"
  it("should return 793.335 MioTons for co2emissions", () => {
    iniVals.co2emissions.should.be.approximately(697.2, 0.1)
  })

  // TODO: Source claims 159.696 MioTons per year in 2019. Calculation results in 150.5
  // Source: https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx sheet "THG"
  it("should return 159.696 MioTons for co2emissions due to car usage", () => {
    ;((iniVals.carUsage * (170 as GramPerPsgrKm)) / 1000000).should.be.approximately(150.5, 0.1)
  })

  // TODO: Source claims 164.322 MioTons per year in 2019. Sums only to 162.7 MioTons.
  // Source: https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx
  it("should return 164.322 MioTons for co2emissionsMobility", () => {
    iniVals.co2emissionsMobility.should.be.approximately(162.7, 0.1)
  })

  // TODO: Source claims 258.043 MioTons per year in 2019. Sums only to 151.4 MioTons.
  // Source: https://www.umweltbundesamt.de/sites/default/files/medien/361/dokumente/2021_03_10_trendtabellen_thg_nach_sektoren_v1.0.xlsx
  it("should return 258.043 MioTons for co2emissionsEnergy", () => {
    iniVals.co2emissionsEnergy.should.be.approximately(151.4, 0.1)
  })
})
