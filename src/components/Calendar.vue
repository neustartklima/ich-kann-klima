<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  year: number
  month: number
}>()

const pos = computed(() => {
  const top = Math.floor((props.month - 1) / 4) * 18 + 27 + "%"
  const left = ((props.month - 1) % 4) * 21 + 12 + "%"
  return { top, left }
})
</script>

<template>
  <div id="calendar">
    {{ year }}
    <span id="month-indicator" :style="pos" />
  </div>
</template>

<style lang="scss" scoped>
#calendar {
  position: absolute;
  font-size: 34px;
  text-align: center;
  padding: 3em 0.5em 0;
  transform: translate3d(935px, 170px, -100px) rotateY(-90deg);
  background-image: url(/src/assets/Calendar.png);
  background-size: contain;
  width: 100px;
  height: 40px;

  #month-indicator {
    position: absolute;
    width: 10%;
    height: 10%;
    background: red;
    border-radius: 50%;
  }
}
</style>
