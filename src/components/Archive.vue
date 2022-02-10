<script setup lang="ts">
import { useStore } from "../store"

const store = useStore()

function goBack() {
  store.dispatch("changeRoom", "office")
}
</script>

<template>
  <div id="archive">
    <h2>Archiv</h2>

    <h3>Erlassene Gsetze</h3>

    <ul>
      <li>1. Gesetz</li>
      <li>2. Gesetz</li>
    </ul>

    <h3>Meldungen</h3>

    <ul>
      <li>1. Ereignis</li>
      <li>2. Ereignis</li>
    </ul>

    <button @click="goBack">Zurück zum Büro</button>
  </div>
</template>

<style lang="scss" scoped>
#archive {
  transform: translate3d(-1500px, 100px, 0px) rotateY(90deg);
}
</style>
