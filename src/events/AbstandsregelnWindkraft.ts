import { defineEvent } from "../Factory"

export default defineEvent({
  title: "Abstandsregeln für Windkraft erneut im Fokus",
  description:
    "Anwohner wollen, dass der Abstand zu Windkraftanlagen erhöht wird. Das führte zu einer Auseinandersetzung des Wirtschaftsministers mit der Umweltministerin.",
  laws: [
    "AbstandsregelnFuerWindkraftVerschaerfen",
    "AbstandsregelnFuerWindkraftWieBisher",
    "AbstandsregelnFuerWindkraftLockern",
    "AbstandsregelnFuerWindkraftAbschaffen",
  ],

  apply() {
    return []
  },
})
