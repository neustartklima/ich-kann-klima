<script lang="ts">
import { defineComponent } from "vue"
import Indicator from "../components/Indicator.vue"
import TimeIndicator from "../components/TimeIndicator.vue"
import { useStore } from "../store"
import { co2Rating, financeRating } from "../Calculator"
import { Game } from "../game"

function get(game: Game, func: (game: Game) => number): number {
  return game ? Math.round(func(game) / 10) : 0
}

export default defineComponent({
  components: { TimeIndicator, Indicator },

  setup() {
    const store = useStore()
    return { store }
  },

  computed: {
    game(): Game {
      return this.store.state.game as Game
    },

    co2value(): number {
      return get(this.game, co2Rating)
    },

    financeValue(): number {
      return get(this.game, financeRating)
    },

    popularityValue(): number {
      return get(this.game, (game) => game.values.popularity)
    },
  },
})
</script>

<template>
  <div class="CurrentIndicators">
    <TimeIndicator />
    <input :value="co2value" />
    <input :value="financeValue" />
    <input :value="popularityValue" />
  </div>
</template>

<style lang="scss" scoped>
.CurrentIndicators {
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 10px;

  @media all and (orientation: portrait) {
    flex-direction: column;
  }

  @media all and (orientation: landscape) {
    padding: 0px;
    height: 100vh;
  }
}

p {
  text-align: center;
  margin: 0;
  font-size: 120%;
}
</style>
