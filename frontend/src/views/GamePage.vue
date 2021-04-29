<script lang="ts">
import { defineComponent } from "vue"
import AcceptedLaws from "../components/AcceptedLaws.vue"
import CurrentIndicators from "../components/CurrentIndicators.vue"
import LawProposals from "../components/LawProposals.vue"

export default defineComponent({
  components: {
    CurrentIndicators,
    LawProposals,
    AcceptedLaws,
  },
})
</script>

<template>
  <CurrentIndicators />
  <div class="wrapper">
    <LawProposals />
    <AcceptedLaws />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
</style>
