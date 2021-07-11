import { defineEvent, lawList } from "../Factory"
import EnergiemixRegeltDerMarkt from "../laws/EnergiemixRegeltDerMarkt"
import KernenergienutzungVerlaengern from "../laws/KernenergienutzungVerlaengern"
import KohleverstromungEinstellen from "../laws/KohleverstromungEinstellen"

export default defineEvent({
  title: "Grundsatzdebatte zur Stromerzeugung",
  description:
    "Der Bundestag debattierte heute über die Strategie zur Stromerzeugung in Deutschland. Die Meinungen der Parteien gingen dabei stark auseinander.",
  laws: lawList({
    KohleverstromungEinstellen,
    EnergiemixRegeltDerMarkt,
    KernenergienutzungVerlaengern,
  }),

  apply() {},

  probability() {
    return Math.random()
  },
})
