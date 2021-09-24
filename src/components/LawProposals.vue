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
    },

    select(pos: number) {
      this.zIndexes = getZIndexes(this.proposedLaws.length, pos)
    },

    sitOut() {
      this.store.dispatch("sitOut")
    },
  },
})
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
    transform: translate3d(320px, -30px, 400px) scale(0.6);

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
  transform: translate3d(250px, 350px, 400px);
  transition-duration: 0.1s;
}

.sitOutButton:hover {
  background: lightgrey;
}

.sitOutButton:active {
  transform: translate3d(250px, 350px, 400px) scale(1.1);
}
</style>
