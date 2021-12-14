<script setup lang="ts">
import { computed, ref } from "vue"
import { allLaws, Law } from "../laws"
import { useStore } from "../store"

const store = useStore()
const acceptedLaws = computed(() => store.state.game?.acceptedLaws)
const opened = ref(undefined as number | undefined)

const visibleAccepted = computed(() => {
  return allLaws.filter((law) => {
    return acceptedLaws.value?.some((l) => l.lawId === law.id) && !law.labels?.includes("hidden")
  })
})

function toggleOpen(index: number): void {
  opened.value = opened.value === index ? undefined : index
}
</script>

<template>
  <div
    v-for="(law, index) in visibleAccepted"
    :key="index"
    class="Law"
    :class="{ opened: index === opened }"
    @click="toggleOpen(index)"
  >
    <h3>{{ law.title }}</h3>
    <div>{{ law.description }}</div>
  </div>
</template>

<style lang="scss" scoped>
.Law {
  max-width: 100%;
  padding: 10px;
  border: 1px solid orange;
  border-radius: 20px;
  margin: 0.5em;
  box-sizing: border-box;

  h3 {
    margin: 0;

    + * {
      margin-top: 0.5em;
    }
  }

  div {
    display: none;
  }

  &.opened div {
    display: block;
  }
}
</style>
