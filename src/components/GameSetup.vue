<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import CurrentIndicators from "../components/CurrentIndicators.vue"
import LawProposals from "../components/LawProposals.vue"
import SpeechBubble from "./SpeechBubble.vue"
import PeekInside from "./PeekInside.vue"
import { Event } from "../types"
import { useStore } from "../store"
import { allEvents } from "../events"
import EventMachine, { PriorizedEvent } from "../EventMachine"

export default defineComponent({
  components: { CurrentIndicators, PeekInside, LawProposals, SpeechBubble },
  data() {
    const store = useStore()
    return {
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
  <h1>#ich-kann-klima</h1>
  <div class="game-setup">
    <img src="../assets/background.jpg" />

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

  > img {
    max-height: calc(100vh - 4rem);
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

      span:last-of-type {
        padding-left: 10px;
      }
    }
  }
}
</style>
