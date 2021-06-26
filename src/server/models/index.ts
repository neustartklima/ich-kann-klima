import { Store } from "./EventStore"
import Game from "./game"

export default function ModelsFactory({ eventStore }: { eventStore: Store }) {
  return {
    game: Game({ eventStore }),
  }
}

export type Models = ReturnType<typeof ModelsFactory>
