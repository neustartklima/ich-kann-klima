<script lang="ts">
import { defineComponent } from "vue"
import IndicatorBar from "./IndicatorBar.vue"

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },

  components: { IndicatorBar },

  computed: {
    isShort(): boolean {
      return this.value < 20
    },

    isLess(): boolean {
      return this.value >= 20 && this.value < 50
    },

    isMore(): boolean {
      return this.value >= 50 && this.value < 80
    },

    isMuch(): boolean {
      return this.value >= 80
    },
  },
})
</script>

<template>
  <div id="finances">
    <IndicatorBar title="Finanzen" :value="value" :zoom="0.9" />
    <img v-if="isShort" src="../assets/money-short.png" id="short" />
    <img v-if="isLess" src="../assets/money-less.png" id="less" />
    <img v-if="isMore" src="../assets/money-more.png" id="more" />
    <img v-if="isMuch" src="../assets/money-much.png" id="much" />
  </div>
</template>

<style lang="scss" scoped>
#finances {
  position: absolute;
  width: 60px;
  transform: translate3d(550px, 300px, 500px);

  img {
    position: absolute;
    width: 100%;
    transform: scale3d(1.2, 1.2, 1);
  }

  #short {
    width: 35%;
  }
}
</style>
