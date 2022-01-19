<script setup lang="ts">
import { computed } from "vue"
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
import { allEvents, Event, EventReference } from "../events"
import { useStore } from "../store"
import { co2Rating, financeRating } from "../Calculator"
import { date } from "../lib/Temporal"
import GameOver from "./GameOver.vue"

const store = useStore()

const eventRefToShow = computed(() => {
  const game = store.state.game
  if (!game) return undefined
  const currDate = game.currentDate
  return game.events.filter((er) => er.occuredIn === currDate && !er.acknowledged)[0]
})

const eventToShow = computed(() => {
  const er = eventRefToShow.value
  if (er === undefined) return undefined
  return allEvents.find((e) => e.id === er.id)
})

const eventTitle = computed(() => eventToShow.value?.title || "")
const eventText = computed(() => eventToShow.value?.description || "")
const currentYear = computed(() => store.state.game?.currentYear || 2021)
const currentMonth = computed(() => date(store.state.game?.currentDate as string).lux.month)
const finance = computed(() => {
  const game = store.state.game
  return game ? financeRating(game) : 0
})
const popularity = computed(() => store.state.game?.values.popularity || 100)
const climate = computed(() => {
  const game = store.state.game
  return game ? co2Rating(game) : 0
})
const over = computed(() => {
  const game = store.state.game
  return game ? game.over : false
})

function acknowledge(): void {
  store.dispatch("acknowledgeEvent", eventToShow.value)
}
</script>

<template>
  <div class="game-setup">
    <h1>#ich-kann-klima</h1>
    <div id="walls">
      <div id="wall-back" />
      <div id="wall-left" />
      <div id="wall-right" />
    </div>

    <Calendar :year="currentYear" :month="currentMonth" />
    <Heater />
    <PopularityIndicator :value="popularity" />
    <TVSet :with-news="!!eventRefToShow" />
    <ClimateIndicator :value="climate" />
    <Table />
    <FinanceIndicator :value="finance" />
    <LawProposals />

    <SpeechBubble v-if="eventRefToShow" :title="eventTitle" :text="eventText" @acknowledge="acknowledge" />
    <Tour />
    <GameOver v-if="over" />
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
