import { defineEvent, lawList } from "../Factory"
import DaemmungVonWohngebaeudenFoerdern from "../laws/DaemmungVonWohngebaeudenFoerdern"

export default defineEvent({
  title: "Gesetzesinitiative zur Sanierung von Altbauten",
  description:
    "Zur Einhaltung der Pariser Klimaschutzvereinbarung halten Experten es für unausweichlich, dass in die Sanierung von Altbauten investiert werden muss. Die konkrete Ausgestaltung wird kontrovers diskutiert.",
  laws: lawList({
    DaemmungVonWohngebaeudenFoerdern,
  }),

  apply() {},

  probability() {
    return Math.random()
  },
})
