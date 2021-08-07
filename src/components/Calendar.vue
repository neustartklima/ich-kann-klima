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
  font-size: 1.4vw;
  border: 1px solid #555555;
  padding: 3em 0.5em 0;
  transform: translate3d(1000px, 170px, -350px) rotateY(-90deg) scale(2);

  &::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 1.4em;
    border: 1px solid #555555;
  }
}
</style>
