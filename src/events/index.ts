import AbstandsregelnWindkraft from "./AbstandsregelnWindkraft"
// import Altbausanierung from "./Altbausanierung"
import AtomKatastrophe from "./AtomKatastrophe"
// import BatteryExplosion from "./BatteryExplosion"
import Bestechung from "./Bestechung"
import BSE from "./BSE"
// import CO2PreisDebatte from "./CO2PreisDebatte"
import Duerrewelle from "./Duerrewelle"
import EnergieStrategie from "./EnergieStrategie"
import FinanzKollaps from "./Finanzkollaps"
import Hitzehoelle from "./Hitzehölle"
import Klimafluechtlinge from "./Klimafluechtlinge"
import NewYear from "./NewYear"
import Plagiatsaffaere from "./Plagiatsaffaere"
import PRInnenminister from "./PR-Innenminister"
import PRKohleindustrie from "./PR-Kohleindustrie"
import SocialMedia from "./SocialMedia"
import SolarstromFoerderung from "./SolarstromFoerderung"
import SolarstromFoerderung2 from "./SolarstromFoerderung2"
// import TempolimitAufAutobahnen from "./TempolimitAufAutobahnen"
import TimesUp from "./TimesUp"
import WahlVerloren from "./WahlVerloren"
import WindkraftAusschreibung from "./WindkraftAusschreibung"
import WindkraftForschung from "./WindkraftForschung"

import { EventDefinition, lessTimeHasPassed } from "./EventsTypes"
import { Game } from "../game"
import { Ratio } from "../types"
import { objectToArrayWithId } from "../lib/utils"

const allEventsObj = {
  AbstandsregelnWindkraft,
  // Altbausanierung,
  AtomKatastrophe,
  // BatteryExplosion,
  Bestechung,
  BSE,
  // CO2PreisDebatte,
  Duerrewelle,
  EnergieStrategie,
  FinanzKollaps,
  Hitzehoelle,
  Klimafluechtlinge,
  NewYear,
  Plagiatsaffaere,
  PRInnenminister,
  PRKohleindustrie,
  SocialMedia,
  SolarstromFoerderung,
  SolarstromFoerderung2,
  // TempolimitAufAutobahnen,
  TimesUp,
  WahlVerloren,
  WindkraftAusschreibung,
  WindkraftForschung,
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
