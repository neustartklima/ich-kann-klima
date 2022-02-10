<script setup lang="ts">
import { computed } from "vue"
import { useStore } from "../store"
import AcceptedLaws from "./AcceptedLaws.vue"
import EventList from "./EventList.vue"

const store = useStore()

const events = computed(() => store.state.game?.events)

function goBack() {
  store.dispatch("changeRoom", "office")
}
</script>

<template>
  <div id="archive">
    <h2>Archiv</h2>

    <div class="wrapper">
      <div>
        <h3>Erlassene Gesetze</h3>
        <AcceptedLaws />
      </div>

      <div>
        <h3>Meldungen</h3>
        <EventList />
      </div>
    </div>

    <button @click="goBack">Zurück zum Büro</button>
  </div>
</template>

<style lang="scss" scoped>
#archive {
  transform: translate3d(-1600px, 20px, 50px) rotateY(90deg);
  padding: 2rem;
  height: 100vh;
  overflow: auto;

  .wrapper {
    display: flex;
    flex-direction: row;
  }
}
</style>
