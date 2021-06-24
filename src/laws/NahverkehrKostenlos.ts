import { defineLaw } from "../Factory"
import { MrdEuro, TsdPeople, WritableBaseParams } from "../types"
import { changeMioPsgrKmBy, changePercentBy, linear } from "../lawTools"

export default defineLaw({
  title: "Nahverkehr Kostenlos",
  description:
    "Die Kosten für den Nahverkehr werden bundesweit bezuschusst, so dass keine Tickets mehr benötigt werden.",
  effects(data, startYear, currentYear): Partial<WritableBaseParams> {
    const percentage = startYear === currentYear ? 10 : 1
    const potentialUsageIncrease = (percentage / 100) * data.shortdistanceTransportUsage
    // Need to use change...By for carUsage here, to ensure it does not fall below zero:
    const usageIncrease = -changeMioPsgrKmBy(data.carUsage, -potentialUsageIncrease)

    const yearly: Partial<WritableBaseParams> = {
      stateDebt: 10 as MrdEuro, // 13.3 Mrd € Ticketeinnahmen pro Jahr, Einsparung durch Ticketverkauf und Personal
      shortdistanceTransportUsage: usageIncrease,
      carUsage: -usageIncrease,
    }
    if (startYear === currentYear) {
      return {
        ...yearly,
        unemployment: 20 as TsdPeople, // 80 Tsd Beschäftigte im ÖPNV, geschätzt 1/4 für Ticketverkauf, -kontrolle und -abrechnung.
        popularity: changePercentBy(data.popularity, 10),
      }
    } else {
      return yearly
    }
  },
  priority(game) {
    const mobilityPercentage = (game.values.co2emissionsMobility / game.values.co2emissions) * 100
    return linear(0, 10, mobilityPercentage)
  },
})
