<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import Background from "./Background.vue"
import LawProposals from "../components/LawProposals.vue"
import SpeechBubble from "./SpeechBubble.vue"
import PeekInside from "./PeekInside.vue"
import EventMachine, { PriorizedEvent } from "../EventMachine"
import FinanceIndicator from "./FinanceIndicator.vue"
import PopularityIndicator from "./PopularityIndicator.vue"
import ClimateIndicator from "./ClimateIndicator.vue"
import Calendar from "./Calendar.vue"
import Heater from "./Heater.vue"
import Table from "./Table.vue"
import TVSet from "./TVSet.vue"
import { Event } from "../events"
import { useStore } from "../store"
import { allEvents } from "../events"
import { co2Rating, financeRating } from "../Calculator"

export default defineComponent({
  components: {
    Background,
    Calendar,
    ClimateIndicator,
    Heater,
    PeekInside,
    LawProposals,
    SpeechBubble,
    FinanceIndicator,
    PopularityIndicator,
    Table,
    TVSet,
  },

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
      return game ? financeRating(game) : 0
    },

    popularity(): number {
      return this.store.state.game?.values.popularity || 100
    },

    climate(): number {
      const game = this.store.state.game
      return game ? co2Rating(game) : 0
    },
  },

  methods: {
    eventToShow(): Event | null {
      const event: Event = this.$store.state.game?.events[0]
      return event && !event.acknowledged ? event : null
    },

    acknowledge(): void {
      this.$store.dispatch("acknowledgeEvent", this.eventToShow())
    },
  },
})
</script>

<template>
  <div class="game-setup">
    <!-- <Background /> -->
    <div id="walls">
      <div id="wall-back" />
      <div id="wall-left" />
      <div id="wall-right" />
    </div>

    <Calendar :year="currentYear" />
    <Heater />
    <TVSet />
    <Table />

    <FinanceIndicator :value="finance" />
    <PopularityIndicator :value="popularity" />
    <ClimateIndicator :value="climate" />

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
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  margin: auto;
  position: relative;
  perspective: 1000px;
  height: 500px;

  @media all and (orientation: portrait) {
    flex-direction: column-reverse;
  }
}

#walls div {
  position: absolute;
  background: white;
  width: 1000px;
  height: 500px;
  border: 2px solid;
}

#wall-back {
  transform: translateZ(-500px);
}

#wall-left {
  transform: translateX(-500px) rotateY(-90deg);
}

#wall-right {
  transform: translateX(500px) rotateY(90deg);
}

.peek {
  display: flex;
  position: fixed;
  z-index: 20;
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
