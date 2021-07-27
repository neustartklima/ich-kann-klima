<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import Background from "./Background.vue"
import CurrentIndicators from "../components/CurrentIndicators.vue"
import LawProposals from "../components/LawProposals.vue"
import SpeechBubble from "./SpeechBubble.vue"
import PeekInside from "./PeekInside.vue"
import { Event } from "../events"
import { useStore } from "../store"
import { allEvents } from "../events"
import EventMachine, { PriorizedEvent } from "../EventMachine"
import Finances from "./Finances.vue"
import { financeRating } from "../Calculator"
import { Game } from "../game"
import PopularityIndicator from "./PopularityIndicator.vue"

export default defineComponent({
  components: { Background, CurrentIndicators, PeekInside, LawProposals, SpeechBubble, Finances, PopularityIndicator },

  data() {
    const store = useStore()
    return {
      store,
      devMode: import.meta.env.DEV || localStorage.getItem("devMode") === "true",
      eventMachine: EventMachine(store, allEvents),
    }
  },

  computed: {
    eventTitle(): string {
      return this.eventToShow()?.title || ""
    },

    eventText(): string {
      return this.eventToShow()?.description || ""
    },

    priorizedEvents(): PriorizedEvent[] {
      return this.eventMachine.getPriorizedEvents()
    },

    probability(): (event: Event) => string {
      return (event) => (event.probability(this.store) * 100).toFixed(2)
    },

    currentYear(): number {
      return this.store.state.game?.currentYear || 2021
    },

    finance(): number {
      const game = this.store.state.game
      if (game) {
        return financeRating(this.store.state.game as Game)
      } else {
        return 0;
      }
    },

    popularity(): number {
      return this.store.state.game?.values.popularity || 100
    },
  },

  methods: {
    eventToShow(): Event | null {
      const event: Event = this.$store.state.game?.events[0]
      return (event && !event.acknowledged) ? event : null
    },

    acknowledge(): void {
      this.$store.dispatch("acknowledgeEvent", this.eventToShow())
    },
  },
})
</script>

<template>
  <div class="game-setup">
    <Background />

    <div id="year">{{ currentYear }}</div>
    <Finances :value="finance" />
    <PopularityIndicator :value="popularity" />
    <LawProposals />
    <SpeechBubble :title="eventTitle" :text="eventText" @acknowledge="acknowledge" />
  </div>

  <div class="peek">
    <PeekInside v-if="devMode" />
  </div>

  <div v-if="devMode" class="probabilities">
    <b>Probable Events</b>
    <ul v-if="devMode && $store.state.game">
      <li v-for="event in priorizedEvents" :key="event.id">
        <span>{{ event.title }}</span>
        <span>{{ probability(event) }}%</span>
        <span>{{ (event.priority * 100).toFixed(2) }}%</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.game-setup {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: left;
  position: relative;

  @media all and (orientation: portrait) {
    flex-direction: column-reverse;
  }

  #year {
    position: absolute;
    top: 42%;
    left: 47%;
    font-size: 1.4vw;
    border: 1px solid black;
    padding: 2em 0.5em 0;

    &::before {
      content: "";
      position: absolute;
      top: 3px;
      left: 3px;
      right: 3px;
      height: 1.7em;
      border: 1px solid black;
      box-sizing: border-box;
    }
  }
}

.peek {
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
}

.probabilities {
  position: fixed;
  top: calc(100% - 1.7rem);
  background: white;
  padding: 5px;
  border: 1px solid #cccccc;

  &:hover {
    top: auto;
    bottom: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 12px;

    li {
      display: flex;
      width: 100%;
      justify-content: space-between;

      span {
        padding: 0 5px;
      }

      span:first-of-type {
        flex-grow: 1;
      }
    }
  }
}
</style>
