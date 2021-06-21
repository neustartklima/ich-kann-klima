import KohleverstromungEinstellen from "./KohleverstromungEinstellen"
import EnergiemixRegeltDerMarkt from "./EnergiemixRegeltDerMarkt"
import KernenergienutzungVerlaengern from "./KernenergienutzungVerlaengern"
import InitialAtomausstieg from "./InitialAtomausstieg"
import WindenergieSubventionieren from "./WindenergieSubventionieren"
import DaemmungVonWohngebaeudenFoerdern from "./DaemmungVonWohngebaeudenFoerdern"
import NahverkehrAusbauen from "./NahverkehrAusbauen"
import FoerderungFuerTierhaltungAbschaffen from "./FoerderungFuerTierhaltungAbschaffen"
import NahverkehrKostenlos from "./NahverkehrKostenlos"
import AutosInInnenstaedtenVerbieten from "./AutosInInnenstaedtenVerbieten"
import FernverkehrVerbindungenAusbauen from "./FernverkehrVerbindungenAusbauen"
import WasserstofftechnologieFoerdern from "./WasserstofftechnologieFoerdern"
import AbschaffungDerMineraloelsteuer from "./AbschaffungDerMineraloelsteuer"
import AusbauVonStrassen from "./AusbauVonStrassen"

import { prepareModuleList } from "../Factory"
import { Law } from "../types"

export const allLaws: Law[] = prepareModuleList({
  KohleverstromungEinstellen,
  EnergiemixRegeltDerMarkt,
  KernenergienutzungVerlaengern,
  InitialAtomausstieg,
  WindenergieSubventionieren,
  DaemmungVonWohngebaeudenFoerdern,
  NahverkehrAusbauen,
  FoerderungFuerTierhaltungAbschaffen,
  NahverkehrKostenlos,
  AutosInInnenstaedtenVerbieten,
  FernverkehrVerbindungenAusbauen,
  WasserstofftechnologieFoerdern,
  AbschaffungDerMineraloelsteuer,
  AusbauVonStrassen,
}) as Law[]
