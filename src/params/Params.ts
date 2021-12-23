import {
  ageb2020AuswertungstabellenEnergiebilanz,
  ba2020Arbeitslosenzahlen,
  bmvi2020VerkehrInZahlen,
  cite,
  emse2021CO2Rechner,
  fraunhoferISE2020ElectricityGeneration,
  motor12020AutosInDeutschland,
  polarstern2021CO2nachBrennstoff,
  rensmart2021kWhToCO2,
  sb2020Bevoelkerung,
  statAemter2021BIP,
  uba2020DeutscheTreibhausgasEmissionen,
  uba2021crfTabellen,
  ubaEmissionenDesVerkehrs,
  ukgov2018kWhToCO2,
  umweltrat2020Umweltgutachten,
  vdv2019Statistik,
  wikipediaBetz,
} from "../citations"
import { markdown } from "../lib/utils"
import { GramPerPsgrKm, MioPsgrKm, MioTons, MrdEuro, Percent, TsdPeople, TWh } from "../types"
import { ComputedParam, ParamsBase, WritableParam } from "./ParamsTypes"

const co2budget = new WritableParam({
  unit: "MioTons",
  initialValue: 6700,
  citations: [umweltrat2020Umweltgutachten],
  details: markdown`

  `,
  internals: markdown`

  `,
})

const co2emissionsIndustry = new WritableParam({
  unit: "MioTons",
  initialValue: 186.793,
  citations: [uba2020DeutscheTreibhausgasEmissionen],
  details: markdown`

  `,
  internals: markdown`

  `,
})

const co2emissionsStreetVehicles = new ComputedParam({
  unit: "MioTons",
  valueGetter(data: ParamsBase): MioTons {
    const carNonrenewable: MioPsgrKm = data.carUsage * (1 - data.carRenewablePercentage / 100)
    const co2emissionsCars: MioTons = (carNonrenewable * data.carEmissionFactor) / 1000000
    const co2emissionsTrucks: MioTons = 14.4
    return co2emissionsCars + co2emissionsTrucks
  },
  shouldInitiallyBe: 159.696 as MioTons,
  citations: [uba2020DeutscheTreibhausgasEmissionen, ubaEmissionenDesVerkehrs],
  details: markdown`

  `,
  internals: markdown`
    ${cite(uba2020DeutscheTreibhausgasEmissionen)}: 159.696 as MioTons

    ${cite(ubaEmissionenDesVerkehrs)}: 47.4 MioTons CO2e pro Jahr durch LKW in 2019.

    TODO: #72 Hier wird 14.4 MioTons verwendet, um die korrekten Gesamtemissionen zu erhalten.
  `,
})

const co2emissionsMobility = new ComputedParam({
  unit: "MioTons",
  valueGetter(data: ParamsBase): MioTons {
    return (
      data.co2emissionsStreetVehicles +
      (data.publicLocalCapacity * (65 as GramPerPsgrKm)) / 1000000 +
      (data.publicNationalCapacity * (32 as GramPerPsgrKm)) / 1000000 +
      (data.airDomesticUsage * (222 as GramPerPsgrKm)) / 1000000 +
      (1.641 as MioTons)
    )
  },
  // TODO: #72 See `internals`.
  //shouldInitiallyBe: 164.322,
  citations: [vdv2019Statistik, uba2020DeutscheTreibhausgasEmissionen],
  details: markdown`

  `,
  internals: markdown`
    ${cite(vdv2019Statistik)}:
    - 65 g/Pkm für Nahverkehr (publicLocal),
    - 32 g/Pkm für Fernverkehr (publicNational),
    - 230 g/Pkm für Inlands-Flugverkehr (airDomestic).

    Rückwärtsrechnung aus ${cite(uba2020DeutscheTreibhausgasEmissionen)} ergibt
    222 g/Pkm für Inlands-Flugverkehr (airDomestic). Wird derzeit benutzt.

    ${cite(uba2020DeutscheTreibhausgasEmissionen)}:
    1.641 MioTons CO2e Emissionen durch Küsten- und Inlandsshifffahrt.

    Einheitenumrechnung:
    - 1 MioPsgrKm * 1 GramPerPsgrKm = 1 MioGram = 1 Ton.
    - Zieleinheit: MioTons. Also durch 1 000 000 teilen.

    ${cite(uba2020DeutscheTreibhausgasEmissionen)}: Gesamtemissionenen addieren sich 2019 auf 164.322 MioTons pro Jahr.

    TODO: #72 Derzeit ergibt sich die summe 173.7 MioTons. Laut Quelle sollten es 164.322 MioTons sein.
  `,
})

