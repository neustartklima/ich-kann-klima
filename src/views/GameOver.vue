<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import GameSetup from "../components/GameSetup.vue"

export default defineComponent({
  components: { GameSetup },

  methods: {
    newGame() {
      this.$router.push("/games")
    },
  },
})
</script>

<template>
  <GameSetup>
    <div class="wrapper">
      <h2>Das Spiel ist leider zu Ende</h2>

      <p>Deine Entscheidungen haben etwas verändert - soviel kann man sagen.</p>

      <p>Gar nicht so einfach, Politiker zu sein, oder?</p>

      <div class="button-bar">
        <button @click="newGame">Neuer Versuch</button>
      </div>
    </div>
  </GameSetup>
</template>
