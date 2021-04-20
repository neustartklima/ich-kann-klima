type MioTons = number
type MrdEuro = number
type TsdPeople = number
type GWh = number

export type ModelValues = {
  co2Emmissions: MioTons
  stateDebt: MrdEuro
  unemployment: TsdPeople
  gdp: MrdEuro

  electrictyDemandTotal: GWh
}

export function initialValues(): ModelValues {
  return {
    co2Emmissions: 805, // in 2019, source https://www.bundesregierung.de/breg-de/aktuelles/bilanz-umweltbundesamt-1730880
    stateDebt: 1899, // in 2019, source https://de.wikipedia.org/wiki/Staatsverschuldung_Deutschlands
    unemployment: 2695, // in 2020, source https://www.arbeitsagentur.de/news/arbeitsmarkt-vorjahre
    gdp: 3332, // in 2020, source http://www.statistikportal.de/de/bruttoinlandsprodukt-vgr

    electrictyDemandTotal: 2300 // TODO source?
  }
}
