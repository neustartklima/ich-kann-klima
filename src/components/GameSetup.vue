<script setup lang="ts">
import { computed, ref } from "vue"
import { co2BudgetRating, financeRating, popularityRating } from "../Calculator"
import LawProposals from "../components/LawProposals.vue"
import { allEvents } from "../events"
import { date } from "../lib/Temporal"
import { useStore } from "../store"
import Calendar from "./Calendar.vue"
import ClimateIndicator from "./ClimateIndicator.vue"
import FinanceIndicator from "./FinanceIndicator.vue"
import GameOver from "./GameOver.vue"
import Heater from "./Heater.vue"
import PopularityIndicator from "./PopularityIndicator.vue"
import SpeechBubble from "./SpeechBubble.vue"
import Table from "./Table.vue"
import Tour from "./Tour.vue"
import TVSet from "./TVSet.vue"

const store = useStore()
const activeRoom = ref("main")

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
const popularity = computed(() => {
  const game = store.state.game
  return game ? popularityRating(game) : 0
})
const climate = computed(() => {
  const game = store.state.game
  return game ? co2BudgetRating(game) : 0
})
const over = computed(() => {
  const game = store.state.game
  return game ? game.over : false
})

function acknowledge(): void {
  store.dispatch("acknowledgeEvent", eventToShow.value)
}

function clickArchiveDoor(): void {
  activeRoom.value = activeRoom.value === "archive" ? "main" : "archive"
}
</script>

<template>
  <div class="game-setup" :class="activeRoom">
    <div id="camera">
      <h1>#ich-kann-klima</h1>
      <div id="walls">
        <div id="wall-back" />
        <div id="wall-left" />
        <div id="wall-right" />
      </div>

      <div id="archiveDoor" @click="clickArchiveDoor">
        <img src="../assets/table-top.png" />
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
  </div>
</template>

<style lang="scss">
.game-setup {
  width: 1000px;
  height: 800px;
  perspective: 1000px;
  perspective-origin: 500px 200px;

  * {
    transform-style: preserve-3d;
  }
}

.archive #camera {
  animation: 5s alternate linear forwards gotoArchive;
}

@keyframes gotoArchive {
  from {
    transform: rotateY(0) translate3d(0, 0, 0);
  }

  20% {
    transform: rotateY(10deg) translate3d(-200px, 0, 0);
  }

  50% {
    transform: rotateY(-20deg) translate3d(0px, 20px, 300px);
  }

  70% {
    transform: rotateY(-60deg) translate3d(450px, 40px, 200px);
  }

  to {
    transform: rotateY(-90deg) translate3d(1400px, -50px, -50px);
  }
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

#archiveDoor {
  position: absolute;
  transform: translate3d(-198px, 191px, 50px) rotateX(90deg) rotateY(90deg);

  img {
    width: 400px;
  }
}
</style>