const co2emissionsBuildings = new ComputedParam({
  unit: "MioTons",
  valueGetter(data: ParamsBase): MioTons {
    return (
      data.buildingsSourceBio * 0 +
      data.buildingsSourceGas * 0.247 +
      data.buildingsSourceOil * 0.318 +
      data.buildingsSourceTele * 0.16
    )
  },
  // TODO: #72 See `internals`.
  //shouldInitiallyBe: 123.461 as MioTons,
  citations: [uba2020DeutscheTreibhausgasEmissionen, polarstern2021CO2nachBrennstoff],
  details: markdown`

  `,
  //TODO: #91
  internals: markdown`
    TODO: #91 Gibt es hier bessere Quellen?

    ${cite(polarstern2021CO2nachBrennstoff)}: 247g CO2 pro kWh Erdgas.

    ${cite(polarstern2021CO2nachBrennstoff)}: 318g CO2 pro kWh Erdöl.

    ${cite(emse2021CO2Rechner)}: 160g CO2 pro kWh Fernwärme.

    ${cite(uba2020DeutscheTreibhausgasEmissionen)}: Gesamtemissionenen addieren sich 2019 auf 123.461 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 168.6 MioTons. Sollte laut Quelle oben 123.461 MioTons sein.
  `,
})

const co2emissionsAgriculture = new WritableParam({
  unit: "MioTons",
  initialValue: 67.936,
  citations: [uba2020DeutscheTreibhausgasEmissionen],
  details: markdown`

  `,
  internals: markdown`

  `,
})

const co2emissionsOthers = new WritableParam({
  unit: "MioTons",
  initialValue: 9.243,
  citations: [uba2020DeutscheTreibhausgasEmissionen],
  details: markdown`

  `,
  internals: markdown`

  `,
})

const co2emissionsEnergy = new ComputedParam({
  unit: "MioTons",
  valueGetter(data: ParamsBase): MioTons {
    return (
      data.electricityGas * 0.399 +
      data.electricitySolar * 0.058 +
      data.electricityWind * 0.005 +
      data.electricityWater * 0.02 +
      data.electricityHardCoal * 0.835 +
      data.electricityBrownCoal * 1.137 +
      data.electricityBiomass * 0.03 +
      data.electricityNuclear * 0.005
    )
  },
  // TODO: #72 See `internals`.
  //shouldInitiallyBe: 258.043 as MioTons,
  citations: [rensmart2021kWhToCO2, uba2020DeutscheTreibhausgasEmissionen],
  details: markdown`

  `,
  internals: markdown`
    ${cite(rensmart2021kWhToCO2)}:
    - 0.5     kg CO2e / kWh durch Gaskraftwerke, (verwendet: 0.399)
    - 0.058   kg CO2e / kWh durch Photovoltaikanlagen,
    - 0.00464 kg CO2e / kWh durch onshore Windräder, (verwendet: 0.005)
    - 0.00525 kg CO2e / kWh durch offshore Windräder, (verwendet: 0.005)
    - 0.02    kg CO2e / kWh durch Pumpspeicherkraftwerke, (nicht verwendet)
    - 0.005   kg CO2e / kWh durch Wasserkraftwerke, (verwendet: 0.02)
    - 0.9     kg CO2e / kWh durch Kohlekraftwerke, (verwendet: 0.835 für Stein-, bzw. 1.137 für Braunkohle)
    - 0.005   kg CO2e / kWh durch Kernkraftwerke,

    TODO: #78 Diverse Punkte:
    - Diskrepanzen zur Quelle klären.
    - Diskrepanz zu ${cite(ukgov2018kWhToCO2)} klären, z.B. Gas.
    - Quellen für Stein-.und Braunkohle.
    - Korrekter Wert und Quelle für Biomasse. (Aktuelle Annahme: Zwischen Wind- und Solarstrom.)

    ${cite(uba2020DeutscheTreibhausgasEmissionen)}: Gesamtemissionenen addieren sich 2019 auf 258.043 MioTons pro Jahr.

    TODO: #72 Tatsächliche Summe ist derzeit 152.7 MioTons. Sollte laut Quelle oben 258.043 MioTons sein.
  `,
})

