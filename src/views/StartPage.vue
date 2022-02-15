<script setup lang="ts">
import { useStore } from "../store"

const store = useStore()
</script>

<template>
  <h1>#ich-kann-klima</h1>
  <button @click="store.dispatch('startGame', undefined)">Start game</button>
</template>

<style lang="scss" scoped>
h1 {
  font-family: "Droid Sans Mono", "Meleno Monaco", Consolas, "Courrier New", monospace;
  margin: 0 1em;
}

p {
  padding: 0.5rem;
}
</style>
