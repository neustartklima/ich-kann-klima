<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import { computed } from "vue"
import GameSetup from "../components/GameSetup.vue"
import { useStore } from "../store"
import { GameId } from "../types"

export default defineComponent({
  components: { GameSetup },

  setup() {
    const store = useStore()

    return {
      store,
    }
  },

  computed: {
    co2() {
      const budget = this.store.state.game?.values.co2budget!
      const emissions = this.store.state.game?.values.co2emissions!
      if (emissions > 0) {
        if (budget > 0) {
          return "sind weiterhin vorhanden, aber zumindest ist das Budget noch nicht aufgebraucht, dein:e Nachfolger:in hat vielleicht noch eine Chance."
        } else {
          return "sind explodiert, das Budget ist aufgebraucht. Hätte die AfD nicht besser hinbekommen."
        }
      } else {
        if (budget > 0) {
          return "hast du im Griff! Es verbleibt sogar noch ein Rest-CO2-Budget, Gratulation!"
        } else {
          return "hast du gerade noch rechtzeitig ausreichend senken können. Punktlandung."
        }
      }
    },

    debt() {
      const debt = this.store.state.game?.values.stateDebt!
      if (debt < 1000) {
        return "sind ausgeglichen. Die Stabilitätskriterien werden eingehalten."
      } else {
        return "sind dir leider aus dem Ruder gelaufen."
      }
    },

    popularity() {
      const popularity = this.store.state.game?.values.popularity!
      if (popularity < 20) {
        return "entspricht dem, was man von einem langhährigen Diktator erwarten kann."
      } else if (popularity < 50) {
        return "ist nicht berauschend, wiedergewählt würdest du wohl eher nicht."
      } else if (popularity < 80) {
        return "reicht aus, dass du noch länger am Ruder bleiben könntest. Gratulation!"
      } else {
        return "ist völlig unglaubwürdig - war das wirklich eine freie Wahl?"
      }
    },
  },

  methods: {
    loadGame(gameId: GameId) {
      this.store.dispatch("loadGame", { gameId })
    },

    newGame() {
      this.$router.push("/games")
    },
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const component = (vm as unknown) as { loadGame: (gameId: GameId) => void }
      component.loadGame(to.params.id as GameId)
    })
  },
})
</script>

<template>
  <GameSetup>
    <div class="wrapper">
      <h2>Das Spiel ist leider zu Ende</h2>

      <p>Deine Entscheidungen haben etwas verändert - soviel kann man sagen.</p>

      <ul>
        <li>Die CO2-Emmissionen {{ co2 }}</li>
        <li>Die Staatsfinanzen {{ debt }}</li>
        <li>Deine Beliebtheit {{ popularity }}</li>
      </ul>

      <p>Gar nicht so einfach, Politiker zu sein, oder?</p>

      <div class="button-bar">
        <button @click="newGame">Neuer Versuch</button>
      </div>
    </div>
  </GameSetup>
</template>
