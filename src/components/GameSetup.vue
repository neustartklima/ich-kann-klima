<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import CurrentIndicators from "../components/CurrentIndicators.vue"
import EventOccurred from "../components/EventOccurred.vue"
import PeekInside from "./PeekInside.vue"

export default defineComponent({
  components: { CurrentIndicators, EventOccurred, PeekInside },
  data() {
    return {
      devMode: import.meta.env.DEV || localStorage.getItem("devMode") === "true",
    }
  },
})
</script>

<template>
  <div class="game-setup">
    <div class="wrapper">
      <h1>#ich-kann-klima</h1>

      <slot />
    </div>
    <div class="indicators">
      <CurrentIndicators />
    </div>
  </div>
  <div class="peek">
    <PeekInside v-if="devMode"/>
  </div>

  <EventOccurred />
</template>

<style lang="scss">
.game-setup {
  display: flex;
  flex-direction: row;
  margin: auto;
  justify-content: left;

  @media all and (orientation: portrait) {
    flex-direction: column-reverse;
  }
}

.wrapper {
  max-height: 100%;
  width: 800px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}

.peek {
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
}

</style>
