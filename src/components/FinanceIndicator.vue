<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },

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
  }
})
</script>

<template>
  <div>
    <img v-if="isShort" src="../assets/money-short.png" id="short" />
    <img v-if="isLess" src="../assets/money-less.png" id="less" />
    <img v-if="isMore" src="../assets/money-more.png" id="more" />
    <img v-if="isMuch" src="../assets/money-much.png" id="much" />
  </div>
</template>

<style lang="scss" scoped>
div {
  position: absolute;
  position: absolute;
  left: 63%;
  top: 57%;
  width: 15%;
  height: 25%;
  
  img {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  #short {
    width: 35%;
  }
}
</style>
