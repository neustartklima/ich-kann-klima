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
  <div id="plant">
    <img :src="imgSrc" :id="status" />
  </div>
</template>

<style lang="scss" scoped>
#plant {
  position: absolute;
  width: 260px;
  transform: translate3d(750px, 300px, -400px);

  img {
    position: absolute;
    width: 100%;
  }
}
</style>
