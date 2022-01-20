import AbstandsregelnWindkraft from "./AbstandsregelnWindkraft"
import Altbausanierung from "./Altbausanierung"
import Bestechung from "./Bestechung"
import EnergieStrategie from "./EnergieStrategie"
import FinanzKollaps from "./Finanzkollaps"
import Hitzehoelle from "./Hitzehölle"
import NewYear from "./NewYear"
import SocialMedia from "./SocialMedia"
import TempolimitAufAutobahnen from "./TempolimitAufAutobahnen"
import TimesUp from "./TimesUp"
import WahlVerloren from "./WahlVerloren"
import WindkraftAusschreibung from "./WindkraftAusschreibung"
import SolarstromFoerderung from "./SolarstromFoerderung"
import AtomKatastrophe from "./AtomKatastrophe"
import BSE from "./BSE"
import Duerrewelle from "./Duerrewelle"
import PRKohleindustrie from "./PR-Kohleindustrie"
import PRInnenminister from "./PR-Innenminister"
import Klimafluechtlinge from "./Klimafluechtlinge"
import Plagiatsaffaere from "./Plagiatsaffaere"
import CO2PreisDebatte from "./CO2PreisDebatte"

import { EventDefinition, lessTimeHasPassed } from "./EventsTypes"
import { Game } from "../game"
import { Ratio } from "../types"
import { objectToArrayWithId } from "../lib/utils"

const allEventsObj = {
  AbstandsregelnWindkraft,
  Altbausanierung,
  Bestechung,
  EnergieStrategie,
  FinanzKollaps,
  Hitzehoelle,
  NewYear,
  SocialMedia,
  TempolimitAufAutobahnen,
  TimesUp,
  WahlVerloren,
  WindkraftAusschreibung,
  SolarstromFoerderung,
  AtomKatastrophe,
  BSE,
  Duerrewelle,
  PRKohleindustrie,
  PRInnenminister,
  Klimafluechtlinge,
  Plagiatsaffaere,
  CO2PreisDebatte,
}

function defaultProbability(game: Game, event: Event): Ratio {
  if (lessTimeHasPassed(game, event, { years: 3 })) {
    return 0
  }
  return 0.05
}

export type EventId = keyof typeof allEventsObj

export type Event = EventDefinition & {
  id: EventId
  probability(game: Game, event: Event): Ratio
}

export type EventReference = {
  id: EventId
  occuredIn: string
  acknowledged: boolean
}

export const allEvents: Event[] = objectToArrayWithId(allEventsObj).map((event) => ({
  ...event,
  probability: event.probability || defaultProbability,
}))
