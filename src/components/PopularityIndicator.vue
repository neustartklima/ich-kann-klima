<script setup lang="ts">
import { computed, ref } from "vue"
import IndicatorBar from "./IndicatorBar.vue"

const props = defineProps<{
  value: number
}>()

const indicator = ref(props.value)
const areHappy = computed(() => indicator.value >= 50)
const areAngry = computed(() => indicator.value < 50)

function changed(newValue: number) {
  indicator.value = newValue
}
</script>

<template>
  <div id="popularity">
    <IndicatorBar id="indicator" title="Beliebtheit" :value="indicator" @change="changed" />
    <img v-if="areHappy" src="../assets/people-happy.png" id="happy" />
    <img v-if="areAngry" src="../assets/people-angry.png" id="angry" />
  </div>
</template>

<style lang="scss" scoped>
#popularity {
  position: absolute;
  transform: translate3d(202px, 71px, -500px);

  #indicator {
    position: absolute;
    left: 380px;
    bottom: 20px;
    transform: scale(1.6);
  }
  img {
    width: 511px;
    position: absolute;
    will-change: transform;
  }
}
</style>
