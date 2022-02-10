<script setup lang="ts">
import { computed } from "vue"
import { allEvents } from "../events"
import { useStore } from "../store"
import Archive from "./Archive.vue"
import GameOver from "./GameOver.vue"
import Office from "./Office.vue"
import SpeechBubble from "./SpeechBubble.vue"

const store = useStore()
const activeRoom = computed(() => store.state.activeRoom)

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
const over = computed(() => {
  const game = store.state.game
  return game ? game.over : false
})

function acknowledge(): void {
  store.dispatch("acknowledgeEvent", eventToShow.value)
}
</script>

<template>
  <div class="game-setup" :class="activeRoom">
    <div id="camera">
      <div id="walls">
        <div id="wall-back">
          <h1>#ich-kann-klima</h1>
        </div>
        <div id="wall-left" />
        <div id="wall-right" />
      </div>

      <Office :with-news="!!eventRefToShow" />
      <Archive />

      <SpeechBubble v-if="eventRefToShow" :title="eventTitle" :text="eventText" @acknowledge="acknowledge" />
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

  #camera {
    pointer-events: none;
  }

  * {
    transform-style: preserve-3d;
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

  h1 {
    margin-top: -3rem;
  }
}

#wall-left {
  transform: translateX(-500px) rotateY(-90deg);
}

#wall-right {
  transform: translateX(500px) rotateY(90deg);
}
</style>
