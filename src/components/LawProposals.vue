<script setup lang="ts">
import { ref, computed } from "vue"
import { Law, LawId } from "../laws"
import LawCard from "./LawCard.vue"
import { getZIndexes } from "../lib/utils"
import { useStore } from "../store"

const store = useStore()
const frontPos = ref(0)
const poppedUp = ref(false)
const sitOutShown = ref(false)

const zIndexes = computed(() => getZIndexes(proposedLaws.value.length, frontPos.value))

const proposedLaws = computed(() => store.getters.proposedLaws)
const game = computed(() => store.state.game)
const lawsToShow = computed(() => {
  if (game.value === undefined) return []
  return proposedLaws.value.map((law: Law, pos: number) => ({
    ...law,
    zIndex: zIndexes.value[pos],
    pos,
    effortComment: law.effort(game.value!).text,
  }))
})

function accept(lawId: LawId) {
  store.dispatch("acceptLaw", { lawId })
}

function select(pos: number) {
  if (frontPos.value != pos) {
    frontPos.value = pos
  } else {
    poppedUp.value = !poppedUp.value
    if (!poppedUp.value) sitOutShown.value = false
  }
}

function sitOut() {
  store.dispatch("sitOut")
}

function transEnd(event: TransitionEvent) {
  if (poppedUp.value) sitOutShown.value = true
}
</script>

<template>
  <div class="ProposedLaws" :class="{ poppedUp }" @transitionend="transEnd">
    <LawCard
      v-for="(law, pos) in lawsToShow"
      :key="law.id"
      :law="law"
      :selectable="poppedUp"
      :numCards="lawsToShow.length"
      class="singleLaw"
      @accepted="() => accept(law.id)"
      @selected="() => select(pos)"
    />
  </div>
  <transition name="fade">
    <div class="sitOutButton" v-show="sitOutShown" @click="() => sitOut()">Aussitzen</div>
  </transition>
</template>

<style lang="scss" scoped>
.ProposedLaws {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translate3d(345px, 249px, 400px) scale(0.6) rotateX(90deg) scale(0.4);
  --transitiontime: 0.5s;
  transition: all var(--transitiontime);
  transform-style: flat;
  pointer-events: auto;

  * {
    transform-style: flat;
  }

  &.poppedUp {
    transform: translate3d(345px, 160px, 450px) scale(0.4);
  }
}

.singleLaw {
  transition: margin-top var(--transitiontime);
}
.ProposedLaws.poppedUp .singleLaw {
  &:not(:first-of-type) {
    margin-top: -380px;
  }
}

.sitOutButton {
  position: absolute;
  background: white;
  padding: 4pt;
  border: 1px solid;
  border-radius: 6pt;
  transform: translate3d(430px, 333px, 510px) scale(0.7);
  transition: transform 0.1s, background 0.3s;
  transform-style: flat;
  pointer-events: auto;
  user-select: none;

  &:hover {
    background: lightgrey;
  }

  &:active {
    transform: translate3d(430px, 333px, 510px) scale(1.1);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
