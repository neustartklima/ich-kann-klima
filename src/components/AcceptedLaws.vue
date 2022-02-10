<script setup lang="ts">
import { computed } from "vue"
import { allLaws } from "../laws"
import { useStore } from "../store"
import ItemList from "./ItemList.vue"

const store = useStore()
const acceptedLaws = computed(() => store.state.game?.acceptedLaws)

const visibleAccepted = computed(() => {
  return allLaws.filter((law) => {
    return acceptedLaws.value?.some((l) => l.lawId === law.id) && !law.labels?.includes("hidden")
  })
})
</script>

<template>
  <ItemList :items="visibleAccepted" />
</template>
