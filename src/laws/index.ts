import AllesBleibtBeimAlten from "./AllesBleibtBeimAlten"
import KohleverstromungEinstellen from "./KohleverstromungEinstellen"
import EnergiemixRegeltDerMarkt from "./EnergiemixRegeltDerMarkt"
import KernenergienutzungVerlaengern from "./KernenergienutzungVerlaengern"
import InitialAtomausstieg from "./InitialAtomausstieg"
import NetzausbauErleichtern from "./NetzausbauErleichtern"
import NetzausbauFoerdern from "./NetzausbauFoerdern"
import StromspeicherungErleichtern from "./StromspeicherungErleichtern"
import StromspeicherungFoerdern from "./StromspeicherungFoerdern"
import DaemmungAltbau1Percent from "./DaemmungAltbau1Percent"
import DaemmungAltbau2Percent from "./DaemmungAltbau2Percent"
import DaemmungAltbau4Percent from "./DaemmungAltbau4Percent"
import DaemmungAltbauAbschaffen from "./DaemmungAltbauAbschaffen"
import NahverkehrAusbauen from "./NahverkehrAusbauen"
import NahverkehrModernisieren from "./NahverkehrModernisieren"
import FoerderungFuerTierhaltungAbschaffen from "./FoerderungFuerTierhaltungAbschaffen"
import NahverkehrKostenlos from "./NahverkehrKostenlos"
import AutosInInnenstaedtenVerbieten from "./AutosInInnenstaedtenVerbieten"
import FernverkehrVerbindungenAusbauen from "./FernverkehrVerbindungenAusbauen"
import FernverkehrModernisieren from "./FernverkehrModernisieren"
import WasserstofftechnologieFoerdern from "./WasserstofftechnologieFoerdern"
import WasserstoffmobilitaetFoerdern from "./WasserstoffmobilitaetFoerdern"
import AbschaffungDerMineraloelsteuer from "./AbschaffungDerMineraloelsteuer"
import AusbauVonStrassen from "./AusbauVonStrassen"
import DieselPrivilegAbgeschaffen from "./DieselPrivilegAbgeschaffen"
import DienstwagenPrivilegAbgeschaffen from "./DienstwagenPrivilegAbgeschaffen"
import Tempolimit130AufAutobahnen from "./Tempolimit130AufAutobahnen"
import Tempolimit120AufAutobahnen from "./Tempolimit120AufAutobahnen"
import Tempolimit100AufAutobahnen from "./Tempolimit100AufAutobahnen"
import TempolimitAufAutobahnenAussitzen from "./TempolimitAufAutobahnenAussitzen"
import ElektromobilitaetFoerdern from "./ElektromobilitaetFoerdern"
import LadeinfrastrukturAusbauen from "./LadeinfrastrukturAusbauen"
import WindkraftVereinfachen from "./WindkraftVereinfachen"
import AbstandsregelnFuerWindkraftWieBisher from "./AbstandsregelnFuerWindkraftWieBisher"
import AbstandsregelnFuerWindkraftLockern from "./AbstandsregelnFuerWindkraftLockern"
import AbstandsregelnFuerWindkraftAbschaffen from "./AbstandsregelnFuerWindkraftAbschaffen"
import AbstandsregelnFuerWindkraftVerschaerfen from "./AbstandsregelnFuerWindkraftVerschaerfen"
import AusschreibungsverfahrenfuerWindkraftWieBisher from "./AusschreibungsverfahrenfuerWindkraftWieBisher"
import AusschreibungsverfahrenfuerWindkraftVerdoppeln from "./AusschreibungsverfahrenfuerWindkraftVerdoppeln"
import AusschreibungsverfahrenfuerWindkraftVervierfachen from "./AusschreibungsverfahrenfuerWindkraftVervierfachen"
import AusschreibungsverfahrenfuerWindkraftVerachtfachen from "./AusschreibungsverfahrenfuerWindkraftVerachtfachen"
import CO2PreisErhoehen from "./CO2PreisErhoehen"
import WirksamerCO2Preis from "./WirksamerCO2Preis"
import VollerCO2Preis from "./VollerCO2Preis"
import SolarstromFoerderungAbschaffen from "./SolarstromFoerderungAbschaffen"
import SolarstromFoerderungWieZuBeginn from "./SolarstromFoerderungWieZuBeginn"
import SolarstromFoerdernx2 from "./SolarstromFoerdernx2"
import SolarstromFoerdernx4 from "./SolarstromFoerdernx4"
import SolarstromFoerdernx8 from "./SolarstromFoerdernx8"
import SolarAufAllenDaechernVerpflichtend from "./SolarAufAllenDaechernVerpflichtend"
import ForschungUndEntwicklungStromspeicherung from "./ForschungUndEntwicklungStromspeicherung"
import ForschungEmissionsfreieStahlproduktion from "./ForschungEmissionsfreieStahlproduktion"
import ForschungEmissionsfreieZementproduktion from "./ForschungEmissionsfreieZementproduktion"
import ForschungDezentraleStromerzeugung from "./ForschungDezentraleStromerzeugung"

import { lawList } from "../Factory"
import { LawDefinition } from "./LawsTypes"
import { BaseParams, ParamKey, paramKeys } from "../params"

