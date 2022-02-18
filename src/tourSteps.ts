import { markdown } from "./lib/utils"

export type TourStep = {
  id: string
  title: string
  text: string
  highlight?: string
  offset?: number
}

export const steps: TourStep[] = [
  {
    id: "start",
    title: "Stell dir vor...",
    text: markdown`
      ### ... du bist Politiker.

      Du wurdest gerade ins Amt gewählt. Dein Ziel? Die Wiederwahl!

      Du hast vier Jahre Zeit um...

      - der Klimakatastrophe entgegenzusteuern
      - Deine Beliebtheit in der Bevölkerung zu erhalten
      - und dabei nicht zu viel Geld auszugeben
    `,
  },
  {
    id: "room",
    title: "Dein Arbeitszimmer",
    text: "Dies ist das Zimmer, in dem Du arbeitest und Entscheidungen triffst.",
  },
  {
    id: "desk",
    title: "Dein Schreibtisch",
    text: "Du sitzt an Deinem Schreibtisch und findest dort immer wieder Gesetzesvorhaben, unter denen du auswählen musst.",
    highlight: "table",
  },
  {
    id: "finances",
    title: "Die Staatsfinanzen",
    text: "Auf Deinem Schreibtisch siehst Du, wie viel Geld der Staat noch hat, um Deine Entscheidungen umzusetzen.",
    highlight: "finances",
  },
  {
    id: "popularity",
    title: "Die Wähler",
    text: "Wenn Du aus dem Fenster schaust, siehst Du, in welcher Stimmung Deine Wähler sind.",
    highlight: "popularity",
    offset: 100,
  },
  {
    id: "climate",
    title: "Das Klima",
    text: "Die Pflanze in der Ecke zeigt Dir, wie sich das Klima entwickelt.",
    highlight: "plant",
    offset: 100,
  },
]
