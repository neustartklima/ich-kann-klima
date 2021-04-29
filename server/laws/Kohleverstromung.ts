import { LawDef } from "."

export default {
  title: "Kohleverstromung",
  description: "Die Verstromung von Kohle zur Erzeugung von Strom wird verboten.",

  effectOn: {
    co2emmissions: -200,
    stateDebt: -1000, // compensation, in Mio €
    unemployment: 20 + 60 / 2, // direct, indirect, in thousands
    gdp: -200,
  },
} as LawDef
