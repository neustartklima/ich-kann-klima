<script setup lang="ts">
import { computed } from "vue"
import PeekInside from "./components/PeekInside.vue"
import { useStore } from "./store"

const store = useStore()
const devMode = computed(() => store.state.devMode)
</script>

<template>
  <router-view />

  <div class="peek">
    <PeekInside v-if="devMode" />
  </div>
</template>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
#app {
  width: 100%;
  height: 100%;
}

.peek {
  display: flex;
  position: fixed;
  z-index: 20;
  top: 0;
  right: 0;
}
</style>
