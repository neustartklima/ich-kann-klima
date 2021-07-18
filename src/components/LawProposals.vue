<script lang="ts">
import { defineComponent } from "vue"
import { Law, LawId, LawView } from "../types"
import { mapGetters } from "vuex"
import LawCard from "./LawCard.vue"
import { getZIndexes } from "../lib/utils"
import { useStore } from "../store"

export default defineComponent({
  components: { LawCard },

  setup() {
    const store = useStore()
    return { store }
  },

  data() {
    return {
      zIndexes: [] as Array<number>,
      poppedUp: false,
    }
  },

  computed: {
    ...mapGetters(["proposedLaws"]),

    lawsToShow(): LawView[] {
      if (!this.zIndexes.length) {
        this.zIndexes = getZIndexes(this.proposedLaws.length, 0)
      }
      return this.proposedLaws.map((law: Law, pos: number) => ({
        ...law,
        zIndex: this.zIndexes[pos],
        pos,
      }))
    },

    transform(): string {
      return "rotate(3deg)"
    }
  },

  methods: {
    accept(lawId: LawId) {
      this.store.dispatch("acceptLaw", { lawId })
      this.poppedUp = false
    },

    select(pos: number) {
      this.zIndexes = getZIndexes(this.proposedLaws.length, pos)
    }
  },
})
</script>

<template>
  <div class="ProposedLaws" :class="{ poppedUp }" @click="poppedUp = true">
    <LawCard
      v-for="(law, pos) in lawsToShow"
      :key="pos"
      :law="law"
      :selectable="poppedUp"
      :numCards="lawsToShow.length"
      @accepted="() => accept(law.id)"
      @selected="() => select(pos)"
    />
  </div>
</template>

<style lang="scss" scoped>
.ProposedLaws {
  position: absolute;
  bottom: 18%;
  display: flex;
  flex-wrap: wrap;
  transform-origin: bottom center;
  transform: perspective(3000px) translateX(-50%) rotateX(75deg) scale(0.5);
  --transitiontime: 0.5s;
  transition: all var(--transitiontime);
  margin: 0 auto 0 50%;

  &.poppedUp {
    transform: translateX(-50%);
  }
}
</style>
