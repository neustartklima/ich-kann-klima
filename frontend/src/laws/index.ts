import { Law } from "../types"
import Kohleverstromung from "./Kohleverstromung"

export const allLaws = [
  Kohleverstromung,
  {
    id: "2",
    title: "Energiemix regelt der Markt",
    description: "Subventionen in der Energiewirtschaft werden insgesamt eingestellt.",
  },
  {
    id: "3",
    title: "Kernenergienutzung verlängern",
    description: "Eigentlich bereits abgeschaltete Kernkraftwerke wieder in Betrieb nehmen und neue bauen.",
  },
  {
    id: "4",
    title: "Windkraft fördern",
    description: "Garantierte Einspeisevergütung für neue und erneuterte Windanlagen",
  },
] as Law[]
