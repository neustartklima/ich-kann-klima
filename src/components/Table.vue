<script lang="ts">
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
})
</script>

<template>
  <div id="table">
    <img src="../assets/table.png" />
  </div>
</template>

<style lang="scss" scoped>
#table {
  position: absolute;
  top: 75%;
  left: 25%;
  right: 25%;
  transform: scale(1.6);
  
  img {
    width: 100%;
  }
}
</style>