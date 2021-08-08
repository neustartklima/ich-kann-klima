<script lang="ts">
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
  props: {
    year: Number,
  },
})
</script>

<template>
  <div id="calendar">{{ year }}</div>
</template>

<style lang="scss" scoped>
#calendar {
  position: absolute;
  font-size: 34px;
  text-align: center;
  padding: 3em 0.5em 0;
  transform: translate3d(1000px, 170px, -300px) rotateY(-90deg);
  background-image: url(/src/assets/Calendar.png);
  background-size: contain;
  width: 100px;
  height: 40px;
}
</style>
