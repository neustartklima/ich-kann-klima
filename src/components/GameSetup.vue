<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import LawProposals from "../components/LawProposals.vue"
import SpeechBubble from "./SpeechBubble.vue"
import FinanceIndicator from "./FinanceIndicator.vue"
import PopularityIndicator from "./PopularityIndicator.vue"
import ClimateIndicator from "./ClimateIndicator.vue"
import Calendar from "./Calendar.vue"
import Heater from "./Heater.vue"
import Table from "./Table.vue"
import TVSet from "./TVSet.vue"
import Tour from "./Tour.vue"
import { Event } from "../events"
import { useStore } from "../store"
import { co2Rating, financeRating } from "../Calculator"
import { Game } from "../game"

export default defineComponent({
  components: {
    Calendar,
    ClimateIndicator,
    Heater,
    LawProposals,
    SpeechBubble,
    FinanceIndicator,
    PopularityIndicator,
    Table,
    Tour,
    TVSet,
  },

  data() {
    const store = useStore()
    return {
      store,
    }
  },

  computed: {
    eventTitle(): string {
      return this.eventToShow()?.title || ""
    },

    eventText(): string {
      return this.eventToShow()?.description || ""
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
    <h1>#ich-kann-klima</h1>
    <div id="walls">
      <div id="wall-back" />
      <div id="wall-left" />
      <div id="wall-right" />
    </div>

    <Calendar :year="currentYear" />
    <Heater />
    <PopularityIndicator :value="popularity" />
    <TVSet :with-news="!!eventText" />
    <ClimateIndicator :value="climate" />
    <Table />
    <FinanceIndicator :value="finance" />
    <LawProposals />

    <SpeechBubble :title="eventTitle" :text="eventText" @acknowledge="acknowledge" />
    <Tour />
  </div>
</template>

<style lang="scss">
.game-setup {
  width: 1000px;
  height: 800px;
  perspective: 1000px;
  perspective-origin: 500px 200px;
}

#walls {
  transform: translateZ(0px);
  transform-style: preserve-3d;

  div {
    position: absolute;
    background: white;
    width: 1000px;
    height: 500px;
    border: 2px solid;
  }
}

#wall-back {
  transform: translateZ(-505px);
}

#wall-left {
  transform: translateX(-500px) rotateY(-90deg);
}

#wall-right {
  transform: translateX(500px) rotateY(90deg);
}
</style>
