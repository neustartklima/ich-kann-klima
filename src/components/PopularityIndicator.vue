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
    <IndicatorBar id="indicator" title="Beliebtheit" :value="value" />
    <img v-if="areHappy" src="../assets/people-happy.png" id="happy" />
    <img v-if="areAngry" src="../assets/people-angry.png" id="angry" />
  </div>
</template>

<style lang="scss" scoped>
#popularity {
  position: absolute;
  left: 300px;
  top: 166px;
  #indicator {
    position: absolute;
    left: 250px;
    bottom: 10px;
  }
  img {
    width: 343px;
    position: absolute;
    will-change: transform;
  }
}
</style>
