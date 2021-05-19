import { createLaw } from "../Factory"

export default createLaw(import.meta.url, {
  title: "Förderung für Tierhaltung abschaffen",
  description: "Subventionen für Tierhaltung werden insgesamt eingestellt.",

  effects(data, startYear, currentYear) {
    return {
      co2emmissions: -100,
      stateDebt: -1000,
      popularity: -data.popularity * 0.1,
    }
  },

  priority(game) {
    return 100 - game.values.unemployment / 100 // Not allowed if unemployment over 10 000 000
  },
})
