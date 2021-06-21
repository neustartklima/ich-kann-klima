import { defineLaw } from "../Factory"
import { MrdEuro, TsdPeople, WritableBaseParams } from "../types"
import { changeEmissionsBy, changePercentBy } from "../lawTools"

export default defineLaw({
  title: "Nahverkehr Kostenlos",
  description:
    "Die Kosten für den Nahverkehr werden bundesweit bezuschusst, so dass keine Tickets mehr benötigt werden.",
  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    if (startYear === currentYear) {
      return {
        unemployment: 20 as TsdPeople, // 80 Tsd Beschäftigte im ÖPNV, geschätzt 1/4 für Ticketverkauf, -kontrolle und -abrechnung.
        stateDebt: 10 as MrdEuro, // 13.3 Mrd € Ticketeinnahmen pro Jahr, Einsparung durch Ticketverkauf und Personal
        popularity: changePercentBy(data.popularity, 10),
        co2emissionsMobility: changeEmissionsBy(data.co2emissionsMobility, -2),
        //TODO Anzahl Leute, die Nahverkehr nutzen, steigt.
      }
    } else {
      return {
        stateDebt: 10 as MrdEuro, // 13.3 Mrd € Ticketeinnahmen pro Jahr
        co2emissionsMobility: changeEmissionsBy(data.co2emissionsMobility, -2),
        //TODO Anzahl Leute, die Nahverkehr nutzen, steigt.
      }
    }
  },
  priority(game) {
    const mobilityFraction = game.values.co2emissionsMobility / game.values.co2emissions
    return 1000 * mobilityFraction
  },
})
