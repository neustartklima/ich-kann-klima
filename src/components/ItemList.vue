<script setup lang="ts">
import { ref } from "vue"

interface Item {
  id: string
  title: string
  description: string
}

defineProps<{ items?: Item[] }>()

const opened = ref(undefined as number | undefined)

function toggleOpen(index: number): void {
  opened.value = opened.value === index ? undefined : index
}
</script>

<template>
  <div v-if="items && items.length">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="item"
      :class="{ opened: index === opened }"
      @click="toggleOpen(index)"
    >
      <title>{{ item.title }}</title>
      <p ref="p">{{ item.description }}</p>
    </div>
  </div>
  <p v-else>Keine Einträge bisher</p>
</template>

<style lang="scss" scoped>
.item {
  max-width: 100%;
  padding: 10px;
  border: 1px solid orange;
  border-radius: 20px;
  margin: 0.5em;
  box-sizing: border-box;

  title {
    display: block;
    margin: 0;
    font-weight: bold;

    + * {
      margin-top: 0.5em;
    }
  }

  p {
    display: none;
  }

  &.opened p {
    display: block;
  }
}
</style>
