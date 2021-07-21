import AllesBleibtBeimAlten from "./AllesBleibtBeimAlten"
import KohleverstromungEinstellen from "./KohleverstromungEinstellen"
import EnergiemixRegeltDerMarkt from "./EnergiemixRegeltDerMarkt"
import KernenergienutzungVerlaengern from "./KernenergienutzungVerlaengern"
import InitialAtomausstieg from "./InitialAtomausstieg"
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
import { Law } from "./LawsTypes"

export { LawId, Law, LawDefinition, LawReference, AcceptedLaw, LawView } from "./LawsTypes"

export const allLaws: Law[] = lawList({
  AllesBleibtBeimAlten,

  // Initiale Gesetze
  InitialAtomausstieg,

  KohleverstromungEinstellen,
  EnergiemixRegeltDerMarkt,
  KernenergienutzungVerlaengern,

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
})