const allLawsObj = {
  AllesBleibtBeimAlten,

  // Initiale Gesetze
  InitialAtomausstieg,

  KohleverstromungEinstellen,
  EnergiemixRegeltDerMarkt,
  KernenergienutzungVerlaengern,
  NetzausbauErleichtern,
  NetzausbauFoerdern,

  ForschungUndEntwicklungStromspeicherung,
  StromspeicherungErleichtern,
  StromspeicherungFoerdern,
  ForschungDezentraleStromerzeugung,

  WindkraftVereinfachen,

  AbstandsregelnFuerWindkraftVerschaerfen,
  AbstandsregelnFuerWindkraftWieBisher,
  AbstandsregelnFuerWindkraftLockern,
  AbstandsregelnFuerWindkraftAbschaffen,

  AusschreibungsverfahrenfuerWindkraftWieBisher,
  AusschreibungsverfahrenfuerWindkraftVerdoppeln,
  AusschreibungsverfahrenfuerWindkraftVervierfachen,
  AusschreibungsverfahrenfuerWindkraftVerachtfachen,

  SolarstromFoerderungAbschaffen,
  SolarstromFoerderungWieZuBeginn,
  SolarstromFoerdernx2,
  SolarstromFoerdernx4,
  SolarstromFoerdernx8,
  SolarAufAllenDaechernVerpflichtend,

  DaemmungAltbau1Percent,
  DaemmungAltbau2Percent,
  DaemmungAltbau4Percent,
  DaemmungAltbauAbschaffen,

  // Sanierungsquote (1% pro Jahr)
  // Sanierungsquote (2% pro Jahr)
  // Sanierungsquote (4% pro Jahr)

  // Neubau nur plus Energie Häuser erlauben
  // Bezuschussung von Nachhaltigen Gebäude/Wohnkonzepten
  // Förderung erneuerbarer Heiztechnologien und dezentraler KWK

  // Wasserstoff Heizung fördern
  // Förderung erneuerbarer Heiztechnologien und dezentraler KWK
  // Bezuschussung von Nachhaltigen Gebäude/Wohnkonzepten

  NahverkehrKostenlos,
  AutosInInnenstaedtenVerbieten,
  WasserstofftechnologieFoerdern,
  WasserstoffmobilitaetFoerdern,

  NahverkehrAusbauen,
  NahverkehrModernisieren,
  FernverkehrVerbindungenAusbauen,
  FernverkehrModernisieren,
  AusbauVonStrassen,

  AbschaffungDerMineraloelsteuer,
  DieselPrivilegAbgeschaffen,

  DienstwagenPrivilegAbgeschaffen,

  Tempolimit130AufAutobahnen,
  Tempolimit120AufAutobahnen,
  Tempolimit100AufAutobahnen,
  TempolimitAufAutobahnenAussitzen,

  ElektromobilitaetFoerdern,
  LadeinfrastrukturAusbauen,

  FoerderungFuerTierhaltungAbschaffen,

  CO2PreisErhoehen,
  WirksamerCO2Preis,
  VollerCO2Preis,

  ForschungEmissionsfreieStahlproduktion,
  ForschungEmissionsfreieZementproduktion,
}

export type LawId = keyof typeof allLawsObj
export const lawIds = Object.keys(allLawsObj) as LawId[]

export type Law = LawDefinition & {
  id: LawId
}

export type LawReference = {
  lawId: LawId
  effectiveSince: number
}

export type AcceptedLaw = Law & { effectiveSince: number }
export type LawView = Law & { pos: number; zIndex: number }

export const allLaws: Law[] = lawList(allLawsObj)

export function getLaw(lawId: LawId): Law {
  const law = allLaws.find((law) => law.id === lawId)
  if (law) {
    return law
  }
  throw Error(`Law #${lawId} not found`)
}

export function getAcceptedLaw(lawRef: LawReference): AcceptedLaw {
  const law = getLaw(lawRef.lawId)
  if (law) {
    return { ...law, effectiveSince: lawRef.effectiveSince }
  }
  throw Error(`Law #${lawRef.lawId} not found`)
}

export function idsToLaws(lawIds: LawId[]): Law[] {
  return lawIds
    .map((lawId) => {
      const law = allLaws.find((law) => law.id === lawId)
      if (!law) {
        console.error(`Inconsistency: Proposed law #${lawId} not found`)
      }
      return law as Law
    })
    .filter((a) => a)
}

/** A set of parameters per law for some laws. */
export type ParamsOfLaws = { [lawId in LawId]?: BaseParams }

/** Helper function to generate ParamsOfLaws for some laws.
 *
 * @param laws The laws for which to generate the params.
 * @param perLaw A function called once for each law generating an intermediate result.
 * @param perParam A function called once for each law and paramKey.
 * @returns A ParamsOfLaws containing the results.
 */
export const getParamsOfLaws = <L extends Law, R>(
  laws: L[],
  perLaw: (law: L) => R,
  perParam: (law: L, lawResult: R, paramKey: ParamKey) => number
): ParamsOfLaws =>
  Object.fromEntries(
    laws.map((law) => {
      const lawResult: R = perLaw(law)
      const params = Object.fromEntries(paramKeys.map((k) => [k, perParam(law, lawResult, k)])) as BaseParams
      return [law.id, params]
    })
  )
