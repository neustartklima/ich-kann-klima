<script setup lang="ts">
import { computed, defineProps } from "vue"
import IndicatorBar from "./IndicatorBar.vue"

const props = defineProps<{ value: number }>()

const value = computed(() => props.value)
const isShort = computed(() => props.value < 20)
const isLess = computed(() => props.value >= 20 && props.value < 50)
const isMore = computed(() => props.value >= 50 && props.value < 80)
const isMuch = computed(() => props.value >= 80)
</script>

<template>
  <div id="finances">
    <IndicatorBar id="indicator" title="Finanzen" :value="value" />
    <img v-if="isShort" src="../assets/money-short.png" id="short" />
    <img v-if="isLess" src="../assets/money-less.png" id="less" />
    <img v-if="isMore" src="../assets/money-more.png" id="more" />
    <img v-if="isMuch" src="../assets/money-much.png" id="much" />
  </div>
</template>

<style lang="scss" scoped>
#finances {
  position: absolute;
  left: 550px;
  top: 640px;
  #indicator {
    position: absolute;
    left: 150px;
  }
  img {
    position: absolute;
    bottom: 0;
    will-change: transform;
  }
  #short {
    width: 60px;
  }
  #less {
    width: 156px;
  }
  #more {
    width: 200px;
  }
  #much {
    width: 160px;
  }
}
</style>
