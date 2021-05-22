import { createLaw } from "../Factory"
import Kohleverstromung from "./Kohleverstromung"
import EnergiemixDurchMarktGeregelt from "./EnergiemixDurchMarktGeregelt"
import KernenergieVerlaengern from "./KernenergieVerlaengern"
import WindenergieSubventionieren from "./WindenergieSubventionieren"
import InitialAtomausstieg from "./InitialAtomausstieg"
import KeineFoerderungFuerTierhaltung from "./KeineFoerderungFuerTierhaltung"

export const allLaws = Object.entries({
  Kohleverstromung,
  EnergiemixDurchMarktGeregelt,
  KernenergieVerlaengern,
  WindenergieSubventionieren,
  KeineFoerderungFuerTierhaltung,
  InitialAtomausstieg,
}).map(([name, module]) => {
  return createLaw(name, module)
})
