<script lang="ts">
import Background from "./Background.vue"

export default {
  components: { Background },
}
</script>

<template>
  <Background />

  <div class="dialog">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.dialog {
  position: absolute;
  top: 10vh;
  left: 10vw;
  max-width: 60vw;
  background: white;
  border: 5px solid black;
  border-radius: 1rem;
  padding: 1rem;
}
</style>