import { createLaw } from "../Factory"

export default createLaw({
  id: "KeineFoerderungFuerTierhaltung",
  title: "Förderung für Tierhaltung abschaffen",
  description: "Subventionen für Tierhaltung werden insgesamt eingestellt.",

  effects(data, startYear, currentYear) {
    return {
      co2emmissions: -100,
      stateDebt: -1000,
      popularity: -data.popularity * 0.1,
    }
  },
})
