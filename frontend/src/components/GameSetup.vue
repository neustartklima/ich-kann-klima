<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import CurrentIndicators from "../components/CurrentIndicators.vue"

export default defineComponent({
  components: { CurrentIndicators },
})
</script>

<template>
  <div class="game-setup">
    <div class="wrapper">
      <slot />
    </div>

    <CurrentIndicators />
  </div>
</template>

<style lang="scss">
  .game-setup {
    position: relative;
  }
</style>