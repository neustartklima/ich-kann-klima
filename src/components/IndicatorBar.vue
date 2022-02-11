<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  title: string
  value: number
}>()

const indicatorStyle = computed(() => {
  const backgroundColor = props.value > 40 ? "green" : props.value > 20 ? "goldenrod" : "red"
  return {
    width: props.value + "%",
    backgroundColor,
  }
})

</script>

<template>
  <div class="container">
    <div class="title">{{ title }}</div>
    <div class="progress-bar">
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

  .indicator {
    height: 100%;
  }
}
</style>
