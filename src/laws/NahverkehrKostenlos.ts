import { defineLaw } from "../Factory"
import { MrdEuro, TsdPeople } from "../types"
import { linear } from "../lawTools"
import { Change, modify } from "../params"

export default defineLaw({
  title: "Nahverkehr Kostenlos",
  description:
    "Die Kosten für den Nahverkehr werden bundesweit bezuschusst, so dass keine Tickets mehr benötigt werden.",

  effects(data, startYear, currentYear): Change[] {
    const percentage = startYear === currentYear ? 10 : 1

    // Need to use carModifier and byValue() here, to ensure it does not fall below zero:
    const carModifier = modify("carUsage").byValue(-(percentage / 100) * data.publicLocalUsage)
    const carChange = carModifier.getChange(data)

    return [
      modify("stateDebt").byValue(10 as MrdEuro),
      modify("publicLocalUsage").byValue(-carChange),
      carModifier,
      modify("popularity").byValue(10).if(startYear === currentYear),
      modify("unemployment").byValue(20 as TsdPeople).if(startYear === currentYear), // 80 Tsd Beschäftigte im ÖPNV, geschätzt 1/4 für Ticketverkauf, -kontrolle und -abrechnung.  
    ]
  },

  priority(game) {
    const mobilityPercentage = (game.values.co2emissionsMobility / game.values.co2emissions) * 100
    return linear(0, 10, mobilityPercentage)
  },
})
