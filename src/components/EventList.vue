<script setup lang="ts">
import { computed, ref } from "vue"
import { allEvents, Event } from "../events"
import { useStore } from "../store"
import EventItem from "./EventItem.vue"

const store = useStore()

const eventRefs = computed(() => store.state.game?.events)
const events = computed(
  () =>
    store.state.game?.events.map((r) => allEvents.find((e) => r.id === e.id)).filter((e) => e != undefined) as Event[]
)

const visible = ref(false as boolean)

function close() {
  visible.value = false
  eventRefs.value?.filter((e) => !e.acknowledged).forEach((e) => (e.acknowledged = true))
}

function show() {
  visible.value = true
}
</script>

<template>
  <div v-if="visible">
    <header>News Ticker</header>

    <ul v-if="events?.length">
      <EventItem v-for="event in events" :key="event.title" :event="event" />
    </ul>
    <p v-else>Keine Nachrichten bisher</p>

    <footer>
      <button @click="close">Ok</button>
    </footer>
  </div>
  <button v-else @click="show">News</button>
</template>

<style lang="scss" scoped>
div {
  border: 2px solid red;
  border-radius: 6px;
  padding: 10px;
}

header {
  font-size: 24px;
  color: red;
  text-align: center;
}

ul {
  padding: 0 1rem;
}

button {
  display: inline-block;
  width: 60px;
  margin-left: 10px;
  background: white;
  border: 1px solid #888;
  border-radius: 4px;
  padding: 5px 10px;
}
</style>
