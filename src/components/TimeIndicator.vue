<script lang="ts">
import { computed, defineComponent } from "@vue/runtime-core"
import { useStore } from "../store"

export default defineComponent({
  setup() {
    const store = useStore()

    return {
      store,
      currentYear: computed(() => store.state.game?.currentYear as number),
    }
  },

  computed: {
    timespan(): number {
      return 2050 - 2021
    },

    years(): number {
      return this.currentYear - 2020
    },

    height(): string {
      return "height: " + (this.years / this.timespan) * 100 + "%"
    },
  },
})
</script>

<template>
  <div class="container">
    <div class="arrow-head"></div>
    <div class="indicator" :style="height"></div>
  </div>
</template>

<style lang="scss" scoped>
$color: orange;
$width: 20px;
$border: 1px;

.container {
  width: $width;
  height: calc(10 * (3em + 11px));  // Number of circles multiplies with circle height plus margin/border
  border: $border solid $color;
  border-top: 0;
  margin: 0 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  &::before, &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0px;
  }

  &::before {
    border-top: $border solid $color;
    width: ($width + $border) * 2;
    left: -$width / 2;
  }

  &::after {
    border-top: $border solid white;
    width: $width;
  }
}

.indicator {
  background-color: $color;
}

.arrow-head {
  border: 0 solid $color;
  border-width: $border $border 0 0;
  width: $width * 1.5;
  height: $width * 1.5;
  transform: translate(-$width * 0.25, -$width * 0.75) rotate(-45deg);
}
</style>
