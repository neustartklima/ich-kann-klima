import AllesBleibtBeimAlten from "./AllesBleibtBeimAlten"
import KohleverstromungEinstellen from "./KohleverstromungEinstellen"
import EnergiemixRegeltDerMarkt from "./EnergiemixRegeltDerMarkt"
import KernenergienutzungVerlaengern from "./KernenergienutzungVerlaengern"
import InitialAtomausstieg from "./InitialAtomausstieg"
import NetzausbauErleichtern from "./NetzausbauErleichtern"
import DaemmungAltbau1Percent from "./DaemmungAltbau1Percent"
import DaemmungAltbau2Percent from "./DaemmungAltbau2Percent"
import DaemmungAltbau4Percent from "./DaemmungAltbau4Percent"
import DaemmungAltbauAbschaffen from "./DaemmungAltbauAbschaffen"
import NahverkehrAusbauen from "./NahverkehrAusbauen"
import FoerderungFuerTierhaltungAbschaffen from "./FoerderungFuerTierhaltungAbschaffen"
import NahverkehrKostenlos from "./NahverkehrKostenlos"
import AutosInInnenstaedtenVerbieten from "./AutosInInnenstaedtenVerbieten"
import FernverkehrVerbindungenAusbauen from "./FernverkehrVerbindungenAusbauen"
import WasserstofftechnologieFoerdern from "./WasserstofftechnologieFoerdern"
import AbschaffungDerMineraloelsteuer from "./AbschaffungDerMineraloelsteuer"
import AusbauVonStrassen from "./AusbauVonStrassen"
import DieselPrivilegAbgeschaffen from "./DieselPrivilegAbgeschaffen"
import DienstwagenPrivilegAbgeschaffen from "./DienstwagenPrivilegAbgeschaffen"
import Tempolimit130AufAutobahnen from "./Tempolimit130AufAutobahnen"
import Tempolimit120AufAutobahnen from "./Tempolimit120AufAutobahnen"
import Tempolimit100AufAutobahnen from "./Tempolimit100AufAutobahnen"
import TempolimitAufAutobahnenAussitzen from "./TempolimitAufAutobahnenAussitzen"
import AbstandsregelnFuerWindkraftWieBisher from "./AbstandsregelnFuerWindkraftWieBisher"
import AbstandsregelnFuerWindkraftLockern from "./AbstandsregelnFuerWindkraftLockern"
import AbstandsregelnFuerWindkraftAbschaffen from "./AbstandsregelnFuerWindkraftAbschaffen"
import AbstandsregelnFuerWindkraftVerschaerfen from "./AbstandsregelnFuerWindkraftVerschaerfen"
import AusschreibungsverfahrenfuerWindkraftWieBisher from "./AusschreibungsverfahrenfuerWindkraftWieBisher"
import AusschreibungsverfahrenfuerWindkraftVerdoppeln from "./AusschreibungsverfahrenfuerWindkraftVerdoppeln"
import AusschreibungsverfahrenfuerWindkraftVervierfachen from "./AusschreibungsverfahrenfuerWindkraftVervierfachen"
import AusschreibungsverfahrenfuerWindkraftVerachtfachen from "./AusschreibungsverfahrenfuerWindkraftVerachtfachen"

import { lawList } from "../Factory"
import { LawDefinition } from "./LawsTypes"

const allLawsObj = {
  AllesBleibtBeimAlten,

  // Initiale Gesetze
  InitialAtomausstieg,

  KohleverstromungEinstellen,
  EnergiemixRegeltDerMarkt,
  KernenergienutzungVerlaengern,
  NetzausbauErleichtern,

  AbstandsregelnFuerWindkraftVerschaerfen,
  AbstandsregelnFuerWindkraftWieBisher,
  AbstandsregelnFuerWindkraftLockern,
  AbstandsregelnFuerWindkraftAbschaffen,

  AusschreibungsverfahrenfuerWindkraftWieBisher,
  AusschreibungsverfahrenfuerWindkraftVerdoppeln,
  AusschreibungsverfahrenfuerWindkraftVervierfachen,
  AusschreibungsverfahrenfuerWindkraftVerachtfachen,

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

  NahverkehrAusbauen,
  FernverkehrVerbindungenAusbauen,
  AusbauVonStrassen,

  AbschaffungDerMineraloelsteuer,
  DieselPrivilegAbgeschaffen,

  DienstwagenPrivilegAbgeschaffen,

  Tempolimit130AufAutobahnen,
  Tempolimit120AufAutobahnen,
  Tempolimit100AufAutobahnen,
  TempolimitAufAutobahnenAussitzen,

  FoerderungFuerTierhaltungAbschaffen,
}

export type LawId = keyof typeof allLawsObj

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
