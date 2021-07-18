<script lang="ts">import { defineComponent, PropType } from "@vue/runtime-core";

const fontSize = 20
const lineHeight = fontSize * 1.4
const radius = lineHeight
const strokeWidth = 5

export default defineComponent({
  props: {
    text: String
  },

  data() {
    return {
      fontSize,
      lineHeight,
      radius,
      strokeWidth
    }
  },

  computed: {
    width(): number {
      return 400
    },

    height(): number {
      return this.text?.length ? (this.text?.length + 1) * lineHeight : 0
    },

    path(): string {
      if (!this.height) {
        return ""
      }
      const radius = 8
      return `M 0 ${this.height + lineHeight}
              L ${radius * 4} ${this.height} ${this.width - radius} ${this.height}
              S ${this.width} ${this.height} ${this.width} ${this.height - radius}
              L ${this.width} ${radius}
              S ${this.width} ${strokeWidth / 2} ${this.width - radius} ${strokeWidth / 2}
              L ${radius} ${strokeWidth / 2}
              S ${strokeWidth / 2} ${strokeWidth / 2} ${strokeWidth / 2} ${radius}
              L ${strokeWidth / 2} ${this.height - radius}
              S ${strokeWidth / 2} ${this.height} ${radius} ${this.height}
              L ${radius * 2} ${this.height}
              Z
      `
    }
  }
})
</script>

<template>
  <div v-if="text" v-html="text" />
</template>

<style lang="scss" scoped>
div {
  max-width: 400px;
  position: absolute;
  top: 25%;
  left: 10%;
  z-index: 999;
  border: 5px solid black;
  font-weight: bold;
  font-size: 20px;
  padding: 0.7rem 1rem;
  background: white;
  border-radius: 1rem;
  transform: translateY(-50%);

  &::before,
  &::after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
  }

  &::before {
    border-width: 10px;
    border-style: solid;
    border-color: black transparent transparent black;
    left: 6px;
    bottom: -20px;
  }

  &::after {
    border-width: 7px;
    border-style: solid;
    border-color: #fff transparent transparent #fff;
    left: 10px;
    bottom: -11px;
  }
}
</style>