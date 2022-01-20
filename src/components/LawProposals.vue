<script setup lang="ts">
import { ref, computed } from "vue"
import { Law, LawId } from "../laws"
import LawCard from "./LawCard.vue"
import { getZIndexes } from "../lib/utils"
import { useStore } from "../store"

const store = useStore()
const zIndexes = ref([] as Array<number>)
const poppedUp = ref(false)

const proposedLaws = computed(() => store.getters.proposedLaws)
const game = computed(() => store.state.game)
const lawsToShow = computed(() => {
  if (!zIndexes.value.length) {
    zIndexes.value = getZIndexes(proposedLaws.value.length, 0)
  }

  if (game.value === undefined) {
    return []
  }

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
  zIndexes.value = getZIndexes(proposedLaws.value.length, pos)
}

function sitOut() {
  store.dispatch("sitOut")
}
</script>

<template>
  <div class="ProposedLaws" :class="{ poppedUp }" @click="poppedUp = true">
    <LawCard
      v-for="(law, pos) in lawsToShow"
      :key="law.id"
      :law="law"
      :selectable="poppedUp"
      :numCards="lawsToShow.length"
      @accepted="() => accept(law.id)"
      @selected="() => select(pos)"
    />
  </div>
  <div class="sitOutButton" @click="() => sitOut()">Aussitzen</div>
</template>

<style lang="scss" scoped>
.ProposedLaws {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translate3d(320px, 199px, 400px) scale(0.6) rotateX(90deg) scale(0.4);
  --transitiontime: 0.5s;
  transition: all var(--transitiontime);

  &.poppedUp {
    transform: translate3d(320px, -100px, 400px) scale(0.6);

    @media (max-width: 800px) and (orientation: portrait) {
      margin-top: 100px;
    }
  }
}

.sitOutButton {
  position: absolute;
  background: white;
  padding: 4pt;
  border: 1px solid;
  border-radius: 6pt;
  transform: translate3d(500px, 390px, 400px);
  transition-duration: 0.1s;
}

.sitOutButton:hover {
  background: lightgrey;
}

.sitOutButton:active {
  transform: translate3d(500px, 390px, 400px) scale(1.1);
}
</style>
