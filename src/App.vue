<script setup lang="ts">
import { computed } from "vue"
import PeekInside from "./components/PeekInside.vue"
import { useStore } from "./store"

const store = useStore()
const devMode = computed(() => store.state.devMode)
</script>

<template>
  <div class="perspective">
    <router-view />
  </div>

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

.perspective {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  transform: translateX(var(--translateX)) scale(var(--scale));
  transform-origin: 0 0;
}

/* filter breaks preserve3d, so apply highlight filter to child elements */
.highlighted * {
  filter: drop-shadow(2px 4px 6px red);
}

.peek {
  display: flex;
  position: fixed;
  z-index: 20;
  top: 0;
  right: 0;
}
</style>
