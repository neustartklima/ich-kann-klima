<script lang="ts">
import { defineComponent } from "vue"
import GameSetup from "../components/GameSetup.vue"
import AcceptedLaws from "../components/AcceptedLaws.vue"
import { useStore } from "../store"
import { GameId } from "../types"

export default defineComponent({
  components: {
    GameSetup,
    AcceptedLaws,
  },

  setup() {
    const store = useStore()

    return {
      store,
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
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => ((vm as unknown) as { startGame: (gameId: GameId) => void }).startGame(to.params.id as GameId))
  },
})
</script>

<template>
  <GameSetup>
    <!--h2>Beschlossene Gesetze</h2>
    <AcceptedLaws /-->
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
