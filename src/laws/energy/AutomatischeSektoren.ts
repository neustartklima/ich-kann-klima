import { markdown } from "../../lib/utils"
import { modify, transfer } from "../../params"
import { paramDefinitions } from "../../params/Params"
import { defineLaw } from "../LawsTypes"
import { renewablePercentage } from "../lawTools"

export default defineLaw({
  title: "Automatische Anpassungen einiger Sektoren",
  description:
    "Mobilität, Industrie, Gebäude und Landwirtschaft nutzen automatisch regenerative Energiequellen, sobald sie zur Verfügung stehen.",
  labels: ["initial"],

  effects(game, startYear, currentYear) {
    if (renewablePercentage(game) < 70) return []

    paramDefinitions.co2emissionsOthers

    const industryCo2Red = modify("co2emissionsIndustry").byPercent(-20)
    const industryCo2RedVal = industryCo2Red.getChange(game.values)
    // Amount of electricity producing that amount of CO2 with hard coal:
    const industryElectrDemandIncrease = industryCo2RedVal / -0.835

    return [
      modify("carRenewablePercentage").byValue(10),
      // (10% * 917000 MioPsgrKm) * (24 kWh / 100 km) = 917 * 24 Mio kWh = 22008 GWh = 22 TWh
      modify("electricityDemand").byValue(22),

      industryCo2Red,
      modify("electricityDemand").byValue(industryElectrDemandIncrease),

      transfer("buildingsSourceBio", "buildingsSourceOil").byValue(10),
      transfer("electricityDemand", "buildingsSourceOil").byValue(10),
      transfer("buildingsSourceBio", "buildingsSourceTele").byValue(5),

      modify("co2emissionsAgriculture").byValue(-10),

      modify("co2emissionsOthers").byValue(-1),
    ]
  },

  priority(game) {
    return 0
  },

  citations: [],
  details: markdown`

  `,
  internals: markdown`
    Dieses Gesetz läuft dauerhaft mit und soll kompensieren, dass es für diese Sektoren noch nicht genügend Gesetze gibt.
  `,
})
