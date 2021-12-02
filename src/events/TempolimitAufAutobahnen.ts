import { defineEvent } from "./EventsTypes"

export default defineEvent({
  title: "Generelles Tempolimit beschlossen",
  description:
    "Die EU hat ein einheitliches, generelles Tempolimit von 120km/h auf Autobahnen beschlossen. Bis auf Deutschland müssen die Mitgliedsstaaten ihr bereits bestehendes generelles Tempolimit nur noch anpassen.",
  laws: [
    "Tempolimit130AufAutobahnen",
    "Tempolimit120AufAutobahnen",
    "Tempolimit100AufAutobahnen",
    "TempolimitAufAutobahnenAussitzen",
  ],

  apply() {
    return []
  },
})
