<script lang="ts">
import { defineComponent } from "vue"
import GameSetup from "../components/GameSetup.vue"
import AcceptedLaws from "../components/AcceptedLaws.vue"
import LawProposals from "../components/LawProposals.vue"
import { useStore } from "../store"
import { advanceYear } from "../store/actions"

export default defineComponent({
  components: {
    GameSetup,
    LawProposals,
    AcceptedLaws,
  },

  setup() {
    const store = useStore()

    return { store }
  },

  methods: {
    advanceYear() {
      this.$store.dispatch(advanceYear())
    },
  },
})
</script>

<template>
  <GameSetup>
    <LawProposals />
    <AcceptedLaws />

    <p>Wenn Du fertig bist, wechsle zum nächsten Jahr und sieh' Dir die Auswirkungen an.</p>

    <div class="button-bar">
      <button @click="advanceYear">Jahr abschließen</button>
    </div>
  </GameSetup>
</template>

<style lang="scss" scoped>

</style>
