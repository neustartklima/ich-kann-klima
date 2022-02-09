import { markdown } from "../../lib/utils"
import { Change, modify } from "../../params"
import { MioTons, MrdEuro, TWh } from "../../types"
import { defineLaw, monthsEffort } from "../LawsTypes"
import { linear, renewablePercentage } from "../lawTools"

export default defineLaw({
  title: "CO2 Abscheidung und Speicherung (DACCS) fördern",
  description:
    "Entstehende Technologien zur Abscheidung aus der Luft (DAC) und Speicherung von CO2 werden mit 1 Mrd Euro im Jahr gefördert.",

  effort(game) {
    return monthsEffort(9)
  },

  effects(game, startYear, currentYear): Change[] {
    const moneyInvested: MrdEuro = 1
    const co2Captured: MioTons = (moneyInvested / 200) /* Euro/TonCO2 */ * 1000 /* Mrd/Mio */
    const electricityUsed: TWh = (co2Captured * 400) /* kWh/TonCO2 */ / 1000 /* Mio*kilo/Tera */

    return [
      modify("stateDebt").byValue(moneyInvested),
      modify("co2directAirCapture").byValue(co2Captured),
      modify("electricityDemand").byValue(electricityUsed),
    ]
  },

  priority(game) {
    return linear(70, 90, renewablePercentage(game))
  },
  citations: [],
  details: markdown`

  `,
  internals: markdown`
    TDOO #91: So far only https://de.wikipedia.org/wiki/Direct_air_capture.

    Angaben für Kosten reichen von 10 USD bis 1000 USD pro Tonne CO2.
    Mehrere Angaben 100 USD bis 200 USD. Wir gehen von 250 EUR aus, um
    versteckte, indirekte Kosten mit einzubeziehen.

    In Wikipedia wird 250 kWh pro Tonne CO2 erwähnt. Dazu kommt noch ein
    beträchtlicher Wasserverbrauch. Wir nehmen zunächst 400kWh an, auch um
    potentielle negative Effekte abzubilden.
  `,
})
