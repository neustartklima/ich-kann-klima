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
  top: 75%;
  left: 25%;
  right: 25%;
  transform-style: preserve-3d;
  transform-origin: 50%;
  // animation: spin 20s linear infinite;
  transform: scale(1.4) rotateX(-15deg);

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
  }

  #table-back {
    transform: rotateY(180deg) translate3d(0px, 0, 80px);
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

@keyframes spin {
  to {
    transform: rotate3d(0, 1, 0.2, 360deg);
  }
}
</style>