<script lang="ts">
import { defineComponent } from "vue"
import Indicator from "../components/Indicator.vue"
import TimeIndicator from "../components/TimeIndicator.vue"

export default defineComponent({
  components: { TimeIndicator, Indicator },
})
</script>

<template>
  <div class="CurrentIndicators">
    <Indicator :value="1" color="#EE8AC1" />
    <Indicator :value="3" color="#A9D18E" />
    <Indicator :value="2" color="#8FAADC" />
    <TimeIndicator />
  </div>
</template>

<style lang="scss" scoped>
.CurrentIndicators {
  display: flex;
  flex-direction: row;
}
</style>
