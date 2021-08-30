import { defineEvent } from "../Factory"

export default defineEvent({
  title: "Grundsatzdebatte zur Stromerzeugung",
  description:
    "Der Bundestag debattierte heute über die Strategie zur Stromerzeugung in Deutschland. Die Meinungen der Parteien gingen dabei stark auseinander.",
  laws: ["KohleverstromungEinstellen", "EnergiemixRegeltDerMarkt", "KernenergienutzungVerlaengern"],

  apply() {},

  probability() {
    return Math.random()
  },
})
