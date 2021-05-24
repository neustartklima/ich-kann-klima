<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import CurrentIndicators from "../components/CurrentIndicators.vue"
import EventOccurred from "../components/EventOccurred.vue"

export default defineComponent({
  components: { CurrentIndicators, EventOccurred },
})
</script>

<template>
  <div class="game-setup">
    <div class="wrapper">
      <h1>#ich-kann-klima</h1>

      <slot />
    </div>

    <CurrentIndicators />
  </div>

  <EventOccurred />
</template>

<style lang="scss">
.game-setup {
  position: relative;

  @media all and (orientation: portrait) {
    display: flex;
    flex-direction: column-reverse;
  }
}

.wrapper {
  height: 100vh;
  overflow: auto;
}
</style>
