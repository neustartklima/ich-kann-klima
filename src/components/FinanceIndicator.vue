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
