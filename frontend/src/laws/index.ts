import { Law, LawDefinition } from "../types"
import Kohleverstromung from "./Kohleverstromung"
import EnergiemixDurchMarktGeregelt from "./EnergiemixDurchMarktGeregelt"
import KernenergieVerlaengern from "./KernenergieVerlaengern"
import WindenergieSubventionieren from "./WindenergieSubventionieren"

export const allLaws = [
  Kohleverstromung,
  EnergiemixDurchMarktGeregelt,
  KernenergieVerlaengern,
  WindenergieSubventionieren,
]

let index = 0
export function createLaw(law: LawDefinition): Law {
  return { ...law, id: "" + ++index }
}
