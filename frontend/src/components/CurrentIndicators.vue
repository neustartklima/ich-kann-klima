<script lang="ts">
import { defineComponent } from "vue"
import Indicator from "../components/Indicator.vue"
import TimeIndicator from "../components/TimeIndicator.vue"
import { useStore } from "../store"
import { co2Rating } from "../Calculator"

const co2budget = 4500

export default defineComponent({
  components: { TimeIndicator, Indicator },
  setup() {
    const store = useStore()
    return { store }
  },
  computed: {
    co2value(): number {
      const game = this.store.state.game
      if (!game) {
        return 0
      }
      return Math.round(co2Rating(game) / 10)
    },

    financeValue(): number {
      return 5
    },

    popularityValue(): number {
      return 5
    },
  },
})
</script>

<template>
  <div class="CurrentIndicators">
    <Indicator :value="co2value" color="#EE8AC1" />
    <Indicator :value="financeValue" color="#A9D18E" />
    <Indicator :value="popularityValue" color="#8FAADC" />
    <TimeIndicator />
  </div>
</template>

<style lang="scss" scoped>
.CurrentIndicators {
  display: flex;
  flex-direction: row;
}
</style>
