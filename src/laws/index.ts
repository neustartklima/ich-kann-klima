import { createLaw } from "../Factory"
import KohleverstromungEinstellen from "./KohleverstromungEinstellen"
import EnergiemixRegeltDerMarkt from "./EnergiemixRegeltDerMarkt"
import KernenergienutzungVerlaengern from "./KernenergienutzungVerlaengern"
import WindenergieSubventionieren from "./WindenergieSubventionieren"
import InitialAtomausstieg from "./InitialAtomausstieg"
import FoerderungFuerTierhaltungAbschaffen from "./FoerderungFuerTierhaltungAbschaffen"

export const allLaws = Object.entries({
  KohleverstromungEinstellen,
  EnergiemixRegeltDerMarkt,
  KernenergienutzungVerlaengern,
  WindenergieSubventionieren,
  FoerderungFuerTierhaltungAbschaffen,
  InitialAtomausstieg,
}).map(([name, module]) => {
  return createLaw(name, module)
})
