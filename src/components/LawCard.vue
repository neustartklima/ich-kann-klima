<script setup lang="ts">
import { computed, ref } from "vue"
import { LawView } from "../laws"

const props = defineProps<{
  law: LawView
  selectable: boolean
  numCards: number
}>()

const emit = defineEmits<{
  (e: "selected"): void
  (e: "accepted", id: string): void
}>()

const accepted = ref(false)
const zIndex = computed(() => props.law.zIndex)

function select() {
  emit("selected")
}

function accept() {
  accepted.value = true
}

function sendAccept(event: AnimationEvent) {
  if (event.animationName.match(/^twistOut-/)) {
    emit("accepted", props.law.id)
  }
}
</script>

<template>
  <div class="Law" :class="{ accepted }" :style="{ zIndex }" @click.stop="select" @animationend="sendAccept">
    <div>
      <h3>{{ law.title }}</h3>
      <div>{{ law.description }}</div>
      <br />
      <div>{{ law.effortComment }}</div>

      <div class="button-bar" v-if="selectable">
        <button class="accept" @click.stop="accept">✓</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Law {
  position: relative;
  width: 250px;
  height: 350px;
  padding: 1rem;
  box-sizing: border-box;
  margin: 0 auto;
  transform: rotate(3deg);
  background-image: url(/src/assets/paper.png);
  background-size: cover;

  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 51px;
    height: 58px;
    background-image: url(/src/assets/dog-ear.png);
    background-size: cover;
  }

  &:not(:first-of-type) {
    margin-top: -350px;
  }

  &:nth-of-type(odd) {
    transform: rotate(-3deg);
  }

  // @media (max-width: 800px) {
  //   width: 50%;
  //   height: 80%;
  //   font-size: 1.3vw;

  //   &:not(:first-of-type) {
  //     margin-top: -150px;
  //   }
  // }

  /* name |  duration | easing | delay | iteration-count | direction | fill-mode | play-state */
  animation: twistIn var(--transitiontime) ease-out 0s 1 normal both;
  &.accepted {
    animation-name: twistOut;
  }

  h3 {
    margin-top: 0;
  }

  > div {
    height: 100%;
    position: relative;

    .button-bar {
      position: absolute;
      bottom: -5px;
      right: -5px;
    }

    button {
      border: none;
      width: 32px;
      margin-left: 5px;
      padding: 0;
      background: transparent;
      cursor: pointer;
      transition: all 0.3s;
    }

    .accept {
      font-size: 28px;
      color: green;

      &:hover {
        transform: scale(1.5);
      }
    }
  }
}

@keyframes twistIn {
  0% {
    transform: perspective(1000px) rotateX(0deg) rotateY(-90deg);
  }
}
@keyframes twistOut {
  100% {
    transform: perspective(1000px) rotateX(0deg) rotateY(90deg);
  }
}
</style>
