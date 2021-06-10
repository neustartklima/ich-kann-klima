<script lang="ts">
import { defineComponent } from "vue"

const numberOfCircles = 10 // If you change this, remember to change TimeIndicator as well!

export default defineComponent({
  props: {
    value: { type: Number, required: true },
    color: { type: String, required: true },
    img: { type: String },
  },

  computed: {
    emptyCircles(): number {
      return numberOfCircles - this.value
    },

    filledCircles(): number {
      return this.value
    },

    style() {
      return (type: string) => {
        if (type === "empty") {
          return "border-color: " + this.color
        } else if (this.$props.img) {
          return "background-image: url(" + this.$props.img + ")"
        } else {
          return "background: " + this.color
        }
      }
    },
  },
})
</script>

<template>
  <div class="Indicator">
    <div v-for="index in emptyCircles" class="circle" :style="style('empty')" />
    <div v-for="index in value" class="circle" :style="style(index === 1 ? 'filled' : 'empty')" />
  </div>
</template>

<style lang="scss" scoped>
.Indicator {
  margin: 0;
  box-sizing: content-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  @media all and (orientation: portrait) {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
}

.circle {
  display: inline-block;
  width: 7.5vmin;
  height: 7.5vmin;
  margin: 1vmin;
  border-radius: 50%;
  border: 1px solid grey;
  background: no-repeat center/2vh white;
  box-shadow: 0 0 1px white;
  background-size: 4vmin;
}
</style>