const co2emissions = new ComputedParam({
  unit: "MioTons",
  valueGetter(data: ParamsBase): MioTons {
    return (
      data.co2emissionsEnergy +
      data.co2emissionsIndustry +
      data.co2emissionsMobility +
      data.co2emissionsBuildings +
      data.co2emissionsAgriculture +
      data.co2emissionsOthers
    )
  },
  // TODO: #72 See `internals`.
  //shouldInitiallyBe: 809.799,
  details: markdown`

  `,
  internals: markdown`
    Die negativen LULUCF emissionen werden hier derzeit nicht berücksichtigt.

    ${cite(uba2020DeutscheTreibhausgasEmissionen)}: Gesamtemissionenen addieren sich 2019 auf 809.799 MioTons pro Jahr.

    TODO: #72  Tatsächliche Summe ist derzeit 759.01 MioTons. Sollte laut Quelle oben 809.799 MioTons sein.

    Hier sind ein paar Referenzen gelistet, die interessant sind, und noch nicht verarbeitet wurden.
  `,

  citations: [uba2021crfTabellen],
})

const electricityDemand = new WritableParam({
  unit: "TWh",
  initialValue: 480.54,
  citations: [fraunhoferISE2020ElectricityGeneration],
  details: markdown`

  `,
  internals: markdown`

  `,
})

const electricityGridQuality = new WritableParam({
  unit: "Percent",
  initialValue: 50,
  citations: [],
  details: markdown`
    Ein qualitatives Maß für den Ausbau des Stromnetzes, der notwendig ist,
    um as auf dezentrale und neue (z.B. off-shore) Standorte der Stromerzeugung
    vorzubereiten.

    50% steht für die initiale Situation. 100% ist der ideale notwenidge
    Ausbausstand für 100% regenerativ/dezentral erzeugten Strom.
  `,
  internals: markdown`

  `,
})

const electricitySolar = new WritableParam({
  unit: "TWh",
  initialValue: 51.42,
  citations: [fraunhoferISE2020ElectricityGeneration],
  details: markdown`

  `,
  internals: markdown`

  `,
})

const electricityWind = new WritableParam({
  unit: "TWh",
  initialValue: 131.85,
  citations: [fraunhoferISE2020ElectricityGeneration],
  details: markdown`

  `,
  internals: markdown`

  `,
})

const electricityWindOnshoreMaxNew = new WritableParam({
  unit: "TWh",
  initialValue: 6.0,
  citations: [fraunhoferISE2020ElectricityGeneration],
  details: markdown`

  `,
  internals: markdown`

  `,
})

const electricityWindEfficiency = new WritableParam({
  unit: "Percent",
  initialValue: 100,
  citations: [wikipediaBetz],
  details: markdown`
Relative efficiency of wind turbines in percent of the current efficiency (about 40%).
  `,
})

const electricityWater = new WritableParam({
  unit: "TWh",
  initialValue: 14.99,
  citations: [fraunhoferISE2020ElectricityGeneration],
  details: markdown`

  `,
  internals: markdown`

  `,
})

const electricityBiomass = new WritableParam({
  unit: "TWh",
  initialValue: 43.19,
  citations: [fraunhoferISE2020ElectricityGeneration],
  details: markdown`

  `,
  internals: markdown`

  `,
})

const electricityNuclear = new WritableParam({
  unit: "TWh",
  initialValue: 60.91,
  citations: [fraunhoferISE2020ElectricityGeneration],
  details: markdown`

  `,
  internals: markdown`

  `,
})

const electricityHardCoal = new WritableParam({
  unit: "TWh",
  initialValue: 35.46,
  citations: [fraunhoferISE2020ElectricityGeneration],
  details: markdown`

  `,
  internals: markdown`

  `,
})

const electricityBrownCoal = new WritableParam({
  unit: "TWh",
  initialValue: 82.13,
  citations: [fraunhoferISE2020ElectricityGeneration],
  details: markdown`

  `,
  internals: markdown`

  `,
})

const electricityCoal = new ComputedParam({
  unit: "TWh",
  valueGetter(data: ParamsBase): number {
    return data.electricityHardCoal + data.electricityBrownCoal
  },
  details: markdown`

  `,
  internals: markdown`

  `,
})

const electricityGas = new ComputedParam({
  unit: "TWh",
  valueGetter(data: ParamsBase): number {
    return (
      data.electricityDemand -
      data.electricitySolar -
      data.electricityWind -
      data.electricityWater -
      data.electricityHardCoal -
      data.electricityBrownCoal -
      data.electricityBiomass -
      data.electricityNuclear
    )
  },
  details: markdown`

  `,
  internals: markdown`
    Mit Gaskraftwerken wird derzeit der benötigte Strom produziert,
    der nicht über andere Wege erzeugt wird.
  `,
})

