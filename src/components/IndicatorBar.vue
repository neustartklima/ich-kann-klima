<script setup lang="ts">
import { computed } from "vue"
import { useStore } from "../store"

const props = defineProps<{
  title: string
  value: number
}>()

const emit = defineEmits<{
  (event: "change", value: number): void
}>()

const store = useStore()
const devMode = computed(() => store.state.devMode)

const indicatorStyle = computed(() => {
  const backgroundColor = props.value > 40 ? "green" : props.value > 20 ? "goldenrod" : "red"
  return {
    width: props.value + "%",
    backgroundColor,
  }
})

function handleClick(event: MouseEvent) {
  if (devMode.value) {
    emit("change", event.offsetX) // requires the clientWidth of the element to be exactly 100
  }
}
</script>

<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <div class="progress-bar" @click="handleClick">
      <div class="indicator" :style="indicatorStyle" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: absolute;
}

.progress-bar {
  width: 100px; // This exact value is required to set the value of the indicator in devMode
  height: 10px;
  border: 1px solid #888888;
  border-radius: 3px;
  z-index: 9999;
  pointer-events: auto;

  .indicator {
    height: 100%;
  }
}
</style>
