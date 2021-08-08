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
  transform: translate3d(30px, 333px, -370px) rotateY(50deg);
}

img {
  position: absolute;
}

#board {
  transform-style: preserve-3d;
  
  img {
    background: white;
  }

  #board-front {
    width: 250px;
  }
  
  #board-left, #board-right {
    height: 106px; 
  }

  #board-left {
    transform: translate3d(-50px, 0, -48px) rotateY(90deg);
  }
  
  #board-right {
    transform: translate3d(200px, 0, -48px) rotateY(90deg);
  }
  
  #board-top {
    background: white;
    width: 250px;
    height: 95px;
    border-width: 10px;
    border-color: black;
    border-style: solid solid none none;
    transform: translate3d(0px, -50px, -50px) rotateX(90deg);
  }
}

#tv {
  transform: translate3d(60px, -230px, -100px);
  
  #tv-front {
    background: transparent;
    width: 200px;
  }
}

#legs {
  transform: translate3d(0, 0, -10px);
  transform-style: preserve-3d;
  
  #legs-front {
    width: 230px;
    transform: rotateX(10deg);
  }
  
  #legs-back {
    width: 230px;
    transform: translate3d(0, 0, -90px) rotateX(-10deg);
  }
}
</style>
