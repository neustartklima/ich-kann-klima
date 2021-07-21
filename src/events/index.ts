import AbstandsregelnWindkraft from "./AbstandsregelnWindkraft"
import Altbausanierung from "./Altbausanierung"
import Bestechung from "./bestechung"
import EnergieStrategie from "./EnergieStrategie"
import FinanzKollaps from "./Finanzkollaps"
import Hitzehölle from "./Hitzehölle"
import NewYear from "./NewYear"
import SocialMedia from "./SocialMedia"
import TempolimitAufAutobahnen from "./TempolimitAufAutobahnen"
import TimesUp from "./TimesUp"
import WahlVerloren from "./WahlVerloren"
import WindkraftAusschreibung from "./WindkraftAusschreibung"

import { prepareModuleList } from "../Factory"
import { EventDefinition } from "./EventsTypes"

export type EventId = string
export type Event = EventDefinition & {
  id: EventId
}

export const allEvents = prepareModuleList({
  AbstandsregelnWindkraft,
  Altbausanierung,
  Bestechung,
  EnergieStrategie,
  FinanzKollaps,
  Hitzehölle,
  NewYear,
  SocialMedia,
  TempolimitAufAutobahnen,
  TimesUp,
  WahlVerloren,
  WindkraftAusschreibung,
}) as Event[]
