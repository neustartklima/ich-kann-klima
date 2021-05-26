import { createLaw } from "../Factory"
import KohleverstromungEinstellen from "./KohleverstromungEinstellen"
import EnergiemixRegeltDerMarkt from "./EnergiemixRegeltDerMarkt"
import KernenergienutzungVerlaengern from "./KernenergienutzungVerlaengern"
import InitialAtomausstieg from "./InitialAtomausstieg"
import WindenergieSubventionieren from "./WindenergieSubventionieren"
import DaemmungVonWohngebaeudenFoerdern from "./DaemmungVonWohngebaeudenFoerdern"
import NahverkehrAusbauen from "./NahverkehrAusbauen"
import FoerderungFuerTierhaltungAbschaffen from "./FoerderungFuerTierhaltungAbschaffen"

export const allLaws = Object.entries({
  KohleverstromungEinstellen,
  EnergiemixRegeltDerMarkt,
  KernenergienutzungVerlaengern,
  InitialAtomausstieg,
  WindenergieSubventionieren,
  DaemmungVonWohngebaeudenFoerdern,
  NahverkehrAusbauen,
  FoerderungFuerTierhaltungAbschaffen,
}).map(([name, module]) => {
  return createLaw(name, module)
})
