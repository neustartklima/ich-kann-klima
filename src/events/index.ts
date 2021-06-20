import SocialMedia from "./SocialMedia"
import Bestechung from "./bestechung"
import WahlVerloren from "./WahlVerloren"
import FinanzKollaps from "./Finanzkollaps"
import TimesUp from "./TimesUp"
import Hitzehölle from "./Hitzehölle"

import { prepareModuleList } from "../Factory"
import { Event } from "../types"

export const allEvents = prepareModuleList({
  SocialMedia,
  Bestechung,
  WahlVerloren,
  FinanzKollaps,
  TimesUp,
  Hitzehölle,
}) as Event[]
