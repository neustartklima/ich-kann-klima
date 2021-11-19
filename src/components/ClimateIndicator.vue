<script lang="ts">
import { defineComponent } from "vue"
import healthy from "../assets/plant-healthy.png"
import sick from "../assets/plant-sick.png"
import withered from "../assets/plant-withered.png"
import IndicatorBar from "./IndicatorBar.vue"

export default defineComponent({
  data() {
    return {
      levels: { healthy, sick, withered } as Record<string, string>,
    }
  },

  props: {
    value: { type: Number, required: true },
  },

  components: { IndicatorBar },

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
    <IndicatorBar id="indicator" title="CO2-Budget" :value="value" />
    <img :src="imgSrc" :id="status" />
  </div>
</template>

<style lang="scss" scoped>
#plant {
  position: absolute;
  left: 670px;
  top: 500px;
  #indicator {
    position: absolute;
    left: 30px;
    bottom: 250px;
  }
  img {
    width: 220px;
    position: absolute;
    bottom: 0;
    will-change: transform;
  }
}
</style>
