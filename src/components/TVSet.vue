<script lang="ts">
import { defineComponent } from "@vue/runtime-core"

export default defineComponent({})
</script>

<template>
  <div id="tvset">
    <div id="board">
      <img id="board-front" src="../assets/board-front.png" />
      <img id="board-left" src="../assets/board-side.png" />
      <img id="board-right" src="../assets/board-side.png" />
      <div id="board-top" />
    </div>
    <div id="tv">
      <img id="tv-front" src="../assets/tv-front.png" />
    </div>
    <div id="legs">
      <img id="legs-front" src="../assets/tvset-legs.png" />
      <img id="legs-back" src="../assets/tvset-legs.png" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#tvset {
  position: absolute;
  transform-style: preserve-3d;
  transform: translate3d(-2100px, 800px, -6000px) rotateY(40deg);
}

img {
  position: absolute;
}

#board img {
  background: white;
}

#board-left {
  transform: translate3d(-246px, 0, -250px) rotateY(90deg);
}

#board-right {
  transform: scaleX(-1) translate3d(-1059px, 0, -250px) rotateY(-90deg);
}

#board-top {
  background: white;
  width: 1290px;
  height: 501px;
  border-width: 10px;
  border-color: black;
  border-style: solid solid none none;
  transform: translate3d(15px, -250px, -250px) rotate3d(1, 0, 0, 90deg);
}

#tv {
  transform: translate3d(120px, -1240px, -220px);
}

#tv-front {
  background: transparent;
}

#tv-right {
  transform: scaleX(-1);
}

#legs {
  transform: translate3d(0, 0, -100px);
  transform-style: preserve-3d;
}

#legs-front {
  transform: rotateX(10deg);
}

#legs-back {
  transform: translate3d(0, 0, -320px) rotateX(-10deg);
}
</style>
