<script lang="ts">
import { defineComponent } from "vue"
import IndicatorBar from "./IndicatorBar.vue"

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },

  components: { IndicatorBar },

  computed: {
    areHappy(): boolean {
      return this.value >= 50
    },

    areAngry(): boolean {
      return this.value < 50
    },
  },
})
</script>

<template>
  <div id="popularity">
    <IndicatorBar title="Beliebtheit" :value="value" :zoom="2.8" style="margin: -80px 0 0 200px " />
    <img v-if="areHappy" src="../assets/people-happy.png" id="happy" />
    <img v-if="areAngry" src="../assets/people-angry.png" id="angry" />
  </div>
</template>

<style lang="scss" scoped>
#popularity {
  position: absolute;
  width: 520px;
  transform: translate3d(200px, 80px, -500px);

  img {
    position: absolute;
    width: 100%;
  }
}
</style>
