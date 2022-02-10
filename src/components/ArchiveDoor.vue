<script setup lang="ts">
import { computed } from "vue"
import { useStore } from "../store"

const store = useStore()
const activeRoom = computed(() => store.state.activeRoom)

function clickArchiveDoor(): void {
  store.dispatch("changeRoom", activeRoom.value === "office" ? "archive" : "office")
}
</script>

<template>
  <div id="archiveDoor" @click="clickArchiveDoor">
    <img src="../assets/table-top.png" />
  </div>
</template>

<style lang="scss">
@import "../variables";

@keyframes gotoArchive {
  from {
    transform: rotateY(0) translate3d(0, 0, 0);
  }

  20% {
    transform: rotateY(10deg) translate3d(-200px, 0, 0);
  }

  50% {
    transform: rotateY(-20deg) translate3d(0px, 20px, 300px);
  }

  70% {
    transform: rotateY(-60deg) translate3d(450px, 40px, 200px);
  }

  to {
    transform: rotateY(-90deg) translate3d(1500px, -50px, -50px);
  }
}

#archiveDoor {
  position: absolute;
  transform: translate3d(-198px, 191px, 50px) rotateX(90deg) rotateY(90deg);

  img {
    width: 400px;
  }
}

.archive #camera {
  animation: $gotoArchiveDuration alternate linear forwards gotoArchive;
}
</style>
