<script setup lang="ts">
import { computed } from "vue"
import { allEvents, Event } from "../events"
import { useStore } from "../store"
import ItemList from "./ItemList.vue"

const store = useStore()
const events = computed(
  () =>
    store.state.game?.events.map((r) => allEvents.find((e) => r.id === e.id)).filter((e) => e != undefined) as Event[]
)
</script>

<template>
  <ItemList :items="events" />
</template>
