<script lang="ts">import { defineComponent, PropType } from "@vue/runtime-core";

const fontSize = 20
const lineHeight = fontSize * 1.4
const radius = lineHeight
const strokeWidth = 5

export default defineComponent({
  props: {
    textLines: Array as PropType<string[]>
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
      return this.textLines?.length ? (this.textLines?.length + 1) * lineHeight : 0
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
  <svg
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="'0 0 ' + (width + 2 * strokeWidth) + ' ' + (height + lineHeight)"
  >
    <path :d="path" stroke="#555555" fill="white" stroke-width="5" stroke-linejoin="round" />
    <text
      v-for="(line, lineNo) in textLines"
      :key="lineNo"
      :x="radius"
      :y="(lineNo + 1) * lineHeight + fontSize / 2"
      :style="'font-size: ' + fontSize + 'px'"
    >{{ line }}</text>
  </svg>
</template>

<style lang="scss" scoped>
svg {
  max-width: 400px;
  position: absolute;
  top: 100px;
  left: 50px;
  z-index: 999;

  text {
    font-weight: bold;
  }
}
</style>