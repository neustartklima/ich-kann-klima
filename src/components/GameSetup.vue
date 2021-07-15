<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import CurrentIndicators from "../components/CurrentIndicators.vue"
import EventList from "./EventList.vue"
import PeekInside from "./PeekInside.vue"

export default defineComponent({
  components: { CurrentIndicators, EventList, PeekInside },
  data() {
    return {
      devMode: import.meta.env.DEV || localStorage.getItem("devMode") === "true",
    }
  },
})
</script>

<template>
  <h1>#ich-kann-klima</h1>
  <div class="game-setup">
    <img src="../assets/background.jpg">

    <slot />
    <!--div class="indicators">
      <CurrentIndicators />
    </div-->
  </div>
  <div class="peek">
    <PeekInside v-if="devMode" />
  </div>
</template>

<style lang="scss">
.game-setup {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: left;
  position: relative;

  @media all and (orientation: portrait) {
    flex-direction: column-reverse;
  }

  > img {
    max-height: calc(100vh - 4rem);
  }
}

.peek {
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
}
</style>
