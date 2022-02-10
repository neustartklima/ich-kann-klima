<script setup lang="ts">
import { computed, onBeforeMount, onMounted } from "vue"
import { useStore } from "../store"
import Archive from "./Archive.vue"
import GameOver from "./GameOver.vue"
import News from "./News.vue"
import Office from "./Office.vue"

const store = useStore()
const activeRoom = computed(() => store.state.activeRoom)

function updateStyle(): void {
  const height = window.innerHeight
  const width = window.innerWidth
  const scale = Math.min(height / 800, width / 1000)
  const translateX = (width - 1000 * scale) / 2
  document.documentElement.style.setProperty("--scale", `${scale}`)
  document.documentElement.style.setProperty("--translateX", `${translateX}px`)
}

const over = computed(() => {
  const game = store.state.game
  return game ? game.over : false
})

onBeforeMount(updateStyle)
onMounted(() => {
  window.addEventListener("resize", updateStyle)
})
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

      <Office />
      <Archive />

      <GameOver v-if="over" />
    </div>

    <News />
  </div>
</template>

<style lang="scss">
.game-setup {
  width: 1000px;
  height: 800px;
  perspective: 900px;
  perspective-origin: 500px 200px;

  #camera {
    pointer-events: none;
    transform: translateZ(90px);
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
    margin-top: -5rem;
    margin-left: -4rem;
  }
}

#wall-left {
  transform: translateX(-500px) rotateY(-90deg);
}

#wall-right {
  transform: translateX(500px) rotateY(90deg);
}
</style>
