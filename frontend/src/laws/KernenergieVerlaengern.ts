import { createLaw } from "../Factory"

export default createLaw({
  title: "Kernenergienutzung verlängern",
  description:
    "Die Kernkraftwerke wird erlaubt bis zum Ende ihres Lebenszyklus weiterzulaufen." +
    " Die jetzt beschlossenen frühzeitigen Abschaltungen werden ausgesetzt." +
    " Eigentlich bereits abgeschaltete Kernkraftwerke wieder in Betrieb nehmen und neue bauen.",
  removeLawsWithLabels: ["Kernenergie"],

  effects(data, startYear, currentYear) {
    return {
      co2emmissions: -100,
      
      stateDebt: 1000,
    }
  },
})
