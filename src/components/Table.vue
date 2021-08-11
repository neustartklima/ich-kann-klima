<script lang="ts">
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({
})
</script>

<template>
  <div id="table">
    <img src="../assets/table-top.png" id="table-top" />
    <img src="../assets/table-front.png" id="table-front" />
    <img src="../assets/table-front.png" id="table-back" />
    <img src="../assets/table-side.png" id="table-left-side" />
    <img src="../assets/table-side.png" id="table-right-side" />
  </div>
</template>

<style lang="scss" scoped>
#table {
  position: absolute;
  transform-style: preserve-3d;
  transform: translate3d(320px, 374px, 400px) scale(0.8);

  img {
    width: 100%;
    position: absolute;
    top: 0;
  }

  #table-top {
    transform: translateY(-105px) rotateX(90deg);
    width: 490px;
    height: 210px;
    margin-left: -20px;
  }

  #table-front {
    transform: translate3d(0px, 0px, 80px);
    width: 455px;
  }

  #table-back {
    transform: rotateY(180deg) translate3d(0px, 0, 80px);
    width: 455px;
  }

  #table-left-side {
    transform: rotateY(90deg) translate3d(0px, 0, 374px);
    height: 162px;
    width: 162px;
  }

  #table-right-side {
    transform: rotateY(-90deg) translate3d(0px, 0, 80px);
    height: 162px;
    width: 162px;
  }
}
</style>