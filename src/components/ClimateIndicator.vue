<script setup lang="ts">
import { computed, ref } from "vue"
import healthy from "../assets/plant-healthy.png"
import sick from "../assets/plant-sick.png"
import withered from "../assets/plant-withered.png"
import IndicatorBar from "./IndicatorBar.vue"

const levels = { healthy, sick, withered } as Record<string, string>

const props = defineProps<{ value: number }>()
const indicator = ref(props.value)

const status = computed((): string => {
  if (indicator.value > 66) {
    return "healthy"
  } else if (indicator.value > 33) {
    return "sick"
  } else {
    return "withered"
  }
})

const imgSrc = computed(() => levels[status.value])

function changed(newValue: number) {
  indicator.value = newValue
}
</script>

<template>
  <div id="plant">
    <IndicatorBar id="indicator" title="CO2-Budget" :value="indicator" @change="changed" />
    <img :src="imgSrc" :id="status" />
  </div>
</template>

<style lang="scss" scoped>
#plant {
  transform: translate3d(700px, 530px, -400px);

  #indicator {
    position: absolute;
    left: 100px;
    bottom: 350px;
    z-index: 1;
    transform: scale(1.5);
  }
  img {
    width: 300px;
    position: absolute;
    bottom: 0;
    will-change: transform;
  }
}
</style>
