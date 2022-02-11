<script setup lang="ts">
import { computed } from "vue"
import IndicatorBar from "./IndicatorBar.vue"

const props = defineProps<{ value: number }>()

const isShort = computed(() => props.value < 20)
const isLess = computed(() => props.value >= 20 && props.value < 50)
const isMore = computed(() => props.value >= 50 && props.value < 80)
const isMuch = computed(() => props.value >= 80)
</script>

<template>
  <div id="finances">
    <img v-if="isShort" src="../assets/money-short.png" id="short" />
    <img v-if="isLess" src="../assets/money-less.png" id="less" />
    <img v-if="isMore" src="../assets/money-more.png" id="more" />
    <img v-if="isMuch" src="../assets/money-much.png" id="much" />
    <IndicatorBar id="indicator" title="Finanzen" :value="value" />
  </div>
</template>

<style lang="scss" scoped>
#finances {
  transform: translate3d(380px, 530px, 490px);

  #indicator {
    left: 220px;
    top: -185px;
    transform: scale(0.4);
  }
  img {
    position: absolute;
    bottom: 0;
    will-change: transform;
    transform: scale(0.2);
  }
}
</style>