const carEmissionFactor = new WritableParam({
  unit: "GramPerPsgrKm",
  initialValue: 160 as GramPerPsgrKm,
  citations: [vdv2019Statistik],
  details: markdown`

  `,
  internals: markdown`
    ${cite(vdv2019Statistik)} Seite 11 ergibt ca. 160 g/Pkm.
  `,
})

const carUsage = new WritableParam({
  unit: "MioPsgrKm",
  initialValue: 917000 as MioPsgrKm,
  citations: [bmvi2020VerkehrInZahlen],
  details: markdown`

  `,
  internals: markdown`

  `,
})

const carRenewablePercentage = new WritableParam({
  unit: "Percent",
  initialValue: 0.5 as Percent,
  citations: [motor12020AutosInDeutschland],
  details: markdown`

  `,
  internals: markdown`
    Die verschiedenen Zahlen in ${cite(motor12020AutosInDeutschland)}
    liefern einen Anteil Elektro-/Hybrid-Fahrzeugen von unter 1%.
    Welcher Anteil davon als erneuerbar angesehen werden kann ist unklar.

    TODO: #78 Bessere Quelle und besseren Wert. KBA könnte besser Zahlen haben.
  `,
})

const publicLocalUsage = new WritableParam({
  unit: "MioPsgrKm",
  initialValue: 112600 as MioPsgrKm,
  citations: [bmvi2020VerkehrInZahlen],
  details: markdown`

  `,
  internals: markdown`

  `,
})

const publicLocalCapacity = new WritableParam({
  unit: "MioPsgrKm",
  initialValue: 112600 as MioPsgrKm,
  citations: [bmvi2020VerkehrInZahlen],
  details: markdown`

  `,
  internals: markdown`
    Kapazität wird nicht als die Anzahl der Sitzplätze o.ä. definiert,
    sondern es wird definiert, dass die aktuelle Auslastungslage 100% entspricht.
    Also ist die anfängliche Kapazität gleich der Nutzung.

    Auf diese Weise ist es leichter, die Qualität, das Gedränge
    zu beurteilen:

    - \`publicLocalUsage > publicLocalCapacity \` bedeutet, es ist enger als jetzt.
    - \`publicLocalUsage < publicLocalCapacity \` bedeutet, es ist mehr Platz.
  `,
})

const publicNationalUsage = new WritableParam({
  unit: "MioPsgrKm",
  initialValue: 67300 as MioPsgrKm,
  citations: [bmvi2020VerkehrInZahlen],
  details: markdown`

  `,
  internals: markdown`
    # Berechnung aus der Quelle

    public - local - air = 251700 - 71800 - 112600 = 67300 MioPsgrKm
  `,
})

const publicNationalCapacity = new WritableParam({
  unit: "MioPsgrKm",
  initialValue: 67300 as MioPsgrKm,
  citations: [bmvi2020VerkehrInZahlen],
  details: markdown`

  `,
  internals: markdown`
Siehe \`publicLocalCapacity\`.
  `,
})

const airDomesticUsage = new WritableParam({
  unit: "MioPsgrKm",
  initialValue: 10100 as MioPsgrKm,
  citations: [bmvi2020VerkehrInZahlen],
  details: markdown`

  `,
  internals: markdown`

  `,
})

const airIntlUsage = new WritableParam({
  unit: "MioPsgrKm",
  initialValue: 61700 as MioPsgrKm,
  citations: [bmvi2020VerkehrInZahlen],
  details: markdown`

  `,
  internals: markdown`

  `,
})

const passengerTransportUsage = new ComputedParam({
  unit: "MioPsgrKm",
  valueGetter(data: ParamsBase): MioPsgrKm {
    return data.carUsage + data.publicLocalUsage + data.publicNationalUsage + data.airDomesticUsage + data.airIntlUsage
  },
  shouldInitiallyBe: 1168700 as MioPsgrKm,
  citations: [bmvi2020VerkehrInZahlen],
  details: markdown`

  `,
  internals: markdown`

  `,
})

const buildingsIndustryDemand = new WritableParam({
  unit: "TWh",
  initialValue: 226 as TWh,
  citations: [],
  details: markdown`

  `,
  internals: markdown`
TODO: #78 Quelle für Anfangswert 226 TWh.
  `,
})

const buildingsPrivateDemand = new WritableParam({
  unit: "TWh",
  initialValue: 544 as TWh,
  citations: [],
  details: markdown`

  `,
  internals: markdown`
TODO: #78 Quelle für Anfangswert 544 TWh.
  `,
})

