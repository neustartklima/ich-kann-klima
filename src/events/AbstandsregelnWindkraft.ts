import { defineEvent, lawList } from "../Factory";
import AbstandsregelnFuerWindkraftAbschaffen from "../laws/AbstandsregelnFuerWindkraftAbschaffen";
import AbstandsregelnFuerWindkraftLockern from "../laws/AbstandsregelnFuerWindkraftLockern";
import AbstandsregelnFuerWindkraftVerschaerfen from "../laws/AbstandsregelnFuerWindkraftVerschaerfen";
import AbstandsregelnFuerWindkraftWieBisher from "../laws/AbstandsregelnFuerWindkraftWieBisher";

export default defineEvent({
  title: "Abstandsregeln für Windkraft erneut im Fokus",
  description: "Anwohner wollen, dass der Abstand zu Windkraftanlagen erhöht wird. Das führte zu einer Auseinandersetzung des Wirtschaftsministers mit der Umweltministerin.",
  laws: lawList({
    AbstandsregelnFuerWindkraftVerschaerfen,
    AbstandsregelnFuerWindkraftWieBisher,
    AbstandsregelnFuerWindkraftLockern,
    AbstandsregelnFuerWindkraftAbschaffen,
  }),
  
  apply() {},

  probability() {
    return Math.random()
  },
})