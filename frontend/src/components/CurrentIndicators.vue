<script lang="ts">
import { defineComponent } from "vue"
import Indicator from "../components/Indicator.vue"
import TimeIndicator from "../components/TimeIndicator.vue"
import { useStore } from "../store"
import { co2Rating, financeRating } from "../Calculator"
import { Game } from "../types"

const co2budget = 4500

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
      return get(this.game, game => game.values.popularity)
    }
  }
})
</script>

<template>
  <div class="CurrentIndicators">
    <Indicator :value="co2value" color="#EE8AC1" />
    <Indicator :value="financeValue" color="#A9D18E" />
    <Indicator :value="popularityValue" color="#8FAADC" />
    <TimeIndicator />
  </div>
</template>

<style lang="scss" scoped>
.CurrentIndicators {
  display: flex;
  flex-direction: row;
}
</style>
