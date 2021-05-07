import { Event } from "../types"
import bestechung from "./bestechung"
import socialMedia from "./social-media"

export const allEvents = [
  socialMedia,
  bestechung,
]

export function createEvent(event: Event): Event {
  return event
}
