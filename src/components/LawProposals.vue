<script lang="ts">
import { defineComponent } from "vue"
import { Law, LawId, LawView } from "../laws"
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
  top: 0;
  height: 85%;
  left: 15%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform-origin: bottom center;
  transform: perspective(2000px) rotateX(70deg);
  --transitiontime: 0.5s;
  transition: all var(--transitiontime);

  &.poppedUp {
    transform: none;

    @media (max-width: 800px) and (orientation: portrait) {
      margin-top: 100px;
    }
  }
}
</style>
