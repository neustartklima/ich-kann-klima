<script lang="ts">
import { defineComponent } from "vue"

const numberOfCircles = 10 // If you change this, remember to change TimeIndicator as well!

export default defineComponent({
  props: {
    value: { type: Number, required: true },
    color: { type: String, required: true },
  },

  computed: {
    emptyCircles(): number {
      return numberOfCircles - this.value
    },

    filledCircles(): number {
      return this.value
    },

    style(): (type: string) => string {
      return (type: string) => (type === "filled" ? "background" : "border-color") + ": " + this.color
    }
  },
})
</script>

<template>
  <div class="Indicator">
    <div v-for="index in emptyCircles" class="circle" :style="style('empty')" />
    <div v-for="index in value" class="circle" :style="style('filled')" />
  </div>
</template>

<style lang="scss" scoped>
$size: 3em; // If you change this, remember to change TimeIndicator as well!

.Indicator {
  margin: 0 10px;
}

.circle {
  width: $size;
  height: $size;
  border-radius: 50%;
  margin-bottom: 10px;
  border: 1px solid grey;
}
</style>
