<script setup lang="ts">
import { ref, getCurrentInstance } from "vue"
import { Event } from "../events"

defineProps<{
  event: Event
}>()

const open = ref(false)

const instance = getCurrentInstance()

function toggle() {
  const p = instance?.refs.p as HTMLParagraphElement
  p.style.setProperty("--max-height", p.scrollHeight + "px")
  open.value = !open
}
</script>

<template>
  <li :class="{ new: !event.acknowledged, open }">
    <title @click="toggle">{{ event.title }}</title>
    <p ref="p">{{ event.description }}</p>
  </li>
</template>

<style lang="scss">
li {
  list-style: "▶ ";
  position: relative;

  &.new title {
    font-weight: bold;
  }

  title {
    display: block;
  }

  p {
    overflow: hidden;
    max-height: 0;
    margin: 0;
    transition: all 0.5s ease;
  }

  &.open {
    list-style: "▼ ";

    p {
      margin: 10px 0;
      max-height: var(--max-height);
    }
  }
}
</style>
