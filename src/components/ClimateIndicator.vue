<script lang="ts">
import { defineComponent } from "vue"
import healthy from "../assets/plant-healthy.png"
import sick from "../assets/plant-sick.png"
import withered from "../assets/plant-withered.png"

export default defineComponent({
  data() {
    return {
      levels: { healthy, sick, withered } as Record<string, string>
    }
  },

  props: {
    value: { type: Number, required: true },
  },

  computed: {
    status(): string {
      if (this.value > 66) {
        return "healthy"
      } else if (this.value > 33) {
        return "sick"
      } else {
        return "withered"
      }
    },

    imgSrc(): string {
      return this.levels[this.status]
    },
  },
})
</script>

<template>
  <div id="climate">
    <img :src="imgSrc" :id="status" />
  </div>
</template>

<style lang="scss" scoped>
div {
  position: absolute;
  left: 65%;
  top: 37%;
  width: 26%;
  height: 25%;

  img {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
}
</style>