const buildingsDemand = new ComputedParam({
  unit: "TWh",
  valueGetter(data: ParamsBase): TWh {
    return data.buildingsPrivateDemand + data.buildingsIndustryDemand
  },
  shouldInitiallyBe: 770,
  citations: [],
  details: markdown`

  `,
  internals: markdown`
    TODO: #78 Quelle ${cite(ageb2020AuswertungstabellenEnergiebilanz)} gibt diese Zahlen nicht her.
  `,
})

const buildingsSourceBio = new WritableParam({
  unit: "TWh",
  initialValue: 130 as TWh,
  citations: [],
  details: markdown`

  `,
  internals: markdown`
TODO: #78 Quelle für Anfangswert 130 TWh.
  `,
})

const buildingsSourceOil = new WritableParam({
  unit: "TWh",
  initialValue: 219 as TWh,
  citations: [],
  details: markdown`

  `,
  internals: markdown`
TODO: #78 Quelle für Anfangswert 219 TWh.
  `,
})

const buildingsSourceTele = new WritableParam({
  unit: "TWh",
  initialValue: 58 as TWh,
  citations: [],
  details: markdown`

  `,
  internals: markdown`
TODO: #78 Quelle für Anfangswert 58 TWh.
  `,
})

const buildingsSourceGas = new ComputedParam({
  unit: "TWh",
  valueGetter(data: ParamsBase): TWh {
    return data.buildingsDemand - (data.buildingsSourceBio + data.buildingsSourceOil + data.buildingsSourceTele)
  },
  // TODO: #72 See `internals`.
  //shouldInitiallyBe: 359 as TWh,
  citations: [],
  details: markdown`

  `,
  internals: markdown`
    TODO: #78 Anfangswert mit Quelle.

    TODO: #78 Quelle ${cite(ageb2020AuswertungstabellenEnergiebilanz)} gibt diese Zahlen nicht her.

    TODO: #72 Tatsächliche Summe ist derzeit 363 TWh. Sollte laut Quelle oben 359 TWh sein.
`,
})

const popularity = new WritableParam({
  unit: "Percent",
  initialValue: 50 as Percent,
  citations: [],
  details: markdown`
Prozentsatz der Bevölkerung, der Dich als Kanzler akzeptiert.
  `,
  internals: markdown`

  `,
})

const numberOfCitizens = new WritableParam({
  unit: "TsdPeople",
  initialValue: 83155.031 as TsdPeople,
  citations: [sb2020Bevoelkerung],
  details: markdown`

  `,
  internals: markdown`
Anfangswert ist der Stand 31.12.2020.
  `,
})

const unemployment = new WritableParam({
  unit: "TsdPeople",
  initialValue: 2695 as TsdPeople,
  citations: [ba2020Arbeitslosenzahlen],
  details: markdown`

  `,
  internals: markdown`
Anfangswert ist der Jahresdurchschnitt der Arbeitslosenzahlen in 2020.
  `,
})

const gdp = new WritableParam({
  unit: "MrdEuro",
  initialValue: 3332 as MrdEuro,
  citations: [statAemter2021BIP],
  details: markdown`

  `,
  internals: markdown`
Anfangswert ist das BIP 2020.
  `,
})

const stateDebt = new WritableParam({
  unit: "MrdEuro",
  initialValue: 1899 as MrdEuro,
  citations: [],
  details: markdown`

  `,
  internals: markdown`
Anfangswert ist die deutsche Staatsverschuldung 2019.
  `,
})

export const paramDefinitions = {
  co2budget,
  co2emissionsIndustry,
  co2emissionsStreetVehicles,
  co2emissionsMobility,
  co2emissionsAgriculture,
  co2emissionsBuildings,
  co2emissionsOthers,
  co2emissionsEnergy,
  co2emissions,

  electricityDemand,
  electricityGridQuality,

  electricitySolar,
  electricityWind,
  electricityWindOnshoreMaxNew,
  electricityWindEfficiency,
  electricityWater,
  electricityBiomass,
  electricityNuclear,
  electricityHardCoal,
  electricityBrownCoal,
  electricityCoal,
  electricityGas,

  carEmissionFactor,
  carUsage,
  carRenewablePercentage,
  publicLocalUsage,
  publicLocalCapacity,
  publicNationalUsage,
  publicNationalCapacity,
  airDomesticUsage,
  airIntlUsage,
  passengerTransportUsage,

  buildingsIndustryDemand,
  buildingsPrivateDemand,
  buildingsDemand,
  buildingsSourceBio,
  buildingsSourceOil,
  buildingsSourceTele,
  buildingsSourceGas,

  popularity,

  numberOfCitizens,
  unemployment,

  gdp,
  stateDebt,
}
