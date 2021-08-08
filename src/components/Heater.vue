<script lang="ts">
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
})
</script>

<template>
  <div id="heater">
    <img src="../assets/heater.png" />
  </div>
</template>

<style lang="scss" scoped>
#heater {
  position: absolute;
  width: 520px;
  transform: translate3d(200px, 392px, -500px);

  img {
    width: 100%;
  }
}
</style>