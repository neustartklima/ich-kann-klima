<script lang="ts">
import { computed, defineComponent } from "vue"
import GameSetup from "../components/GameSetup.vue"
import AcceptedLaws from "../components/AcceptedLaws.vue"
import LawProposals from "../components/LawProposals.vue"
import { useStore } from "../store"
import { GameId } from "../types"
import { mapGetters } from "vuex"

export default defineComponent({
  components: {
    GameSetup,
    LawProposals,
    AcceptedLaws,
  },

  setup() {
    const store = useStore()

    return {
      store,
      allLaws: computed(() => store.state.allLaws),
      acceptedLaws: computed(() => store.state.game?.acceptedLaws),
    }
  },

  methods: {
    startGame(gameId: GameId | undefined) {
      if (gameId) {
        this.store.dispatch("loadGame", { gameId })
      } else {
        this.store.dispatch("startGame", undefined)
      }
    },

    advanceYear() {
      this.store.dispatch("advanceYear", undefined)
    },
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => ((vm as unknown) as { startGame: (gameId: GameId) => void }).startGame(to.params.id as GameId))
  },
})
</script>

<template>
  <GameSetup>
    <LawProposals />

    <!--h2>Beschlossene Gesetze</h2>
    <AcceptedLaws /-->

    <!--p>Wenn Du fertig bist, wechsle zum nächsten Jahr und sieh' Dir die Auswirkungen an.</p>

    <div class="button-bar">
      <button @click="advanceYear">Jahr abschließen</button>
    </div-->
  </GameSetup>
</template>

<style lang="scss" scoped>
h2 {
  margin: 0 1em;
}

p {
  padding: 0.5rem;
}
</style>
