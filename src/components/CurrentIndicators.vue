<script lang="ts">
import { defineComponent } from "vue"
import Indicator from "../components/Indicator.vue"
import TimeIndicator from "../components/TimeIndicator.vue"
import { useStore } from "../store"
import { co2Rating, financeRating } from "../Calculator"
import { Game } from "../types"
import co2 from "../assets/co2.png"
import coin from "../assets/euro.svg"
import hands from "../assets/clapping-hands.png"

function get(game: Game, func: (game: Game) => number): number {
  return game ? Math.round(func(game) / 10) : 0
}

export default defineComponent({
  components: { TimeIndicator, Indicator },

  setup() {
    const store = useStore()
    return { store, co2, coin, hands }
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
    <Indicator :value="co2value" color="#EE8AC1" :img="co2" />
    <Indicator :value="financeValue" color="#A9D18E" :img="coin" />
    <Indicator :value="popularityValue" color="#8FAADC" :img="hands" />
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
