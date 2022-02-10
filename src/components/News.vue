<script setup lang="ts">
import { computed } from "vue"
import { useStore } from "../store"
import SpeechBubble from "./SpeechBubble.vue"
import { Event } from "../events"

const store = useStore()

const event = computed(() => store.getters.eventToShow as Event)

function acknowledge(): void {
  store.dispatch("acknowledgeEvent", event.value)
}
</script>

<template>
  <SpeechBubble v-if="event" :title="event.title" :text="event.description" @acknowledge="acknowledge" />
</template>

<style lang="scss"></style>
