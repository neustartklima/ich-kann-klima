<script setup lang="ts">
import { computed, ref } from "vue"
import IndicatorBar from "./IndicatorBar.vue"

const props = defineProps<{ value: number }>()

const indicator = ref(props.value)
const isShort = computed(() => indicator.value < 20)
const isLess = computed(() => indicator.value >= 20 && indicator.value < 50)
const isMore = computed(() => indicator.value >= 50 && indicator.value < 80)
const isMuch = computed(() => indicator.value >= 80)

function changed(newValue: number) {
  indicator.value = newValue
}
</script>

<template>
  <div id="finances">
    <img v-if="isShort" src="../assets/money-short.png" id="short" />
    <img v-if="isLess" src="../assets/money-less.png" id="less" />
    <img v-if="isMore" src="../assets/money-more.png" id="more" />
    <img v-if="isMuch" src="../assets/money-much.png" id="much" />
    <IndicatorBar id="indicator" title="Finanzen" :value="indicator" @change="changed" />
  </div>
</template>

<style lang="scss" scoped>
#finances {
  transform: translate3d(570px, 370px, 480px);

  #indicator {
    left: -75px;
    top: -40px;
    transform: scale(0.4);
  }
  img {
    position: absolute;
    bottom: 0;
    will-change: transform;
  }
  #short {
    width: 25px;
  }
  #less {
    width: 60px;
  }
  #more {
    width: 90px;
  }
  #much {
    width: 70px;
  }
}
</style>
