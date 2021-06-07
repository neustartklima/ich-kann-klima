import { LawDefinition, MioTons, MrdEuro, Percent, WritableBaseParams } from "../types"

export default {
  title: "Nahverkehr Kostenlos",
  description:
    "Die Kosten für den Nahverkehr werden bundesweit bezuschusst, so dass keine Tickets mehr benötigt werden.",
  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    if (startYear === currentYear) {
      return {
        unemployment: 20, // [Tsd] 80 Tsd Beschäftigte im ÖPNV, geschätzt 1/4 für Ticketverkauf, -kontrolle und -abrechnung.
        stateDebt: 10, // [Mrd €] 13.3 Mrd € Ticketeinnahmen pro Jahr, Einsparung durch Ticketverkauf und Personal
        popularity: Math.min(100 - data.popularity, 10 as Percent),
        co2emissionsMobility: Math.max(-data.co2emissionsMobility, -2 as MioTons),
        //Anzahl Leute, die Nahverkehr nutzen, steigt.
      }
    } else {
      return {
        stateDebt: 10, // [Mrd €] 13.3 Mrd € Ticketeinnahmen pro Jahr
        co2emissionsMobility: Math.max(-data.co2emissionsMobility, -2 as MioTons),
        //Anzahl Leute, die Nahverkehr nutzen, steigt.
      }
    }
  },
  priority(game) {
    const mobilityFraction = game.values.co2emissionsMobility / game.values.co2emissions
    return 1000 * mobilityFraction
  },
} as LawDefinition
