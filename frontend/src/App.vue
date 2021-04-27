<script lang="ts">
import { defineComponent } from "vue"
import AcceptedLaws from "./components/AcceptedLaws.vue"
import CurrentIndicators from "./components/CurrentIndicators.vue"
import LawProposals from "./components/LawProposals.vue"

export default defineComponent({
  components: {
    CurrentIndicators,
    LawProposals,
    AcceptedLaws,
  },
})
</script>

<template>
  <h1>#ich-kann-klima</h1>

  <CurrentIndicators />
  <div class="wrapper">
    <LawProposals />
    <AcceptedLaws />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}

h1 {
  text-align: center;
}

.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
</style>
