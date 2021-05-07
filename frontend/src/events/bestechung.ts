import { createEvent } from "../Factory"

export default createEvent({
  title: "Anruf von befreundetem Unternehmer",
  description: `Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und möchte dich in seine
    Ferienvilla auf Sardinien einladen. Er geht natürlich davon aus, dass du den Gesetzentwurf zum Abbau von Subventionen
    für Gaskraftwerke nicht zustimmen wirst.
  `,

  effects(data, startYear, currentYear) {
    return {
      gdp: 20
    }
  }
})