<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },

  computed: {
    areHappy(): boolean {
      return this.value >= 50
    },

    areAngry(): boolean {
      return this.value < 50
    },
  },
})
</script>

<template>
  <div id="popularity">
    <img v-if="areHappy" src="../assets/people-happy.png" id="happy" />
    <img v-if="areAngry" src="../assets/people-angry.png" id="angry" />
  </div>
</template>

<style lang="scss" scoped>
#popularity {
  position: absolute;
  left: 31.5%;
  top: 40%;
  width: 35%;

  img {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
}
</style>
