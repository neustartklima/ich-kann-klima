import { defineEvent, lawList } from "../Factory"
import Tempolimit100AufAutobahnen from "../laws/Tempolimit100AufAutobahnen"
import Tempolimit120AufAutobahnen from "../laws/Tempolimit120AufAutobahnen"
import Tempolimit130AufAutobahnen from "../laws/Tempolimit130AufAutobahnen"
import TempolimitAufAutobahnenAussitzen from "../laws/TempolimitAufAutobahnenAussitzen"

export default defineEvent({
  title: "Generelles Tempolimit beschlossen",
  description:
    "Die EU hat ein einheitliches, generelles Tempolimit von 120km/h auf Autobahnen beschlossen. Bis auf Deutschland müssen die Mitgliedsstaaten ihr bereits bestehendes generelles Tempolimit nur noch anpassen.",
  laws: lawList({
    Tempolimit130AufAutobahnen,
    Tempolimit120AufAutobahnen,
    Tempolimit100AufAutobahnen,
    TempolimitAufAutobahnenAussitzen,
  }),

  apply() {},

  probability() {
    return Math.random()
  },
})
