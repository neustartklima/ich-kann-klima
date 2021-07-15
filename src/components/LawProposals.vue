<script lang="ts">
import { defineComponent } from "vue"
import { LawId } from "../types"
import { Actions, useStore } from "../store"
import { mapGetters } from "vuex"
import LawCard from "./LawCard.vue"

export default defineComponent({
  components: { LawCard },

  setup() {
    const store = useStore()
    return { store }
  },

  data() {
    return {
      acceptedIds: [] as LawId[],
      rejectedIds: [] as LawId[],
      poppedUp: false,
    }
  },

  computed: {
    ...mapGetters(["proposedLaws"]),

    removing() {
      return (id: LawId) => this.acceptedIds.includes(id) || this.rejectedIds.includes(id)
    },
  },

  methods: {
    accept(lawId: LawId) {
      this.store.dispatch("acceptLaw", { lawId })
      this.poppedUp = false
    },

    reject(lawId: LawId) {
      this.store.dispatch("rejectLaw", { lawId })
      this.poppedUp = false
    },
  },
})
</script>

<template>
  <div class="ProposedLaws" :class="{ poppedUp }" @click="poppedUp = true">
    <LawCard
      v-for="law in proposedLaws"
      :key="law.id"
      :law="law"
      :selectable="poppedUp"
      @accept="accept"
      @reject="reject"
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
  transform: perspective(3000px) rotateX(75deg) scale(0.5);
  --transitiontime: 0.5s;
  transition: all var(--transitiontime);
  margin: 0 2% 0 0;

  &.poppedUp {
    transform: none;
  }
}
</style>
