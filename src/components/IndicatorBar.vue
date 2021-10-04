<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    title: { type: String, required: true },
    value: { type: Number, required: true },
    zoom: { type: Number, default: 1 },
  },

  computed: {
    titleStyle(): Record<string, string> {
      return {
        fontSize: this.zoom * 0.5 + "em",
      }
    },

    progressBarStyle(): Record<string, string> {
      return {
        width: this.zoom * 50 + "px",
        height: this.zoom * 5 + "px",
      }
    },

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
    <div class="title" :style="titleStyle">{{ title }}</div>
    <div class="progress-bar" :style="progressBarStyle">
      <div class="indicator" :style="indicatorStyle" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: absolute;
}

.progress-bar {
  border: 1px solid #888888;
  border-radius: 3px;
  z-index: 9999;

  .indicator {
    height: 100%;
  }
}
</style>
