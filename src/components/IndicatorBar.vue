<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    title: { type: String, required: true },
    value: { type: Number, required: true },
  },

  computed: {
    indicatorStyle(): Record<string, string> {
      const backgroundColor = this.value > 40 ? "green" : this.value > 20 ? "goldenrod" : "red"
      return {
        width: this.value + "%",
        backgroundColor,
      }
    },
  },
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
  width: 100px;
  height: 10px;
  border: 1px solid #888888;
  border-radius: 3px;
  z-index: 9999;

  .indicator {
    height: 100%;
  }
}
</style>
