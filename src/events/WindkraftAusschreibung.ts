import { markdown } from "../lib/utils"
import { defineEvent, lessTimeHasPassed } from "./EventsTypes"

export default defineEvent({
  title: "Abstimmung zur Ausschreibung von Windkraftanlagen",
  description:
    "Heute findet wieder einmal eine Abstimmung im Bundestag zur weiteren Ausschreibung von Windkraftanlagen statt. Die Meinungen der Parteien sind sehr unterschiedlich.",

  apply() {
    return []
  },

  probability(game, event) {
    if (lessTimeHasPassed(game, event, { months: 15 })) {
      return 0
    }
    return 0.7
  },

  citations: [],
  //citations: [uba2020DeutscheTreibhausgasEmissionen], Hier müssen Referenzen auch aufgeführt werden, mit Komma getrennt.
  details: markdown`
    # Bauarbeiten

    Leider gibt es hier noch keine genaueren Informationen.

    # Mitarbeit gewünscht!

    Gerne kannst Du selber etwas beitragen. Was fehlt hier? Kennst Du Quellen, die Hintergrund liefern oder Aussagen belegen?

    In unserem git repo unter [\`src/events/\`](https://github.com/neustartklima/ich-kann-klima/tree/main/src/events) findest Du die zugehörige Datei.
  `,
  internals: markdown`
    # Platz für interne Kommentare

    Dies wird der Spieler nie sehen. **Zitate** können so eingefügt werden: \${cite(uba2020DeutscheTreibhausgasEmissionen)}.
    Einfach den _backslash_ entfernen, und die richtige Quelle verwenden natürlich... ;-)
  `,
})
